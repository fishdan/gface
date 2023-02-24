// ==UserScript==
// @name         NBEmail
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Insert 'Dear '+ firstname into email fields
// @author       Dan Fishman
// @match        https://johnsonweld2016.nationbuilder.com/admin/signups/*
// @grant        none
// ==/UserScript==

(function() {
    var topOfPage='Vermont Volunteer';
    var emailable=false;//default do not send globally
    var searcher=setInterval(waitForActivity,1000);
    function waitForActivity(){
        clearInterval(searcher);
        var activityLog=document.getElementsByClassName('activity');
        if(!activityLog){
            searcher=setInterval(waitForActivity,1000);
        }
        else{
            if(checkSendEmail()){
            //do nothing
            }
            else{
                var nextButton=document.getElementsByClassName('next-page')[0];
                nextButton.click();
                //alert(nextButton.length);
            }
        }
    }
        
    function checkSendEmail(){    
        'use strict';
        var myName='Daniel Fishman';
        var myEmail='danfishman@johnsonweld.com';
        var mySubject='Join Us Friday in Manchester';
        //javascript escape your text here: http://www.howtocreate.co.uk/tutorials/jsexamples/syntax/prepareInline.html
        var myMessage = 'My Name is Dan Fishman and I am the North East Director for the Johnson\/Weld Campaign.\n\nYou know how I know we\'re doing well? The Clinton Machine is publishing lies about Bill Weld to try to fracture our will. You can read more about their dirty tricks here: \nhttp:\/\/reason.com\/blog\/2016\/10\/05\/bill-weld-media-is-publishing-made-up-st\n\nSo how do we counter that? We rally the troops! We\'re having a rally at the Radisson in Manchester Friday at 6pm and we need YOU to come and to bring a friend. Please register here : \nhttp:\/\/www.tinyurl.com\/BillInManchester\n\nIt\'s CRITICAL that we show the Main Stream Media that they cannot control us. The Republicans and the Democrats have conspired to shut us out of the debates. Are you going to let them SHUT YOU UP too?\n\nCome make some noise Friday night!  We\'ll have yard signs and swag for everyone. PLEASE bring a friend. We need numbers. Be counted.\n\nDan';        
        var myDiv=document.getElementById('signup_note_nav');
        var children = myDiv.childNodes;   
        for (var i = 0; i < children.length; i++) {
            // access to individual element:
            var elem = children[i];
            if(elem.innerHTML && elem.innerHTML == 'Email'){
                console.log(elem.innerHTML);
                emailable=true;
            }
        }
        //if our subject is on the page, we emailed them already
        if(window.find(mySubject)){
            emailable=false;
            window.find(topOfPage);
            $(document).scrollTop(0);
            return false;
        }
        //if the user has opted out of email contacts their email address is in a strike tag
        if(document.getElementsByTagName("STRIKE").length>0) return false;    
        if(emailable){
            var mySpan=document.getElementsByClassName('signup-name')[0];
            var nas=mySpan.innerText;
            var firstName=nas.split(' ')[0];
            var textArea= document.getElementById('email_body_text');
            var style = window.getComputedStyle(textArea);
            var myCC=document.getElementById('email_cc');
            myCC.value=myEmail;
            var subjectField=document.getElementById('email_subject');
            subjectField.value=firstName+":"+mySubject;
            textArea.value='Dear '+firstName+",\n\n";        
            textArea.value+=myMessage;
            //if(confirm('Send Email?')){
                document.forms['new_email'].submit();
            return true;
            //}           
        }   
    }
    
})();

/**
written by Dan Fishman for the Johnson/Weld 2016 campaign, 
Licensed under CreativeCommons Attribution 4.0 International
**/
