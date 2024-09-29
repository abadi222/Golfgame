const readline=require("readline"); 
const rl=readline.createInterface({
          input: process.stdin,
          output: process.stdout,
        });

 let deck = [];
//card values
let values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
// Suits
let suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];

// Create the deck
for (let suit of suits) {
  for (let value of values) {
    deck.push([value, suit]);
  }
}
// shuffle the deck
function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
     let j =  Math.floor(Math.random() * (i + 1));
      let temp = deck[i];
      deck[i] = deck[j];
      deck[j] = temp;
    }
    return deck;
  }
  
  // Shuffle the deck
  deck = shuffleDeck(deck);
  

  function drawCard(deck) {
    return deck.shift();
  } 
//generate player hand
    let player1Hand = [];
    let player2Hand = [];
    // Deal 4 cards to each player
    for (let i = 0; i < 4; i++) {
      player1Hand.push(deck.shift());
      player2Hand.push(deck.shift());
    }
    console.log(`Player 1's hand: ${player1Hand}`);
    console.log(`Player 2's hand: ${player2Hand}`);
    //init game

       //play round
 // Determine who goes first
 let currentPlayer = Math.random() < 0.5 ? 'Player 1' : 'Player 2';
 console.log(`${currentPlayer} goes first`);
 
// Initialize discard pile
let discardPile = [];

// Ask the current player to choose a card source
console.log(`${currentPlayer}, do you want to draw from the deck or the discard pile?`);
rl.question("Enter 'deck' or 'discard': ", (answer) => {
  if (answer === 'deck') {
    // Draw a card from the deck
    let card = drawCard(deck);
    console.log(`You drew ${card[0]} of ${card[1]} from the deck.`);
    if (currentPlayer === 'Player 1') {
      player1Hand.push(card);
    } else {
      player2Hand.push(card);
    }
  }
   else if (answer === 'discard') {
    if (discardPile.length === 0) {
      console.log("Discard pile is empty. Drawing from the deck instead.");
      let card = drawCard(deck);
      console.log(`You drew ${card[0]} of ${card[1]} from the deck.`);
      if (currentPlayer === 'Player 1') {
        player1Hand.push(card);
      } else {
        player2Hand.push(card);
      }
    } else {
      // Draw the top card from the discard pile
      let card = discardPile.pop();
      console.log(`You drew ${card[0]} of ${card[1]} from the discard pile.`);
      if (currentPlayer === 'Player 1') {
        player1Hand.push(card);
      } else {
        player2Hand.push(card);
      }
    }
  } else {
    console.log("Invalid choice. Please try again!");
  }
  // Continue the game...
});

  
  