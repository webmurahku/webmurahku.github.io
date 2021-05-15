
const heroText = "Jaman NOW\nJualan kudu ONLINE\nKamu SUDAH?";
//const heroText="Jangan lupa WEBMURAHKU\nselalu TERMURAH\nsejagad antero MAYA";
const heroContainer = document.getElementById("heroText");
const cHex = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];


const el = document.createElement("H2");

heroContainer.append(el);

animeText(heroContainer, el, heroText, 2);



///////// FUNCTIONS TO DETACH

function animeArrow() {
  const circle = document.getElementById("arrowCircle");
  const text = document.getElementById("arrowText");
  const arrows = document.querySelectorAll(".arrowSVG");
  
  circle.style.transformOrigin="center center";
  arrows.forEach(element=>{
    element.style.transformOrigin ="top center";
  })
  
  const tl = gsap.timeline();

  tl.fromTo(circle,{opacity:0, scale:0},{duration:1.5,scale:1, opacity:"50%", ease:"bounce"});
  tl.fromTo(arrows,{opacity:0, scale:0},{duration:0.85,scale:1, opacity:100, stagger:0.5, ease:"power1", repeat:-1});
  tl.to(text,{duration:1, opacity:"50%", ease:"power4"});
 //tl.to()
}



async function animeText(container, el, words, timer){
  word = words.split("\n");
  
  const lengths = word.map(x=>x.length);
  const longest = lengths.indexOf(Math.max(...lengths));

  var fZ = getFontSize(container, el, word[longest]);

  var aWord = new Array();
  var pWord = new Array();
  word.forEach(element => {
    var wx = element.split(" ");
    aWord.push(wx.pop());
    pWord.push(wx.join(" "));
  });

  el.style.fontSize = fZ;

  let c = 0;
  await anime(el, pWord[c], aWord[c], timer)
    
  
  async function anime(el, pretext, text, timer) {
      el.innerHTML = '';
      var spanPre = document.createElement("span");
      spanPre.textContent = pretext+" ";
      spanPre.style.fontFamily = "Passion One"
      var spanTxt = document.createElement("span");
      spanTxt.id = "animeBG"
      spanTxt.textContent = text;
      spanTxt.style.fontFamily="Passion One";
      el.append(spanPre);
      el.append(spanTxt);
      await gsap.from(el, { duration: `${timer}`, fontSize: 1, ease: "power1.out",
      onUpdate: ()=>{
        console.log(el.style.fontSize);
        spanTxt.style.color = randomColor();
      },
      onComplete: ()=>{
        c++;
        if(c<pWord.length){
          anime(el, pWord[c], aWord[c], timer);
        }
        else{
          animeArrow();
        }
        
      }
   })
    
  }  
  
}

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

function getFontSize(ctr, el, text){
  el.textContent = text;
  var tR = el.offsetWidth / el.offsetHeight;
  var tH = ctr.offsetWidth * 0.7 / tR;
  return tH+"px";
}



const nextButton = document.getElementById("nextSectionButton");

nextButton.addEventListener("click",()=>{
    gsap.to("body",{duration:1, y:"-100vh",ease:"power4.out"});
    gsap.to(nextButton,{duration:1.5,y:"100vh",ease:"power4.out"},"-=1");
});
