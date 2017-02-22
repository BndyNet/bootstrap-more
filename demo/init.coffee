"use strict"

_injectStyle = (url) ->
  header = document.getElementsByTagName("head")[0]
  style = document.createElement("link")
  style.setAttribute "rel", "stylesheet"
  style.setAttribute "href", url
  header.insertBefore style, document.getElementsByTagName("script")[0]

_injectScript = (url) ->
  header = document.getElementsByTagName("head")[0]
  script = document.createElement("script")
  script.setAttribute "async", "async"
  script.setAttribute "src", url
  header.appendChild script

@require = (moduleName, version) =>
  switch moduleName.toLowerCase()
    when "core"
      @require "jquery"
      @require "bootstrap"
      @require "bootstrap-more"
      @require "highlight"
    when "jquery"
      version = "1.12.0" if not version
      _injectScript "http://cdnjs.cloudflare.com/ajax/libs/jquery/#{version}/jquery.min.js"
    when "bootstrap"
      version = "3.3.7" if not version
      _injectStyle "http://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/#{version}/css/bootstrap.min.css"
      _injectScript "http://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/#{version}/js/bootstrap.min.js"
    when "bootstrap-more"
      _injectStyle "http://bndy.net/bootstrap-more/dist/bootstrap-more.min.css"
      _injectScript "http://bndy.net/bootstrap-more/dist/bootstrap-more.min.js"
    when "angular"
      version = "1.5.6" if not version
      _injectScript "http://cdnjs.cloudflare.com/ajax/libs/angular.js/#{version}/angular.min.js"
    when "highlight"
      version = "9.9.0" if not version
      _injectStyle "http://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/styles/default.min.css"
      _injectScript "http://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/styles/highlight.min.css"


# baidu statistics
_hmt = _hmt || []
hm = document.createElement("script")
hm.src = "https://hm.baidu.com/hm.js?93fe8707d8b666f04c1b1cce5232f665"
s = document.getElementsByTagName("script")[0]
s.parentNode.insertBefore(hm, s)
