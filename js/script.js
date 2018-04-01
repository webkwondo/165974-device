var link = document.querySelector(".contact-button");
var popup = document.querySelector(".modal-contact");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector(".contact-form");
var contactName = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var msg = popup.querySelector("[name=msg]");
var storageName = localStorage.getItem("name");
var storageEmail = localStorage.getItem("email");

var mapLink = document.querySelector(".map-link");
var mapModal = document.querySelector(".modal-map");
var mapClose = mapModal.querySelector(".modal-close");

var isStorageSupport = true;
var storage = "";
try {
	storage = localStorage.getItem("name");
} catch (err) {
	isStorageSupport = false;
}
link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");

	if (storageName) {
		contactName.value = storageName;
		if (storageEmail) {
			email.value = storageEmail;
			msg.focus();
		} else {
			email.focus();
		}
	} else {
		contactName.focus();
	}
});
close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});
form.addEventListener("submit", function (evt) {
	if (!contactName.value || !email.value || !msg.value) {
		evt.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("name", contactName.value);
		}
	}
});
window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
			popup.classList.remove("modal-error");
		}
	}
});

mapLink.addEventListener("click", function(event) {
	event.preventDefault();
	mapModal.classList.add("modal-show");
});
mapClose.addEventListener("click", function(event) {
	event.preventDefault();
	mapModal.classList.remove("modal-show");
});

function openTab(evt, tabName) {
	var i, tabcontent, tablinks, tabitems;
	tabitems = document.getElementsByClassName("tab-item");
	for (i = 0; i < tabitems.length; i++) {
		if (tabitems[i].classList.contains("active")) {
			tabitems[i].classList.remove("active");
		}
	}
	tabcontent = document.getElementsByClassName("tab-pane");
	for (i = 0; i < tabcontent.length; i++) {
		if (tabcontent[i].classList.contains("active")) {
			tabcontent[i].classList.remove("active");
		}
	}
	tablinks = document.getElementsByClassName("tab-link");
	for (i = 0; i < tablinks.length; i++) {
		if (tablinks[i].classList.contains("active")) {
			tablinks[i].classList.remove("active");
		}
	}
	document.getElementById(tabName).classList.add("active");
	evt.currentTarget.className += " active";
	evt.currentTarget.parentNode.classList.add("active");
}

function openSlide(evt, slideName) {
	var i, slidecontent, slidecontrols;
	slidecontent = document.getElementsByClassName("slide");
	for (i = 0; i < slidecontent.length; i++) {
		if (slidecontent[i].classList.contains("active")) {
			slidecontent[i].classList.remove("active");
		}
	}
	slidecontrols = document.getElementsByClassName("slider-control");
	for (i = 0; i < slidecontrols.length; i++) {
		if (slidecontrols[i].classList.contains("active")) {
			slidecontrols[i].classList.remove("active");
		}
	}
	document.getElementById(slideName).classList.add("active");
	evt.currentTarget.className += " active";
}
