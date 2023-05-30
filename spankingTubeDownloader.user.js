// ==UserScript==
// @name          SpankingTube video downloader
// @namespace     SpankingTube video downloader
// @description	  Adds a download button to download videos off of SpankingTube
// @author        thingywhat
// @match         https://www.spankingtube.com/video/*
// @version       2
// @grant         none
// ==/UserScript==

(function() {
    'use strict';

    let downloadButton = document.querySelector("#video_share > span");
    downloadButton.textContent = " Download!";
    downloadButton.onclick = function(e){
        e.stopPropagation();
        location.href = document.querySelector('#video source').src;
    };
})();
