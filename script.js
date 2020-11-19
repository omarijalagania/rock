let playerCount = document.querySelector('.player');
let machineCount = document.querySelector('.machine');
let btnPlay = document.querySelector('.btn-play');
let btnRock = document.querySelector('.rock');
let btnPaper = document.querySelector('.paper');
let btnScissors = document.querySelector('.scissors');
let btnReset = document.querySelector('.reset');

//Count Arrays
let playerCountArr = 0;
let machineCountArr = 0;

//Random Number
function randomNumer(){
    return Math.floor(Math.random() * 3);
}

//paper green
function paperScissorRock() {
    btnPaper.style.backgroundColor = "green";
    btnScissors.style.backgroundColor = "white";
    btnRock.style.backgroundColor = "white";
};

//rock green
function rockPaperScissors(){
    btnRock.style.backgroundColor = "green"
    btnPaper.style.backgroundColor = "white";
    btnScissors.style.backgroundColor = "white";
}

//scissors green

function scissorsRockPaper(){
    btnScissors.style.backgroundColor = "green"
        btnPaper.style.backgroundColor = "white";
        btnRock.style.backgroundColor = "white"
}

//Let's Play Button
btnPlay.addEventListener('click', () => {
    document.querySelector('.raw3').style.display ="none";
    document.querySelector('.playing-cont').style.display = "block";
});



//Rock Button Click
btnRock.addEventListener('click', () => {
    randomNumber = randomNumer();
    if(randomNumber == 1){
        paperScissorRock();
        playerCountArr++;
        playerCount.textContent = playerCountArr;
    }

    if(randomNumber == 2){
        scissorsRockPaper();
        machineCountArr++;
        machineCount.textContent = machineCountArr;
    }

    if(randomNumber == 0) {
        rockPaperScissors();
    }
});



//Paper Button Click
btnPaper.addEventListener('click', () => {
    randomNumber = randomNumer();
    if(randomNumber === 0){
        machineCountArr++;
        machineCount.textContent = machineCountArr;
        rockPaperScissors();
    }

    if(randomNumber === 2){
        playerCountArr++;
        playerCount.textContent = playerCountArr;
        scissorsRockPaper();

    }
    if(randomNumber === 1) {
        paperScissorRock();
    }
});


//Scissors Button Click
btnScissors.addEventListener('click', () => {
    randomNumber = randomNumer();
    if( randomNumber === 0){
        playerCountArr++;
        playerCount.textContent = playerCountArr;
        rockPaperScissors();
    }

    if(randomNumber === 1){
        machineCountArr++;
        machineCount.textContent = machineCountArr;
        paperScissorRock();
    }

    if(randomNumber === 2) {
        scissorsRockPaper();
    }
});


//reset button
btnReset.addEventListener('click', () => {
    playerCount.textContent = 0 ;
    machineCount.textContent = 0;
    playerCountArr = 0;
    machineCountArr = 0;
    document.querySelector('.raw3').style.display ="block";
    document.querySelector('.playing-cont').style.display = "none";
    btnRock.style.backgroundColor = "white"
    btnPaper.style.backgroundColor = "white";
    btnScissors.style.backgroundColor = "white";
});
