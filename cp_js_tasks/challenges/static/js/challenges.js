// Challenge 1: Age in Days
function ageInDays() {
    var birthYear = prompt("year of birth?")
    var age = (2022 - birthYear) * 365
    var h1 = document.createElement('h1')
    var textAnswer = document.createTextNode('You are ' + age + ' days old.')
    h1.setAttribute('id', 'ageInDays')
    h1.appendChild(textAnswer)
    document.querySelector('#age-result').appendChild(h1)
}

function reset() {
    if (document.querySelector('#ageInDays')) {
        document.querySelector('#ageInDays').remove()
    }
}


// Challenge 2: Generate Cat
function generateCat() {
    var img = document.createElement('img')
    var div = document.querySelector('#cat-pen')
    url = fetch('https://api.thecatapi.com/v1/images/search?mime_types=jpg&size=small')
    .then(response => response.json())
    .then(data => {
        img.src = data[0].url
    })
    div.appendChild(img)
}


// Challenge 3: Rock, Paper, Scissors
function rps(choice) {
    var humanChoice, botChoice;
    humanChoice = choice.id
    botChoice = intToChoice(rpsInt())
    results = decideWinner(humanChoice,botChoice);
    message = finalMessage(...results)
    rpsFront(humanChoice,botChoice,message)
}

function rpsInt() {
    return Math.floor(Math.random()*3)
}

function intToChoice(num) {
    return ["ro","pa","sc"][num]
}

function decideWinner(humanChoice,botChoice){
    var rpsData = {
        'ro' : {'ro':0.5,'pa':0,'sc':1},
        'pa' : {'ro':1,'pa':0.5,'sc':0},
        'sc' : {'ro':0,'pa':1,'sc':0.5}
    }
    var humanScore = rpsData[humanChoice][botChoice]
    var botScore = rpsData[botChoice][humanChoice]
    return [humanScore,botScore]
}

function finalMessage(humanScore,botScore) {
    if (humanScore === 0) {
        return {message:"You lost!",color:"red"}
    }
    else if (humanScore === 0.5) {
        return {message:"You tied.",color:"yellow"}
    }
    else {
        return {message:"You won!",color:"green"}
    }
}

function rpsFront(humanChoice,botChoice,finalMessage) {
    var imgData = {
        "ro": document.getElementById("ro").src,
        "pa": document.getElementById("pa").src,
        "sc": document.getElementById("sc").src
    }

    document.getElementById('ro').remove()
    document.getElementById('pa').remove()
    document.getElementById('sc').remove()

    humanDiv = document.createElement('div')
    botDiv = document.createElement('div')
    msgDiv = document.createElement('div')
    humanDiv.innerHTML = `<img src = ${imgData[humanChoice]} style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 0.7);'>`
    botDiv.innerHTML = `<img src = ${imgData[botChoice]} style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 0.7);'>`
    msgDiv.innerHTML = `
    <h1 style='color:${finalMessage.color};font-size:30px;padding:15px;'>
    ${finalMessage.message}
    </h1>`
    document.getElementById('rps-div').appendChild(humanDiv)
    document.getElementById('rps-div').appendChild(msgDiv)
    document.getElementById('rps-div').appendChild(botDiv)
}


// Challenge 4: Buttons
var allButtons = document.getElementsByTagName('button')
var copyAllButtons = [];

for (let i = 0; i < allButtons.length; i++) {
    copyAllButtons.push(allButtons[i].classList[1]);
}

function buttonChange(opt) {
    if (opt.value === 'red') {
        buttonRed();
    }
    else if (opt.value === 'green') {
        buttonGreen();
    }
    else if (opt.value === 'reset') {
        buttonReset();
    }
    else {
        buttonRandom();
    }
}

function buttonRed() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1])
        allButtons[i].classList.add('btn-danger')
    }
}

function buttonGreen() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1])
        allButtons[i].classList.add('btn-success')
    }
}

function buttonReset() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1])
        allButtons[i].classList.add(copyAllButtons[i])
    }
}

function buttonRandom() {
    let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']
    for (let i = 0; i < allButtons.length; i++) {
        let num = Math.floor(Math.random()*4)
        allButtons[i].classList.remove(allButtons[i].classList[1])
        allButtons[i].classList.add(choices[num])
    }
}

