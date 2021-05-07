const heroContainer = document.getElementById("heroText");

const el = document.createElement("H2");

heroContainer.append(el);

animeText(heroContainer, el, "Jaman NOW\njualan kudu ONLINE\nkamu SUDAH?", 2);



///////// FUNCTIONS TO DETACH

async function animeText(container, el, words, timer) {

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
}

const nextButton = document.getElementById("nextSectionButton");

nextButton.addEventListener("click",()=>{
    gsap.to("body",{duration:1,y:"-100vh",ease:"power4.out"});
});
