console.log("This javascript is working");

var target = document.getElementById("footerBox");
var sosmed = document.querySelectorAll(".logoComBox");
var detail = document.getElementById("detailBox");
var confirmButton = document.getElementById("confirmButton");
var closeButton = document.getElementById("closeButton");
var whatsappButton = document.getElementById("whatsappBox");
var facebookButton = document.getElementById("facebookButton");
var instagramButton = document.getElementById("instagramButton");
//var label = document.getElementById("text");

var blueBubble = document.getElementById("blueBubble");
var purpleBubble = document.getElementById("purpleBubble");
var tl = gsap.timeline();
tl.to(blueBubble, { duration: 5, y: "5vh", repeat: -1, ease: "power1", yoyo: true, delay: 1 });
tl.to(purpleBubble, { duration: 5, x: "3vw", repeat: -1, yoyo: true }, "-=4.5");
//var closebutton = document.getElementById("closeButton");
var isPortrait = (window.innerHeight / window.innerWidth) > 1;

confirmButton.addEventListener("click", () => {

    var tl = gsap.timeline();
    detail.style.visibility = "visible";

    if (isPortrait) {
        tl.to(target, { duration: 0.5, height: "80vh", y: "0", opacity: 100, ease: "power4" });
        tl.to(sosmed, { duration: 1, y: "67vh", ease: "bounce" }, "-=0.4");
        tl.to(detail, { duration: 0.5, opacity: 100, ease: "power1.in" });
    }
    else {
        tl.to(target, { duration: 0.5, height: "70vh", y: "0", opacity: 100, ease: "power4" });
        tl.to(sosmed, { duration: 1, y: "60vh", ease: "bounce" }, "-=0.4");
        tl.to(detail, { duration: 0.5, opacity: 100, ease: "power1.in" });
    }

    closeButton.style.visibility = "visible";

});

closeButton.addEventListener("click", () => {
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

    detail.style.opacity = 0;
    detail.style.visibility = "hidden";

});

whatsappButton.addEventListener("click", () => {
    confirmButton.disabled = "true";
    var tl = gsap.timeline();
    if (isPortrait) {
        tl.set(whatsappButton, { transformOrigin: 'right bottom' });
        tl.to(whatsappButton, { duration: 0.5, y: "-45vh", width: "80vw", height: "40vh", ease: "power4" });
    }
    else {
        var waForm = document.getElementById("whatsappForm");

        tl.to(whatsappButton, { duration: 0.5, y:"-45vh", width: "30vw", height: "40vh", ease: "power4" });
        tl.to(waForm,{duration:0.5, display:"block",visibility:"visible"});
    }
});

facebookButton.addEventListener("click", () => {
    alert("facebook");
});

instagramButton.addEventListener("click", () => {
    alert("instagram");
})









