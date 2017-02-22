"use strict"

$ ->

  # show code for panel-example
  $(".panel-example textarea.code").each ->
    $(this).val($(this).parents(".panel-example").find(".panel-body").html())

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

  # init navs for .page-article
  _generateNav = (eleSection, parentNav) ->
    h3 = $(eleSection).find("h3:first").clone()
    h3.find("small").remove()
    title = h3.text().trim()
    code = title.replace ///\W+///g, "-"
    $(eleSection).attr "id", code

    navItem = $("<li><a></a></li>")
    navItem.find("a").text(title)
    navItem.find("a").attr("href", "#" + code)
    if parentNav
      nav = parentNav.find("ul")
      if nav.length is 0
        nav = $("<ul class='nav'></ul>")
        parentNav.append(nav)
      nav.append(navItem)
    else
      nav = $(".nav-article:first")
      if nav.length is 0
        nav = $("<ul class='nav nav-article affix'></ul>")
        navContainer = $(".page-article .navs")
        if navContainer.length is 0
          $("body").append(nav)
        else
          navContainer.append(nav)
      nav.append(navItem)
    $(eleSection).find("section").each ->
      _generateNav($(this), navItem)
      return
    return
  $(".page-article .sections > section").each ->
    _generateNav $(this), null
  $(".nav-article").on "click", "a", ->
    $(".nav-article li").removeClass("active")
    $(this).parent().addClass("active")




  return