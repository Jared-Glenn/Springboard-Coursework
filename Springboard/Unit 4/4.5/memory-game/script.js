const gameContainer = document.getElementById("game");
const startButton = document.getElementById("start-button");
startButton.addEventListener("click", restartGame)

sessionStorage.setItem("cardOne", "")
sessionStorage.setItem("cardTwo", "")
sessionStorage.setItem("cardOneId", "")
sessionStorage.setItem("cardTwoId", "")

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

if (localStorage.getItem("lowScore") === null){
  localStorage.setItem("lowScore", "1000");
}
let lowScore = document.querySelector("#low-score");
lowScore.innerText = localStorage.getItem("lowScore");

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want to research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  let idNum = 1
  
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    newDiv.id = "div" + idNum.toString();
    idNum += 1;

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

function restartGame(event) {
  event.preventDefault();
  document.querySelector("#score").innerText = "0"
  if (startButton.classList[0] === "start"){
    startButton.innerText = "Restart";
    startButton.classList = [];
    createDivsForColors(shuffledColors);
  }
  else {
    resetCards();
    let newShuffledColors = shuffle(COLORS);
  
    for (let i = 1; i <= COLORS.length; i++){
      let target = "#div" + i.toString()
      let recolorDiv = document.querySelector(target);
      recolorDiv.classList = [newShuffledColors[i-1]];
      recolorDiv.style.backgroundColor = "white"
    }
  }
}


// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  let cardOne = sessionStorage.getItem("cardOne");
  let cardTwo = sessionStorage.getItem("cardTwo");

  if (cardOne === ""){
    sessionStorage.setItem("cardOne", event.target.classList[0])
    sessionStorage.setItem("cardOneId", event.target.id)

    event.target.style.backgroundColor = event.target.classList[0]
  }
  else if (cardTwo === "" && sessionStorage.getItem("cardOneId") !== event.target.id){
    // Check on the Id to see if they match
    sessionStorage.setItem("cardTwo", event.target.classList[0])
    sessionStorage.setItem("cardTwoId", event.target.id)

    event.target.style.backgroundColor = event.target.classList[0]

    let cardTwo = sessionStorage.getItem("cardTwo");

    if (cardOne !== cardTwo) {
      setTimeout(flipBack, 1000);
      let score = document.querySelector("#score");
      scoreNum = parseInt(score.innerText);
      scoreNum += 1;
      score.innerText = scoreNum.toString();
      
    }
    setTimeout(resetCards, 1020);

    let whiteCount = 0;

    for (let i = 1; i <= COLORS.length; i++){
      let card = document.querySelector("#div" + i.toString())
      console.log(card.style.backgroundColor)
      if (card.style.backgroundColor === "white" || card.style.backgroundColor === ""){
        whiteCount += 1;
      }
    }

    if (whiteCount === 0) {
      let score = document.querySelector("#score");
      let scoreNum = parseInt(score.innerText);
      score.innerText += " YOU WON!"

      if (scoreNum < parseInt(localStorage.getItem("lowScore"))){
        let lowScore = document.querySelector("#low-score");
        lowScore.innerText = "NEW HIGH SCORE!"
        setTimeout(function() {
          lowScore.innerText = scoreNum.toString();
          localStorage.setItem("low-score", scoreNum)
        }, 3000)
      }
    }
  }
}

function flipBack() {
  let cardOneId = sessionStorage.getItem("cardOneId");
  let cardTwoId = sessionStorage.getItem("cardTwoId");

  try {
    let cardOne = document.querySelector("#" + cardOneId);
    let cardTwo = document.querySelector("#" + cardTwoId);
  
    cardOne.style.backgroundColor = "white"
    cardTwo.style.backgroundColor = "white"
  }
  catch {
    try{
      let cardOne = document.querySelector("#" + cardOneId);

      cardOne.style.backgroundColor = "white"
    }
    catch{
    }
  }
  
}

function resetCards() {
  sessionStorage.setItem("cardOne", "");
  sessionStorage.setItem("cardTwo", "");
  sessionStorage.setItem("cardOneId", "");
  sessionStorage.setItem("cardTwoId", "");
}

// when the DOM loads

