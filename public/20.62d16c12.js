(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{GcXl:function(n,e,t){"use strict";t.r(e);var a=t("GwGj"),s=t.n(a)()(!0);s.push([n.i,".mv-List{list-style:none;padding:0}.mv-List li{margin-bottom:24px}","",{version:3,sources:["webpack://../../../../components/content/list/src/index.scss","webpack://../../theme/lib/settings/_spacing.scss"],names:[],mappings:"AAEA,SACE,eAAA,CACA,SAAA,CACA,YACE,kBCuBG",sourcesContent:["@import '~@s-ui/theme/lib/index';\n\n.mv-List {\n  list-style: none;\n  padding: 0;\n  li {\n    margin-bottom: $m-xl;\n  }\n}\n","@import './size';\n\n// --- Spacing --- //\n//\n// The naming convention used for variables is based on Emmet.\n// See [Emmet cheat sheet](http://docs.emmet.io/cheat-sheet/)\n//\n// Primary prefixes:\n// * m = margin\n// * p = padding\n\n// Paddings\n$p-base: $sz-base; // 8px\n\n$p-giant: $p-base * 6 !default; // 48px\n$p-xxxl: $p-base * 5 !default; // 40px\n$p-xxl: $p-base * 4 !default; // 32px\n$p-xl: $p-base * 3 !default; // 24px\n$p-l: $p-base * 2 !default; // 16px\n$p-m: $p-base !default; // 8px\n$p-s: $p-base * 0.5 !default; // 4px\n$p-xs: $p-base * 0.25 !default; // 2px\n\n// Margins\n$m-base: $sz-base; // 8px\n\n$m-giant: $m-base * 6 !default; // 48px\n$m-xxxl: $m-base * 5 !default; // 40px\n$m-xxl: $m-base * 4 !default; // 32px\n$m-xl: $m-base * 3 !default; // 24px\n$m-l: $m-base * 2 !default; // 16px\n$m-m: $m-base !default; // 8px\n$m-s: $m-base * 0.5 !default; // 4px\n$m-xs: $m-base * 0.25 !default; // 2px\n\n// Gutter\n$gutter: $sz-base * 2 !default;\n\n$gutter-s: $gutter * 0.5 !default;\n$gutter-l: $gutter * 2 !default;\n\n// Gap\n$g-base: $sz-base;\n\n$g-giant: $g-base * 6; // 48px\n$g-xxxl: $g-base * 5; // 40px\n$g-xxl: $g-base * 4; // 32px\n$g-xl: $g-base * 3; // 24px\n$g-l: $g-base * 2; // 16px\n$g-m: $g-base; // 8px\n$g-s: $g-base * 0.5; // 4px\n"],sourceRoot:""}]),e.default=s},GwGj:function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",a=n[3];if(!a)return t;if(e&&"function"===typeof btoa){var s=function(n){var e=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),t="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e);return"/*# ".concat(t," */")}(a),p=a.sources.map((function(n){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(n," */")}));return[t].concat(p).concat([s]).join("\n")}return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,a){"string"===typeof n&&(n=[[null,n,""]]);var s={};if(a)for(var p=0;p<this.length;p++){var i=this[p][0];null!=i&&(s[i]=!0)}for(var o=0;o<n.length;o++){var r=[].concat(n[o]);a&&s[r[0]]||(t&&(r[2]?r[2]="".concat(t," and ").concat(r[2]):r[2]=t),e.push(r))}},e}}}]);