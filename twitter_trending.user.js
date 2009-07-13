// srsly...
// ==UserScript==
// @name	  Trending Topics Twitter Replacement          
// @namespace     http://sanitycheckfail.com/
// @description   script to make Twitter's trending topics more accurate.
// @include http://twitter.com/*
// @include http://*.twitter.com/*
// ==/userscript==

var tt_span = document.getElementById('tt_menu').firstChild;
tt_span.removeChild(tt_span.firstChild);
tt_span.appendChild(document.createTextNode("Dumbest Shit We Got"));