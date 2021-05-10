
const heroContainer = document.getElementById("heroText");
const cHex = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];


const el = document.createElement("H2");

heroContainer.append(el);

animeText(heroContainer, el, "Jaman NOW\njualan kudu ONLINE\nkamu SUDAH?", 2);



///////// FUNCTIONS TO DETACH

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

/* async function animeText(container, el, words, timer) {

  word = words.split("\n");
  const lengths = word.map(a=>a.length);
  const longest = lengths.indexOf(Math.max(...lengths));
  
  el.textContent = word[longest];
  var textRatio = el.offsetWidth/el.offsetHeight;
  textHeight = container.offsetWidth * 0.7 /textRatio;
  el.style.fontSize = textHeight+"px";

  
  await anime(el, word, timer)
    
  
  async function anime(el, word, timer) {
    for (i = 0; i < word.length; i++) {
      el.textContent = word[i];
      await gsap.from(el, { duration: `${timer}`, fontSize: "1px", ease: "power1.out" });
    }
  }
} */



/* const nextButton = document.getElementById("nextSectionButton");

nextButton.addEventListener("click",()=>{
    gsap.to("body",{duration:1, y:"-100vh",ease:"power4.out"});
});
 */