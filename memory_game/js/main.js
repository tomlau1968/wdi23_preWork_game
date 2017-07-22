
var card = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = card[0];
cardsInPlay.push("cardOne");
console.log("User flipped queen");

var cardTwo = card[2];
cardsInPlay.push("cardTwo");
console.log("User flipped king");

 if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
  } else {
      alert("Sorry, try again.");
  }
	




