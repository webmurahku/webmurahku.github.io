const heroContainer = document.getElementById("heroText");

const el = document.createElement("H2");

heroContainer.append(el);

animeText(el, "Jaman NOW\njualan kudu ONLINE\nkamu SUDAH?", 2);



///////// FUNCTIONS TO DETACH

async function animeText(el, words, timer) {

  word = words.split("\n");
  console.log(word.length);

  while(true){await anime(el, word, timer)};
 
  async function anime(el, word, timer) {
    for (i = 0; i < word.length; i++) {
      el.textContent = word[i];
      await gsap.from(el, { duration: `${timer}`, fontSize: "10px", ease: "power1.out" });
    }
  }
}
