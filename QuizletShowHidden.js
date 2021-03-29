// ==UserScript==
// @name         Quizlet Show Hidden Flashcards
// @namespace    http://tampermonkey.net/
// @version      1.0.3
// @description  Show the hidden flashcards in Quizlet without logging in. 
// @author       observer_alpha
// @include      https://quizlet.com/*
// @run-at       document-end
// @match        http*://quizlet.com/*
// @grant        none
// @license      GNU General Public License v3.0
// ==/UserScript==

function fuck() {
    "use strict";
    // Your code here...
    setTimeout(function(){
        // show all hidden elements and disble the reading function.
        var elements1 = document.getElementsByClassName(
            "SetPageTerm has-definitionText"
        );
        for (var i = 0; i < elements1.length; i++) {
            elements1[i].className = "SetPageTerm has-definitionText is-showing";
            // remove all event listeners by cloning the elements.
            var elClone = elements1[i].cloneNode(true);
            elements1[i].parentNode.replaceChild(elClone, elements1[i]);
        }

        // remove the fucking login box.
        var elements2 = document.getElementsByClassName("SignupWallInline");
        for (i = 0; i < elements2.length; i++) {
            elements2[i].parentNode.removeChild(elements2[i]);
        }
        var elements3 = document.getElementsByClassName("SetPageWall");
        for (i = 0; i < elements3.length; i++) {
            elements3[i].parentNode.removeChild(elements3[i]);
        }
    }, 2000);

}

// Start Fucking it at finishing all loadings. 
window.addEventListener("load", fuck, false);
