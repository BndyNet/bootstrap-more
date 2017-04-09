"use strict";
$(function() {
  var _generateNav;
  $(".panel-example textarea.code").each(function() {
    return $(this).val($(this).parents(".panel-example").find(".panel-body").html());
  });
  $("form.readonly").find("input,select,button").each(function() {
    var tag, tagType, val, wrapper;
    tag = $(this)[0].tagName;
    tagType = $(this).attr("type");
    val = "";
    switch (tag) {
      case "INPUT":
        $(this).attr("readonly", true);
        $(this).attr("disabled", true);
        switch (tagType) {
          case "radio":
          case "checkbox":
            wrapper = $(this).parent();
            if (wrapper.parent().hasClass("checkbox" || wrapper.parent().hasClass("radio"))) {
              wrapper = wrapper.parent();
            }
            if ($(this).is(":checked")) {
              val = wrapper.text();
              wrapper.after("<div class='form-control-static'>" + val + "</div>");
            }
            return wrapper.remove();
          case "file":
            wrapper = $(this).parents('.form-group');
            return wrapper.remove();
          default:
            val = $(this).val();
            $(this).after("<div class='form-control-static'>" + val + "</div>");
            return $(this).remove();
        }
        break;
      case "SELECT":
        val = $(this).val();
        $(this).after("<div class='form-control-static'>" + val + "</div>");
        return $(this).remove();
    }
  });
  $("form.readonly:not(:visible)").show();
  _generateNav = function(eleSection, hNumber, parentNav) {
    var code, header, nav, navContainer, navItem, title;
    header = $(eleSection).find("h" + hNumber + ":first").clone();
    header.find("small").remove();
    title = header.text().trim();
    code = title.replace(/\W+/g, "-");
    $(eleSection).attr("id", code);
    navItem = $("<li><a></a></li>");
    navItem.find("a").text(title);
    navItem.find("a").attr("href", "#" + code);
    if (parentNav) {
      nav = parentNav.find("ul");
      if (nav.length === 0) {
        nav = $("<ul class='nav'></ul>");
        parentNav.append(nav);
      }
      nav.append(navItem);
    } else {
      nav = $(".nav-article:first");
      if (nav.length === 0) {
        nav = $("<ul class='nav nav-article affix'></ul>");
        navContainer = $(".page-article .navs");
        if (navContainer.length === 0) {
          $("body").append(nav);
        } else {
          navContainer.append(nav);
        }
      }
      nav.append(navItem);
    }
    $(eleSection).find("section").each(function() {
      _generateNav($(this), hNumber + 1, navItem);
    });
  };
  $(".page-article .sections > section").each(function() {
    return _generateNav($(this), 3, null);
  });
  $(".nav-article").on("click", "a", function() {
    $(".nav-article li").removeClass("active");
    return $(this).parent().addClass("active");
  });
  $(".side-panel").each(function(item) {
    var bottom, left, screenHeight, screenWidth, top;
    screenWidth = $(window).width();
    screenHeight = $(window).height();
    top = $(this).attr("top");
    left = $(this).attr("left");
    bottom = $(this).attr("bottom");
    if (!bottom) {
      bottom = 0;
    }
    if (top) {
      $(this).css({
        top: top + "px",
        height: screenHeight - top - bottom
      });
    }
    if (left) {
      $(this).css({
        left: left + "px",
        width: screenWidth - left
      });
    }
    return $(this).css({
      marginLeft: $(this).width()
    });
  });
  $(document).on("click", "[data-toggle='sidepanel']", function() {
    var target, targetEle;
    target = $(this).attr("data-target");
    targetEle = $("#" + target);
    return targetEle.animate({
      marginLeft: 0
    });
  });
  $(".side-panel").on("click", ".dismiss", function() {
    var targetEle;
    targetEle = $(this).closest(".side-panel");
    return targetEle.animate({
      marginLeft: targetEle.width()
    });
  });
});
