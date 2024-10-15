`use strict`;
const player1el = document.querySelector(".player1");
const player2el = document.querySelector(".player2");
const score1el = document.querySelector("#score1");
const score2el = document.querySelector("#score2");
const current1el = document.querySelector("#current1");
const current2el = document.querySelector("#current2");
const diceel = document.querySelector(".dice");
const btnnew = document.querySelector(".btnnew");
const btnroll = document.querySelector(".btnroll");
const btnhold = document.querySelector(".btnhold");

let currentscore, activeplayer, scores, playing;

function init() {
   currentscore = 0;
   activeplayer = 1;
   scores = [0, 0];
   playing = true;

   score1el.textContent = 0;
   score2el.textContent = 0;
   current1el.textContent = 0;
   current2el.textContent = 0;
   diceel.classList.add("hidden");
   player1el.classList.remove("player-winner");
   player1el.classList.add("playeractive");
}

btnroll.addEventListener("click", function () {
   const dice = Math.trunc(Math.random() * 6) + 1;
   diceel.src = `pictures/dice-${dice}.png`;
   diceel.classList.remove("hidden");
   if (dice !== 1) {
      currentscore += dice;
      document.getElementById(`current${activeplayer}`).textContent =
         currentscore;
   } else {
      document.getElementById(`current${activeplayer}`).textContent = 0;
      currentscore = 0;
      activeplayer = activeplayer === 1 ? 2 : 1;
      player1el.classList.toggle("playeractive");
      player2el.classList.toggle("playeractive");
   }
});
btnhold.addEventListener("click", function () {
   scores[activeplayer - 1] += currentscore;
   document.getElementById(`score${activeplayer}`).textContent =
      scores[activeplayer - 1];
   if (scores[activeplayer - 1] >= 20) {
      playing = false;
      diceel.classList.add("hidden");
      document
         .querySelector(`.player${activeplayer}`)
         .classList.add("player-winner");
      document
         .querySelector(`.player${activeplayer}`)
         .classList.remove("playeractive");
   } else {
      document.getElementById(`current${activeplayer}`).textContent = 0;
      currentscore = 0;
      activeplayer = activeplayer === 1 ? 2 : 1;
      player1el.classList.toggle("playeractive");
      player2el.classList.toggle("playeractive");
   }
});
btnnew.addEventListener("click", function () {
   init();
});
