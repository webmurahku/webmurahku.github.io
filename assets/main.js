console.log("This javascript is working");

var target = document.getElementById("footerBox");
var sosmed = document.querySelectorAll(".logoComBox");
var detail = document.getElementById("detailBox");
var confirmButton = document.getElementById("confirmButton");
var closeButton = document.getElementById("closeButton");
var waNumber = "+628113023262";

var blueBubble = document.getElementById("blueBubble");
var purpleBubble = document.getElementById("purpleBubble");

var tl = gsap.timeline();
tl.to(blueBubble, { duration: 5, y: "5vh", repeat: -1, ease: "power1", yoyo: true, delay: 1 });
tl.to(purpleBubble, { duration: 5, x: "3vw", repeat: -1, yoyo: true }, "-=4.5");

var isPortrait = (window.innerHeight / window.innerWidth) > 1;

//MAU! Button click event
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

//MAU! Detail Content Close Button event
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

var waButton = document.querySelector("#whatsappButton");
waButton.addEventListener("click", () => {
    var waBox = document.querySelectorAll("#whatsappBox");
    var waForm = document.querySelectorAll(".waForm");

    var tl = gsap.timeline();
    tl.to(waBox,{duration:0.25, y:"-40vh", ease:"power2"}); 
    tl.to(waBox,{duration:0.25, width:"37vw", height:"37vh", ease:"power2"});
    tl.to(waForm,{duration:0, display:"block"});

    var waCloseButton = document.getElementById("waFormCloseButton");
    waCloseButton.addEventListener("click", () => {
        tl.reverse();
    })

    var waSendButton = document.getElementById("waFormSendButton");
    waSendButton.addEventListener("click", ()=> {
        console.log("send message");
        var msgText = document.getElementById("waFormTextMessage");
        //console.log(msgText)
        var win = window.open(`https://wa.me/${waNumber}?text=${msgText.value}`,`_blank`);
        msgText.value="";
        tl.reverse();
    })
})
