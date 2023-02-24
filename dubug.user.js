// ==UserScript==
// @name         dubug
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?domain=people4liberty.org
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function alertTheDan() {
        alert('Dan put a breakpoint in');
    };
alertTheDan();
    processParam();
    // Your code here...
})();