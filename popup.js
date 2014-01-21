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
	button.onclick = function(e) {
		var prevLink = button.getclass("fp-direction fp-prev ");
		if (!prevLink) {
			alert("prevLink not found!");
		}
		else {
			var i = 0;
			while(i < 100) {
				i++;
				button.trigger();
				prevLink = button.getclass("fp-direction fp-prev ");
				if(!prevLink) {
					alert("prevLink not found after " + i + " prevs");
				}
				else {
					var photoLink = button.getclass("fp-stage clearfix");
					if(!photoLink) {
						alert("photoLink not found");
					}
					else {
						alert(photoLink.href);
						alert("succeed");
					}
					break;
				}
			}
		}
	}
}

addButton();
addListener();