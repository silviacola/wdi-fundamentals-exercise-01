//Deleted as required by instructions in unit 8 and 9
// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";
// console.log('User flipped ' + cardOne);
// console.log('User flipped ' + cardFour);
// var cards = ["queen", "queen", "king", "king"];

var cards = [
  {
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/kings-of-hearts.png'
  },
  {
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
  }
];

// this array will hold the cards that are in play
var cardsInPlay = [];

var checkForMatch = function() {
  // Check for equality between the 2 cards in the cardsInPlay array
  if (cardsInPlay[0] === cardsInPlay[2]) {
    alert("You found a match!");
    } else {
        alert("Sorry, try again!");
      }
};

// We won't want a check for a match until the user
// has selected 2 cards.
// cardId is the index number that is passed in when
// the flipCard function is called to access this card
// from the cards array.
var flipCard = function () {
  // declaring cardId - not sure
  var cardId = this.getAttribute('data-id');

  // Displaying the card that was flipped over:
  // Updated with .rank to access the rank property of this object
  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  // adding that card to the cardsInPlay array
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src', cards[cardID].cardImage);
  if (cardsInPlay.length === 2) {
  //calling the checkForMatch function
  checkForMatch();
  }
};

// simulating the user flipping two cards
// deleted in unit 11
// flipCard(cards[0]);
// flipCard(cards[2]);

var createBoard = function () {
  for (var i = 0; i < cards.length; i++) {
  // Need to create an img element and store it in the variable cardElement
  var cardElement = document.createElement('img');
  // use the setAtrribute() method to add a src attribute
  // for the cardElement
  cardElement.setAttribute('src', "images/back.png");
  // set the card's 'data-id' attribute to be
  //the index of the current element, i (no quotes).
  cardElement.setAttribute('data-id', i);
  // when each card is created, use addEventListener method to add
  //  click event to the cardElement. The function to run when user
  // clicks is flipCard
  cardElement.addEventListener('click', 'flipCard');
  // use appendChild() method to append the current cardElement
  // to the game board which as an id of game-board'
  document.getElementByID('game-board').appendChild(cardElement);
 }
}
createBoard();


// INSTRUCTIONS
//Write an if statement that checks to see if the length of the cardsInPlay array is 2.
//For the condition, you can use the length property to find out how many items are in the cardsInPlay array and then use the === operator to see if the length is equal to 2.
//Now we'll want to add logic that checks for equality between the two cards in the cardsInPlay array.

//Inside of the if statement you created in the last step, create an if...else statement that checks for equality between the two cards in the cardsInPlay array.
//For the condition, check to see if the first card in the cardsInPlay array (cardsInPlay[0]) is equal to the second card in the cardsInPlay array.

//Hint: You'll want to use the === operator here.
