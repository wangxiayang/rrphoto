function getElementByClass(className) {
	var elems = document.getElementsByTagName('*'), i;
	for (i in elems) {
		if((' ' + elems[i].className + ' ').indexOf(' ' + className + ' ')
			> -1) {
			return elems[i];
	}
}
}

function addButton() {
	var bar = getElementByClass("nav-main");
	if (!bar) {
		alert("bar not found!");
	}
	else {
		bar.innerHTML += "<div class=\"menu\"><div class=\"menu-title\"><a><span class=\"menu-title-text\" id=\"showPhotos\">照片</span></a></div></div>";
	}
}

function addListener() {
	var button = document.getElementById("showPhotos");
	button.getclass = getElementByClass;	// reserve the method in a hidden attr
	button.trigger = function () {
		var a = document.createEvent("MouseEvents");
		a.initEvent("click", true, true);
		button.getclass("fp-direction fp-prev ").dispatchEvent(a);
	}
	button.checkId = function() {
		if(button.loopIndex >= 1000) {
			window.clearInterval(button.intervalId);
			alert("not found after " + button.loopIndex + " prevs");
			return;
		}

		prevLink = button.getclass("fp-direction fp-prev ");
		if(!prevLink) {
			alert("prevLink not found after " + button.loopIndex + " prevs");
			window.clearInterval(button.intervalId);
			return;
		}
		else {
			var photoLink = button.getclass("fp-stage clearfix");
			if(!photoLink) {
				alert("photoLink not found");
				window.clearInterval(button.intervalId);
				return;
			}
			else {
				var url = photoLink.href;
				if(url == button.lastURL) {
					//alert("equal url after " + button.loopIndex + "prevs");
				}
				else {
					button.lastURL = url;
				}
				var ownerId = url.split("/")[4];
				var userId = document.URL.split("/")[3];
				if(ownerId - userId) {
					button.loopIndex++;
					return;
				}
				else {
					// equivalent ids found
					alert("found your photo after " + button.loopIndex + " prevs");
					window.clearInterval(button.intervalId);
					return;
				}
			}
		}
	}
	button.onclick = function(e) {
		var prevLink = button.getclass("fp-direction fp-prev ");
		if (!prevLink) {
			alert("prevLink not found!");
		}
		else {
			button.loopIndex = 0;
			var intervalId = window.setInterval("document.getElementById(\"showPhotos\").trigger();document.getElementById(\"showPhotos\").checkId()", 500);
			button.intervalId = intervalId;
		}
	}
}

addButton();
addListener();