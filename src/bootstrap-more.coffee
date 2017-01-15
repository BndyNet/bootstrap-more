"use strict"

$ ->
  # read-only form
  $("form.readonly").find("input,select,button").each ->
    tag = $(this)[0].tagName
    tagType = $(this).attr "type"
    val = ""
    switch tag
      when "INPUT"
        $(this).attr "readonly", true
        $(this).attr "disabled", true
        switch tagType
          when "radio", "checkbox"
            wrapper = $(this).parent()
            wrapper = wrapper.parent() if wrapper.parent().hasClass "checkbox" or wrapper.parent().hasClass "radio"
            if $(this).is ":checked"
              val = wrapper.text()
              wrapper.after "<div class='form-control-static'>#{val}</div>"
            wrapper.remove()
          when "file"
            wrapper = $(this).parents('.form-group')
            wrapper.remove()
          else
            val = $(this).val()
            $(this).after "<div class='form-control-static'>#{val}</div>"
            $(this).remove()
      when "SELECT"
        val = $(this).val()
        $(this).after "<div class='form-control-static'>#{val}</div>"
        $(this).remove()
  $("form.readonly:not(:visible)").show()
  return