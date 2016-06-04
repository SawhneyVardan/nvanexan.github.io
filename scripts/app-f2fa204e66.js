/******/!function(e){function n(a){if(t[a])return t[a].exports;var i=t[a]={exports:{},id:a,loaded:!1};return e[a].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}// webpackBootstrap
/******/
var t={};return n.m=e,n.c=t,n.p="",n(0)}([function(e,n,t){"use strict";var a=t(1),i=t(2),r=t(3),l=t(4),o=t(5),s=t(6),c=t(7);angular.module("nve",["ngAnimate","ngSanitize","ngMessages","ngAria","ngResource","ui.router","toastr","angular-scroll-animate"]).config(a.config).config(i.routerConfig).run(r.runBlock).controller("MainController",l.MainController).controller("AboutController",o.AboutController).controller("ContactController",s.ContactController).controller("ExpertiseController",c.ExpertiseController)},function(e,n){"use strict";function t(e){"ngInject";e.debugEnabled(!0)}t.$inject=["$logProvider"],Object.defineProperty(n,"__esModule",{value:!0}),n.config=t},function(e,n){"use strict";function t(e,n,t){"ngInject";e.state("main",{url:"","abstract":!0,templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"ctrl"}).state("main.about",{url:"^/",templateUrl:"app/about/about.html",controller:"AboutController",controllerAs:"ctrl"}).state("main.expertise",{url:"^/expertise",templateUrl:"app/expertise/expertise.html",controller:"ExpertiseController",controllerAs:"ctrl"}).state("main.contact",{url:"^/contact",templateUrl:"app/contact/contact.html",controller:"ContactController",controllerAs:"ctrl"}),n.otherwise("/"),n.when("/about","/"),n.when("/services","/expertise"),n.when("/technologies","/expertise"),t.html5Mode({enabled:!0,requireBase:!1})}t.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],Object.defineProperty(n,"__esModule",{value:!0}),n.routerConfig=t},function(e,n){"use strict";function t(e,n,t){"ngInject";e.debug("runBlock end")}t.$inject=["$log","$state","$stateParams"],Object.defineProperty(n,"__esModule",{value:!0}),n.runBlock=t},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});n.MainController=["$scope",function a(e){"ngInject";t(this,a)}]},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});n.AboutController=["$scope",function a(e){"ngInject";t(this,a);var n=this;n.animateElementIn=function(e){e.removeClass("hidden"),e.addClass("animated fadeInUp")}}]},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});n.ContactController=["$scope",function a(e){"ngInject";t(this,a);var n=this;n.animateElementIn=function(e){e.removeClass("hidden"),e.addClass("animated fadeInUp")}}]},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});n.ExpertiseController=["$scope",function a(e){"ngInject";t(this,a);var n=this;n.animateElementIn=function(e){e.removeClass("hidden"),e.addClass("animated fadeInUp")}}]}]),angular.module("nve").run(["$templateCache",function(e){e.put("app/about/about.html",'<div class="about-page has-md"><h2 class=hidden when-visible=ctrl.animateElementIn>GET /nve/about</h2><p class=hidden when-visible=ctrl.animateElementIn>Hello, I\'m a SXSW Web Award-winning designer and software development consultant based in Toronto.</p><p class=hidden when-visible=ctrl.animateElementIn>I am currently Design Director at <a href=http://weld.is target=_blank>Weld Design Inc.</a> and a consultant with <a href=http://objectsharp.com target=_blank>ObjectSharp Inc.</a>, where I help companies large and small build modern web and mobile applications with agile approaches to design thinking and code.</p><p class=hidden when-visible=ctrl.animateElementIn>In the evenings, I like to read and run. I live in Toronto with my lovely wife, <a href=http://carmencheungphoto.com target=_blank>Carmen</a>, and our French Bulldog, <a href=https://www.instagram.com/georgevancheung/ >George</a>.</p></div>'),e.put("app/contact/contact.html",'<div class="contact-page has-md"><h2 class=hidden when-visible=ctrl.animateElementIn>POST /nve/contact</h2><p class=hidden when-visible=ctrl.animateElementIn>I am always interested in collaborating with fun folks building exciting things. You can reach me at:</p><pre class=hidden when-visible=ctrl.animateElementIn>\n    {\n      "email": "nick.vanexan@gmail.com",\n      "phone": "1-905-960-0263",\n      "twitter": "@nvanexan"\n    }\n  </pre></div>'),e.put("app/expertise/expertise.html",'<div class="expertise-page has-md"><h2 class=hidden when-visible=ctrl.animateElementIn>GET /nve/expertise</h2><h3 class=hidden when-visible=ctrl.animateElementIn>GET /nve/expertise/services</h3><p class=hidden when-visible=ctrl.animateElementIn>I offer consulting services in the following areas:</p><pre class=hidden when-visible=ctrl.animateElementIn>\n    var services = [\n      "UX Design",\n      "Front-End Web Development",\n      "Product Strategy &amp; Design",\n    ];\n  </pre><h3 class=hidden when-visible=ctrl.animateElementIn>GET /nve/expertise/technologies</h3><p class=hidden when-visible=ctrl.animateElementIn>I love JavaScript and primarily work with the MEAN stack. I am also familiar with Ruby on Rails. These are the technologies I most commonly use in my projects:</p><pre class=hidden when-visible=ctrl.animateElementIn>\n    var technologies = [\n      "AngularJS",\n      "Node &amp; Express",\n      "Ionic Framework",\n      "HTML5 / SCSS",\n      "Git / Gulp / Bower"\n    ];\n  </pre></div>'),e.put("app/main/main.html",'<!-- Wrapper --><div class=wrapper><!-- Page Header --><header class=main-content-header><div class="main-content-header__logo has-md"><h1>nve</h1></div><nav class=main-content-header__nav><ul class=__component-main-nav><li><a ui-sref=main.about ui-sref-active=is-active ui-sref-opts="{reload: true}">About</a></li><li><a ui-sref=main.expertise ui-sref-active=is-active ui-sref-opts="{reload: true}">Expertise</a></li><li><a ui-sref=main.contact ui-sref-active=is-active ui-sref-opts="{reload: true}">Contact</a></li></ul></nav></header><!-- <div ng-class="{\'animated fadeInUp\': pageLoaded == true}"> --><!-- Page Content --><div ui-view class=main-content-container></div><!-- Page Footer --><footer class=main-content-footer><div class=main-content-footer__title>Nick Van Exan. Designer &amp; Developer.</div><nav class=main-content-footer__navigation><ul><!-- <li><a href="mailto:nick@weld.is">nick@weld.is</a></li>\n          <li><a href="tel:+19059600263">+1-905-960-0263</a></li> --><li><a href=https://twitter.com/nvanexan target=_blank>Twitter</a></li><li><a href=https://github.com/nvanexan target=_blank>GitHub</a></li><li><a href=https://dribbble.com/nvanexan target=_blank>Dribbble</a></li></ul></nav></footer><!-- </div> --></div>')}]);
//# sourceMappingURL=../maps/scripts/app-f2fa204e66.js.map
