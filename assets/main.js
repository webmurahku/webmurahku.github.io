console.log("This javascript is working");
var isPortrait = (window.innerHeight / window.innerWidth) > 1;
var isDetailOpen = false;
var isWhatsappOpen = false;

var target = document.getElementById("footerBox");
var sosmed = document.querySelectorAll(".logoComBox");
var detail = document.getElementById("detailBox");
var openDetailButton = document.getElementById("confirmButton");
var closeDetailButton = document.getElementById("closeButton");
var waNumber = "+628113023262";

var blueBubble = document.getElementById("blueBubble");
var purpleBubble = document.getElementById("purpleBubble");

var tl = gsap.timeline();
tl.to(blueBubble, { duration: 5, y: "5vh", repeat: -1, ease: "power1", yoyo: true, delay: 1 });
tl.to(purpleBubble, { duration: 5, x: "3vw", repeat: -1, yoyo: true }, "-=4.5");


//MAU! Button click event
openDetailButton.addEventListener("click", () => {
    if (!isDetailOpen) {
        if (isWhatsappOpen) {
            closeWhatsappMessage.then(openDetail());
        }
        else {
            openDetail();
        }
    }
});

//MAU! Detail Content Close Button event
closeDetailButton.addEventListener("click", () => {
    if (isDetailOpen) {
        closeDetail();
    }
});

var openWaMessageButton = document.querySelector("#whatsappButton");

openWaMessageButton.addEventListener("click", () => {
    console.log("clicked");

    if (!isWhatsappOpen) {

        openWhatsappMessage();
    }
});

var whatsappTl;

function openDetail() {
    return new Promise((resolve, reject) => {
        var tl = gsap.timeline();
        detail.style.visibility = "visible";

        if (isPortrait) {
            tl.to(target, { duration: 0.5, height: "80vh", opacity: 100, ease: "power4" });
            tl.to(sosmed, { duration: 1, y: "67vh", ease: "bounce" }, "-=0.4");
            tl.to(detail, { duration: 0.5, opacity: 100, ease: "power1.in" });
        }
        else {
            tl.to(target, { duration: 0.5, height: "70vh", y: "0", opacity: 100, ease: "power4" });
            tl.to(sosmed, { duration: 1, y: "60vh", ease: "bounce" }, "-=0.4");
            tl.to(detail, { duration: 0.5, opacity: 100, ease: "power1.in" });
        }
        isDetailOpen = true;
        closeButton.style.visibility = "visible";
    });
}

function closeDetail() {
    return new Promise((resolve, reject) => {
        closeButton.style.visibility = "hidden";
        var tl = gsap.timeline();

        if (isPortrait) {
            tl.to(detail, { duration: 0.5, opacity: 0 });
            tl.to(target, { duration: 0.5, height: "20vh", y: "0vh", ease: "power4" });
            tl.to(sosmed, { duration: 0.5, y: "0vh", ease: "power4" }, "-=0.5");
        }
        else {
            tl.to(detail, { duration: 0.5, opacity: 0 });
            tl.to(target, { duration: 0.5, height: "10vh", y: "0vh", ease: "power4" });
            tl.to(sosmed, { duration: 0.5, y: "0vh", ease: "power4" }, "-=0.5");
        }
        isDetailOpen = false;
        detail.style.opacity = 0;
        detail.style.visibility = "hidden";
    });
}

function openWhatsappMessage() {
    return new Promise((resolve, reject) => {

        whatsappTl = gsap.timeline();
        var waBox = document.querySelectorAll("#whatsappBox");
        var waForm = document.querySelectorAll(".waForm");
        openWaMessageButton.disabled = true;
        openDetailButton.disabled = true;
        closeDetailButton.disabled = true;
        isWhatsappOpen = true;

        if (isPortrait) {
            if (isDetailOpen) {
                whatsappTl.to(waBox, { duration: 0.25, y: "10vh", ease: "power2" });
            }
            else {
                whatsappTl.to(waBox, { duration: 0.25, y: "-50vh", ease: "power2" });
            }
            whatsappTl.to(waBox, { duration: 0.25, width: "87vw", height: "45vh", ease: "power2" });
            whatsappTl.to(waForm, { duration: 0, display: "block" });
        }
        else {
            if (isDetailOpen) {
                whatsappTl.to(waBox, { duration: 0.25, y: "10vh", backgroundColor:"#dff", ease: "power2" });
            }
            else {
                whatsappTl.to(waBox, { duration: 0.25, y: "-40vh", ease: "power2" });
            }
            whatsappTl.to(waBox, { duration: 0.25, width: "37vw", height: "37vh", ease: "power2" });
            whatsappTl.to(waForm, { duration: 0, display: "block" });
        }

        isWhatsappOpen = true;

        var waCloseButton = document.getElementById("waFormCloseButton");
        waCloseButton.addEventListener("click", () => {
            closeWhatsappMessage();
        })

        var waSendButton = document.getElementById("waFormSendButton");
        waSendButton.addEventListener("click", () => {
            var msgText = document.getElementById("waFormTextMessage");
            var win = window.open(`https://wa.me/${waNumber}?text=${msgText.value}`, `_blank`);
            msgText.value = "";
            closeWhatsappMessage();
        });
    });
}

function closeWhatsappMessage() {
    return new Promise((resolve, reject) => {
        if (whatsappTl) {
            whatsappTl.reverse();
            openWaMessageButton.disabled = false;
            openDetailButton.disabled = false;
            closeDetailButton.disabled = false;
            isWhatsappOpen = false;
        }
    });
}