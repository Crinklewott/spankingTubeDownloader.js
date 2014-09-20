// ==UserScript==
// @name          SpankingTube video downloader
// @description	  Adds a download button to download videos off of SpankingTube
// @author        thingywhat
// @include       http://www.spankingtube.com/video/*
// ==/UserScript==

$('.video_description').append($('<a />',{
  style:"cursor:pointer"
}).click(function(){
  $.get("http://www.spankingtube.com/media/player/config_embed.php?vkey=" +
	/\/(\d+)\//.exec(window.location.href)[1], function(dat){
	  location.replace((dat.querySelector("hd") || dat.querySelector("src"))
			   .textContent);
	});
}).text("Download"));
