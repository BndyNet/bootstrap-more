"use strict";
var _hmt, _injectScript, _injectStyle, hm, s;

_injectStyle = function(url) {
  var header, style;
  header = document.getElementsByTagName("head")[0];
  style = document.createElement("link");
  style.setAttribute("rel", "stylesheet");
  style.setAttribute("href", url);
  return header.insertBefore(style, document.getElementsByTagName("script")[0]);
};

_injectScript = function(url) {
  var header, script;
  header = document.getElementsByTagName("head")[0];
  script = document.createElement("script");
  script.setAttribute("async", "async");
  script.setAttribute("src", url);
  return header.appendChild(script);
};

this.require = (function(_this) {
  return function(moduleName, version) {
    switch (moduleName.toLowerCase()) {
      case "core":
        _this.require("jquery");
        _this.require("bootstrap");
        _this.require("bootstrap-more");
        return _this.require("highlight");
      case "jquery":
        if (!version) {
          version = "1.12.0";
        }
        return _injectScript("http://cdnjs.cloudflare.com/ajax/libs/jquery/" + version + "/jquery.min.js");
      case "bootstrap":
        if (!version) {
          version = "3.3.7";
        }
        _injectStyle("http://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/" + version + "/css/bootstrap.min.css");
        return _injectScript("http://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/" + version + "/js/bootstrap.min.js");
      case "bootstrap-more":
        _injectStyle("http://bndy.net/bootstrap-more/dist/bootstrap-more.min.css");
        return _injectScript("http://bndy.net/bootstrap-more/dist/bootstrap-more.min.js");
      case "angular":
        if (!version) {
          version = "1.5.6";
        }
        return _injectScript("http://cdnjs.cloudflare.com/ajax/libs/angular.js/" + version + "/angular.min.js");
      case "highlight":
        if (!version) {
          version = "9.9.0";
        }
        _injectStyle("http://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/styles/default.min.css");
        return _injectScript("http://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/styles/highlight.min.css");
    }
  };
})(this);

_hmt = _hmt || [];

hm = document.createElement("script");

hm.src = "https://hm.baidu.com/hm.js?93fe8707d8b666f04c1b1cce5232f665";

s = document.getElementsByTagName("script")[0];

s.parentNode.insertBefore(hm, s);
