console.log("This javascript is working");

//get the correct window size 
updateSize();

//listen to resiz event
window.addEventListener('resize', () => {
    updateSize();
})

function updateSize() {
    //get viewport height
    let vh = window.innerHeight * 0.01;
    //set the vh value in the --vh custom prop to the root of dom
    document.documentElement.style.setProperty('--vh', '${vh}px');
    console.log(vh);
}
var activities = document.getElementById("confirmbuttoncontainer");
var target = document.getElementById("footerBox");
var sosmed = document.querySelectorAll(".comlogo");
var detail = document.getElementById("detail");
var closebutton = document.getElementById("closebutton");




activities.addEventListener("click", () => {
    var tl=gsap.timeline();
    tl.to(target,{duration:0.5, height:"80vh", y:"-60vh", opacity:100, ease:"power4"});
    tl.to(sosmed,{duration:1, y:"65vh", ease:"yoyo"},"-=0.4");
    tl.to(detail,{duration:0.5,opacity:100, ease:"power4"});
    tl.to(closebutton,{duration:0.1, visibility:"visible"});
});

closebutton.addEventListener("click", ()=>{
    var tl=gsap.timeline();
    tl.to(closebutton,{duration:0.1,visibility:"hidden"});
    tl.to(detail,{duration:0.5,opacity:0});
    tl.to(target,{duration:0.5, height:"20vh", y:"0vh", opacity:"70%",ease:"power4"});
    tl.to(sosmed,{duration:0.5, y:"0vh",ease:"power4"},"-=0.5");

})




