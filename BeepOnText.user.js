// ==UserScript==
// @name         BeepOnText
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.auditmassachusetts.com
// @grant        unsafeWindow
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

(function() {
    'use strict';
    jQuery.noConflict();
    var player = document.createElement('audio');
    player.src = 'https://notificationsounds.com/soundfiles/a86c450b76fb8c371afead6410d55534/file-sounds-1108-slow-spring-board.mp3';
    player.preload = 'auto';
    function alertUser() {
        var myWindow=window.open("", "mywindow", "width=200,height=100");
        myWindow.document.write("<p>Detected a new ticket at "+new Date()+"</p>");
        //player.play();  Cannot use this code until October when chrome reenables playing sounds from javascript.  Till then the popup must suffice.
    };
    function reloadPage(){
        location.reload();
    }

    if(window.find('(0)')){
        setInterval(reloadPage,30000);
    }
    else{
        setInterval(alertUser,3000);
    }



    // Your code here...
})();