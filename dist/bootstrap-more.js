"use strict";
$(function() {
  var _generateNav, initSidePanel;
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
    $(this).parent().addClass("active");
    return console.debug($(this).parent().html());
  });
  if ($(".page-article").length > 0) {
    $("body").scrollspy({
      target: ".nav-article"
    });
  }
  initSidePanel = function(sidepanel) {
    var bottom, heading, left, screenHeight, screenWidth, top;
    $("body").css({
      overflow: "hidden"
    });
    sidepanel.css({
      display: "block"
    });
    screenWidth = $(window).width();
    screenHeight = $(window).height();
    top = sidepanel.attr("top");
    left = sidepanel.attr("left");
    bottom = sidepanel.attr("bottom");
    if (!bottom) {
      bottom = 0;
    }
    sidepanel.css({
      top: top + "px"
    });
    if (top) {
      sidepanel.css({
        height: screenHeight - top - bottom
      });
    }
    sidepanel.css({
      left: left + "px"
    });
    if (left) {
      sidepanel.css({
        width: screenWidth - left
      });
    }
    sidepanel.css({
      marginLeft: $(this).width()
    });
    heading = sidepanel.find(".heading:first");
    return sidepanel.find(".body").css({
      height: sidepanel.outerHeight() - heading.outerHeight() - 2,
      overflow: "auto"
    });
  };
  $(document).on("click", "[data-toggle='sidepanel']", function() {
    var target, targetEle;
    target = $(this).attr("data-target");
    targetEle = $("#" + target);
    initSidePanel(targetEle);
    return targetEle.animate({
      marginLeft: 0
    });
  });
  $(".side-panel").on("click", ".dismiss", function() {
    var targetEle;
    $("body").css({
      overflow: "auto"
    });
    targetEle = $(this).closest(".side-panel");
    return targetEle.animate({
      marginLeft: targetEle.width()
    }, function() {
      return $(this).css({
        display: "none"
      });
    });
  });
});
