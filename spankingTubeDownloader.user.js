// ==UserScript==
// @name          SpankingTube video downloader
// @namespace     SpankingTube video downloader
// @description	  Adds a download button to download videos off of SpankingTube
// @author        thingywhat
// @include       http://www.spankingtube.com/video/*
// @version       1
// @grant         none
// ==/UserScript==

$('#embed_video > a').unbind('click').removeAttr('href').click(function(){
  var vkey = "//www.spankingtube.com/media/player/config_embed.php?vkey=";
  $.get(vkey + /\/(\d+)\//.exec(location.href)[1], function(dat){
    location.replace(dat.querySelector("hd").textContent ||
		     dat.querySelector("src").textContent);
  });
}).find('span').text("Download");
