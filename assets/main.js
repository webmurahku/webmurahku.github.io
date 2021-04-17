console.log("This javascript is working");

var target = document.getElementById("footerBox");
var sosmed = document.querySelectorAll(".comlogo");
var detail = document.getElementById("detail");
var confimrbutton = document.getElementById("confirmButton");


var blueBubble = document.getElementById("blueBubble");
var purpleBubble = document.getElementById("purpleBubble");
var tl = gsap.timeline();
tl.to(blueBubble,{duration:5, y:50, repeat:-1, yoyo:true});
tl.to(purpleBubble,{duration:5, x:20, repeat:-1, yoyo:true});
//var closebutton = document.getElementById("closeButton");

//activities.addEventListener("click", () => {
//    var tl=gsap.timeline();
//    tl.to(target,{duration:0.5, height:"80vh", y:"-60vh", opacity:100, ease:"power4"});
//    tl.to(sosmed,{duration:1, y:"65vh", ease:"yoyo"},"-=0.4");
//    tl.to(detail,{duration:0.5,opacity:100, ease:"power4"});
//    tl.to(closebutton,{duration:0.1, visibility:"visible"});
//});

//closebutton.addEventListener("click", ()=>{
//    var tl=gsap.timeline();
//    tl.to(closebutton,{duration:0.1,visibility:"hidden"});
//    tl.to(detail,{duration:0.5,opacity:0});
//    tl.to(target,{duration:0.5, height:"20vh", y:"0vh", opacity:"70%",ease:"power4"});
//    tl.to(sosmed,{duration:0.5, y:"0vh",ease:"power4"},"-=0.5");
//});




