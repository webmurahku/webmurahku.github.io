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
activities.addEventListener("click", () => {
   
    gsap.to(target,{duration:0.5, height:"85%", y:"-70%", ease:"power4"});
});


