webpackJsonpCoveo__temporary([42],{131:function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(e,"__esModule",{value:!0});var r=n(6),a=n(4),i=n(2),s=n(8),c=n(9),l=n(1),u=n(3),p=n(13),f=n(14),h=function(t){function e(n,o,r){var c=t.call(this,n,e.ID,r)||this;if(c.element=n,c.options=o,i.$$(n).setAttribute("aria-label",s.l("Search")),c.bind.on(n,"click",function(){return c.handleClick()}),""==a.Utils.trim(i.$$(c.element).text())){var l=i.$$("span",{className:"coveo-search-button"},p.SVGIcons.icons.search).el;f.SVGDom.addClassToSVGInContainer(l,"coveo-search-button-svg");var u=i.$$("span",{className:"coveo-search-button-loading"},p.SVGIcons.icons.loading).el;f.SVGDom.addClassToSVGInContainer(u,"coveo-search-button-loading-svg"),n.appendChild(l),n.appendChild(u)}return c}return o(e,t),e.prototype.click=function(){this.handleClick()},e.prototype.handleClick=function(){this.logger.debug("Performing query following button click"),this.usageAnalytics.logSearchEvent(c.analyticsActionCauseList.searchboxSubmit,{}),this.queryController.executeQuery()},e.ID="SearchButton",e.doExport=function(){u.exportGlobally({SearchButton:e})},e.options={},e}(r.Component);e.SearchButton=h,l.Initialization.registerAutoCreateComponent(h)},14:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=function(){function t(){}return t.addClassToSVGInContainer=function(e,n){var o=e.querySelector("svg");o.setAttribute("class",""+t.getClass(o)+n)},t.removeClassFromSVGInContainer=function(e,n){var o=e.querySelector("svg");o.setAttribute("class",t.getClass(o).replace(n,""))},t.addStyleToSVGInContainer=function(t,e){var n=t.querySelector("svg");o.each(e,function(t,e){n.style[e]=t})},t.getClass=function(t){var e=t.getAttribute("class");return e?e+" ":""},t}();e.SVGDom=r}});