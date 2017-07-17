//Added in unit 8/9
    // var cardOne = "queen";
    // var cardTwo = "queen";
    // var cardThree = "king";
    // var cardFour = "king";
    // console.log('User flipped ' + cardOne);
    // console.log('User flipped ' + cardFour);

    // var cards = ["queen", "queen", "king", "king"];
    // var cardsInPlay = [];

var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/kings-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];

var cardsInPlay = [];
var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
  } else {
      console.log("Sorry, try again.");
  }
};

var flipCard = function(cardId) {
  if (cardsInPlay.length === 2) {
      console.log(console.length)
  } if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
  } else {
      alert("Sorry, try again!");
  }
  //changed cardsInPlay.push(cards[cardId]) with cards.rank but it's not working
  console.log('User flipped ' + cards[cardsId].rank);
  cardsInPlay.push(cards[cardsId].rank);
  console.log(cards[cardsID].cardImage);
  console.log(cards[cardsId].suit);

};
 flipCard(0);
 flipCard(2);

var createBoard = function () {
  for (var i = 0; i < cards.length; i++) {
  var cardsElement = document.createElement('img');
  cardElement.setAttribute('cardElement', src = "images/back.png");
  }
}

//Added in unit 8
    //   var cardOne = cards[0];
    //     cardsInPlay.push(cardOne);
    //     console.log('User flipped ' + cardOne);

    //   var cardTwo = cards[2];
    //     cardsInPlay.push(cardTwo);
    //     console.log('User flipped ' + cardTwo);


    // if (cardsInPlay.length === 2) {
    //     console.log(console.length)
    // } if (cardsInPlay[0] === cardsInPlay[1]) {
    //     alert("You found a match!");
    //  } else {
    //     alert("Sorry, try again!");
    //  }



//Write an if statement that checks to see if the length of the cardsInPlay array is 2.
//For the condition, you can use the length property to find out how many items are in the cardsInPlay array and then use the === operator to see if the length is equal to 2.
//Now we'll want to add logic that checks for equality between the two cards in the cardsInPlay array.

//Inside of the if statement you created in the last step, create an if...else statement that checks for equality between the two cards in the cardsInPlay array.
//For the condition, check to see if the first card in the cardsInPlay array (cardsInPlay[0]) is equal to the second card in the cardsInPlay array.

//Hint: You'll want to use the === operator here.
