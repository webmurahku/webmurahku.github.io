const word = document.getElementById("mySay");
const ctr = document.getElementById("myCtr")

const cHex = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];




ctr.style.backgroundColor = randomColor();

 function randomColor() {
    var newColor="#";
    for(i=0;i<6;i++){
        newColor += randomHexDigit();
    }
    return newColor;
}

function randomHexDigit(){
    return cHex[Math.floor(Math.random()*15)];
}

gsap.to(word,{duration:2,fontSize:"5rem",
onUpdate :completeAnimation
});

function completeAnimation(){
    const ts = Date.now();
    const fire = (ts%12) == 0;
    if(fire==true) {
        console.log(ts,fire);
    ctr.style.backgroundColor = randomColor();

    }
}

