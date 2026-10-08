const icons = document.getElementById("icons")
const score = document.getElementById("score")
const restart = document.getElementById("restart")

const items = ["rock", "paper", "scissors"]

let sonGokuPoints = 0
let sonGokuItem

let vegetaPoints = 0
let vegetaItem

function randomVegetaItem() {
    const index = Math.floor(Math.random()*3);
    vegetaItem = items[index]    
    console.log(vegetaItem);
}

function sonGokuRock() {
    if (sonGokuItem == "rock" && vegetaItem == "paper") {
        console.log("Vegeta wins");
        vegetaPoints += 1
    } else if (sonGokuItem == "rock" && vegetaItem == "scissors") {
        console.log("Son Goku wins");
        sonGokuPoints += 1
    } else {
        console.log("It's a drawn match");
    }
}

function sonGokuPaper() {
    if (sonGokuItem == "paper" && vegetaItem == "scissors") {
        console.log("Vegeta wins");
        vegetaPoints += 1
    } else if (sonGokuItem == "paper" && vegetaItem == "rock") {
        console.log("Son Goku wins");
        sonGokuPoints += 1
    } else {
        console.log("It's a drawn match");
    }
}

function sonGokuScissors() {
    if (sonGokuItem == "scissors" && vegetaItem == "rock") {
        console.log("Vegeta wins!");
        vegetaPoints += 1
    } else if (sonGokuItem == "scissors" && vegetaItem == "paper") {
        console.log("Son Goku wins!");
        sonGokuPoints += 1
    } else {
        console.log("It's a drawn match...");
    }
}

function whoWins() {
    console.log("Son Goku points:", sonGokuPoints);
    console.log("Vegeta Points:", vegetaPoints)
    
    if (sonGokuPoints == 3) {
        alert("Son Goku wins!");
        sonGokuPoints = 0
        vegetaPoints = 0
    } else if (vegetaPoints == 3) {
        alert("Vegeta wins!");
        sonGokuPoints = 0
        vegetaPoints = 0
    }
}

function fight(sonGokuItem) {
    randomVegetaItem()

    if (sonGokuItem == "rock") {
        sonGokuRock()
    } else if (sonGokuItem == "paper") {
        sonGokuPaper()
    } else {
        sonGokuScissors()
    }

    score.innerText = `${sonGokuPoints} : ${vegetaPoints}`
    whoWins()
}

icons.addEventListener("click", (event) => {
    if (event.target.id == "rock" || event.target.id == "rockIcon") {
        sonGokuItem = "rock"
        console.log(sonGokuItem);

    } else if (event.target.id == "paper" || event.target.id == "paperIcon") {
        sonGokuItem = "paper"
        console.log(sonGokuItem);

    } else if (event.target.id == "scissors" || event.target.id == "scissorsIcon") {
        sonGokuItem = "scissors"
        console.log(sonGokuItem);
    }

    fight(sonGokuItem)
})

restart.addEventListener("click", (event) => {
    sonGokuPoints = 0
    vegetaPoints = 0
    score.innerText = `${sonGokuPoints} : ${vegetaPoints}`
})
