
var card = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = card[0];
cardsInPlay.push("cardOne");
console.log("User flipped queen");

var cardTwo = card[2];
cardsInPlay.push("cardTwo");
console.log("User flipped king");
 
if (cardsInPlay[0] === cardsInPlay[1]) {
	alert ("You found a match!");
} else {
	alert ("Sorry, try again!!");
}



// if (cardsInPlay) {
//   console.log("Student received an A.");
// } else if (grade >= 80) {
//   console.log("Student received a B.");
// } else if (grade >= 70) {
//   console.log("Student received a C.");
// } else {
//   console.log("Student failed :(");
// }




// if(cardOne===cardTwo&&cardOne==="queen"){
// 	alert("Match found! Two Queens!");
// 	}else if(cardOne===cardTwo&&cardOne==="king"){
// 	alert("Match found! Two Kings!");
// 	} else{
// 	alert("Sorry, try again!!");
// }



//  if(cardsInPlay[0] === cardsInPlay[1]) {
//       alert("You found a match!");
//   } else {
//       alert("Sorry, try again.");
//   }
	
// var flipcard = function () {

	
// }