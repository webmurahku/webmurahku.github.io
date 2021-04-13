$(window).load(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");;
});

var tl = gsap.timeline();

tl.from(".herodescription", {duration: 2, transformOrigin:'left botom' ,y:50, scaleY:0, stagger:0.3, ease:"power4"});
tl.to("#desc01, #desc02, #desc03, #desc04",{duration:1.5,width:"110px",height:"110px", fontSize:"0.51em", padding:"auto" ,marginTop:"0",marginBotom:"0",textAlign:"center",x:"1em",y:"0.3em",borderRadius:120,color:"#fff",backgroundColor:"#5dad7eff",ease:"back",stagger:0.2});
tl.from(".footercontainer",{duration:3.5, y:100, ease:"bounce"},"-=2");
tl.from(".heroimagecontainer",{duration:1.5, opacity:0,transformOrigin:"bottom", scale:0.1},"-=1");
tl.from("#yellowbubble, #bluebubble, #orangebubble", {duration:5,scale:0.1,y:50,opacity:0, ease:"elastic",stagger:0.5});
tl.from(".confirmbuttoncontainer",{duration:5, x:"200%",rotation:3600,ease:"power4"},"-=4");