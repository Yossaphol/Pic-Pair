const cards = document.querySelectorAll(".card");
var win = document.getElementById("win");

let matchCard = 0;
let card1 , card2;
let disableDesk = false;

function flipcard(e) {
  let clickedcard =  e.target;
  if(clickedcard !==  card1 && !disableDesk){
      clickedcard.classList.add("flip");
    if(!card1){
      return card1 = clickedcard;
}
    card2 = clickedcard;
    disableDesk = true;
    let card1img = card1.querySelector("img").src,
    card2img = card2.querySelector("img").src;
    matchcards(card1img,card2img) ;
  }
}
function matchcards(img1, img2){
   if(img1 === img2) {
    matchCard++;
    if(matchCard==12) {
      setTimeout (() => {  
        win.style.display = "block";
      }, 800);
      setTimeout (() => {
        win.style.display = "none"; 
        return shuffleCard();
      }, 1000);
    }
    card1.removeEventListener("click",flipcard);
    card2.removeEventListener("click",flipcard);
    card1 = card2 = "";
    return disableDesk = false;
   }
  
  setTimeout(() => { 
   card1.classList.add("shake");
   card2.classList.add("shake");
}, 400);

  setTimeout(() => { 
   card1.classList.remove("shake","flip");
   card2.classList.remove("shake","flip");
   card1 = card2 = "";
   disableDesk = false;
}, 1200);
}

function shuffleCard(){
  matchCard = 0;
  card1 = card2 = "";
  disableDesk = false;
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  arr.sort(() => Math.random() > 0.5 ? 1 : -1);
  
  cards.forEach((card, i) => {
    card.classList.remove("flip");
    let imgTag = card.querySelector("img");
    imgTag.src = `img2/ani${arr[i]}.png`;
    card.addEventListener("click", flipcard); 
  });
}

shuffleCard();