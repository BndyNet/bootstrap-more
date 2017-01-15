"use strict";
$(function() {
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
});