// Challenge 5: Blackjack
let game = {
    human: {span: '#human-result', div: '#human-box', result: 0},
    bot: {span: '#bot-result', div: '#bot-box', result: 0},
    cards: ['2','3', '4','5','6','7','8','9','10','J','Q','K','A'],
    cardsMAP: {"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,"10":10,"J":10,"Q":10,"K":10,"A":[1,11]},
    wins : 0,
    losses : 0,
    draws : 0,
    isStand: false,
    isOver: false,
}

const HUMAN = game.human
const BOT = game.bot
const CARDS = game.cards
const MAP = game.cardsMAP

const hitSound = new Audio('static/sounds/swish.m4a')
const winSound = new Audio('static/sounds/cash.mp3')
const lossSound = new Audio('static/sounds/aww.mp3')

document.querySelector('#bg-hit').addEventListener('click', bgHit);
document.querySelector('#bg-stand').addEventListener('click', bgStand);
document.querySelector('#bg-deal').addEventListener('click', bgDeal);

function bgHit() {
    if (!game.isStand) {
        let card = randCard();
        console.log(card)
        playCard(HUMAN, card);
        updateScore(HUMAN, card);
        showScore(HUMAN);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function bgStand() {
    game.isStand = true;
    if (!game.isOver) {
        while (BOT.result < 16 && game.isStand) {
            let card = randCard();
            console.log(card)
            playCard(BOT, card);
            updateScore(BOT, card);
            showScore(BOT);
            await(sleep(1000))
        }
        game.isOver = true;
        showWinner(winner());
    }
}

function bgDeal() {
    if (game.isOver) {
        game.isStand = false;
        document.querySelector(HUMAN.div).querySelectorAll('img').forEach(img => img.remove());
        document.querySelector(BOT.div).querySelectorAll('img').forEach(img => img.remove());
        document.querySelector(HUMAN.span).textContent = '0'
        document.querySelector(HUMAN.span).style.color = '#afffff';
        document.querySelector(BOT.span).textContent = '0';
        document.querySelector(BOT.span).style.color = '#afffff';
        document.querySelector('#bj-result').textContent = "Let's Play";
        document.querySelector('#bj-result').style.color = 'black';
        HUMAN.result = 0;
        BOT.result = 0;
        game.isOver = false;
        hitSound.play();
    }

}


function playCard(active, card) {
    if (active.result <= 21) {
        img = document.createElement('img');
        img.src = `static/images/${card}.png`;
        document.querySelector(active.div).appendChild(img);
        hitSound.play();

    }
}

function randCard() {
    let index = Math.floor(Math.random()*13);
    return CARDS[index];
}

function updateScore(active, card) {
    if (card === 'A') {
        if (active.result + MAP[card][1] <= 21) {
            active.result += MAP[card][1];
        }
        else {
            active.result += MAP[card][0];
        }
    }
    else {
        active.result += MAP[card];
    }
}

function showScore(active) {
    if (active.result <= 21) {
        document.querySelector(active.span).textContent = active.result;
    }
    else {
        document.querySelector(active.span).textContent = 'BUST!';
        document.querySelector(active.span).style.color = 'red';
    }
}

function winner() {
    let winner;
    if (HUMAN.result <= 21) {
        if (HUMAN.result > BOT.result || BOT.result > 21) {
            winner = HUMAN;
            game.wins++
            console.log("You won!");
        }
        else if (HUMAN.result === BOT.result ) {
            game.draws++
            console.log("You drew!");
        }
        else {
            winner = BOT;
            game.losses++
            console.log("BOT won!");
        }
    }
    else {
        if (BOT.result <= 21) {
            winner = BOT;
            game.losses++
            console.log("BOT won!");
        }
        else {
            game.draws++
            console.log("You drew!");
        }
    }
    return winner
}

function showWinner(winner) {
    if (game.isOver) {
        let msg, msgCol;
        if (winner === HUMAN) {
            msg = 'You won!';
            msgCol = 'green';
            winSound.play();
            document.querySelector('#wins').textContent = game.wins;
        }
        else if (winner === BOT) {
            msg = 'Bot won!';
            msgCol = 'red';
            lossSound.play();
            document.querySelector('#losses').textContent = game.losses;
        }
        else {
            msg = 'You drew!';
            msgCol = 'yellow';
            lossSound.play();
            document.querySelector('#draws').textContent = game.draws;
        }
        document.querySelector('#bj-result').textContent = msg;
        document.querySelector('#bj-result').style.color = msgCol;
    }
}
