// for (let i = 0; i < 5; i++) {
//     document.querySelector("#ghosts").innerHTML += `

//     `
// }

let numbers = [];
let marginTop = 480;
let paddingLeft1 = 0;
let paddingLeft2 = 0;
let paddingLeft3 = 0;
let paddingLeft4 = 0;
let paddingLeft5 = 0;
let ghost;
let randomTransistionDigits = [];
let selectedNumber;
let level = 0;
let answer = 0;

let counter;


let ghost1Location
let ghost2Location
let ghost3Location
let ghost4Location
let ghost5Location

const checkCollison = (elem) => {
    // console.log("COLLISION");

    var elm1Rect = elem.getBoundingClientRect();
    var elm2Rect = document.querySelector("#wizard").getBoundingClientRect();


    console.log("elm1Rect.right", elm1Rect.right)
    console.log("elm1Rect.left", elm1Rect.left)
    console.log("elm1Rect.bottom", elm1Rect.bottom)
    console.log("elm1Rect.top", elm1Rect.top)


    console.log("elm2Rect.right", elm2Rect.right)
    console.log("elm2Rect.left", elm2Rect.left)
    console.log("elm2Rect.bottom", elm2Rect.bottom)
    console.log("elm2Rect.top", elm2Rect.top)


    if ((elm1Rect.right >= elm2Rect.left &&
            elm1Rect.left <= elm2Rect.right) &&
        (elm1Rect.bottom >= elm2Rect.top &&
            elm1Rect.top <= elm2Rect.bottom)) {
        console.log("TOUCHING");
        clearInterval(ghost);
    }

}

const generateQuestions = () => {
    numbers = [];
    selectedNumber = Math.floor(Math.random() * (4 - 0) + 0);
    let Nos = document.querySelectorAll(".number");
    for (let no of Nos) {
        let firstNumber = Math.floor(Math.random() * ((15 - 1) + 1) + 1);
        let secondNumber = Math.floor(Math.random() * ((10 - 1) + 1) + 1);
        console.log(no);

        no.innerHTML = "<p>" + firstNumber + " x " + secondNumber + " =  ? </p>"

        numbers.push([firstNumber, secondNumber]);

    }
    answer = (numbers[selectedNumber][0] * numbers[selectedNumber][1]);
    document.querySelector("#wizard").innerHTML = "<div> <img src='../assets/wizard.png' class='wizard'></div> <div id='answer' class='answer'>" + answer + "</div>"


}

window.onload = () => {
    let myStorage = window.localStorage;
    let audio = false;
    audio = myStorage.getItem('audio');

    const music = new Audio("../assets/music_bg.mp3")

    if (audio === "true") {
        music.play();
    } else {
        music.pause();
    }

    let time = document.querySelector("#time-remaining").innerText;

    counter = setInterval(() => {
        document.querySelector("#time-remaining").innerText = time--;
        if (time === -1) clearInterval(counter);
    }, 1000);

    generateQuestions();



    ghost1Location = document.querySelector('#ghost1')
    ghost2Location = document.querySelector('#ghost2')
    ghost3Location = document.querySelector('#ghost3')
    ghost4Location = document.querySelector('#ghost4')
    ghost5Location = document.querySelector('#ghost5')

    // let answer = (numbers[selectedNumber][0] * numbers[selectedNumber][1]);

    // document.querySelector("#wizard").innerHTML = "<div> <img src='../assets/wizard.png' class='wizard'></div> <div id='answer' class='answer'>" + answer + "</div>"

    gamePlay();



    // setInterval(ghost2, getRandomInt(80, 450));
    // setInterval(ghost3, getRandomInt(80, 450));
    // setInterval(ghost4, getRandomInt(80, 450));
    // setInterval(ghost5, getRandomInt(80, 450));

    // checkCollison();
}

const initializePosition = () => {
    ghost1Location.style.paddingLeft = 0 + "px";
    ghost2Location.style.paddingLeft = 0 + "px";
    ghost3Location.style.paddingLeft = 0 + "px";
    ghost4Location.style.paddingLeft = 0 + "px";
    ghost5Location.style.paddingLeft = 0 + "px";

    paddingLeft1 = 0;
    paddingLeft2 = 0;
    paddingLeft3 = 0;
    paddingLeft4 = 0;
    paddingLeft5 = 0;


}

const gamePlay = (clear) => {

    level++;

    if (level <= 5) {

        if (clear === true) {
            document.querySelector("#current-level").innerHTML = level
            console.log("CLEAR", clear);
            clearInterval(setGhost1);
            clearInterval(setGhost2);
            clearInterval(setGhost3);
            clearInterval(setGhost4);
            clearInterval(setGhost5);

            generateQuestions();
            initializePosition();


        }
        console.log("lvel", level)
        setGhost1 = setInterval(() => {
            ghost1();

        }, getRandomInt(50, 150))




        setGhost2 = setInterval(() => {
            ghost2();

        }, getRandomInt(50, 150))

        setGhost3 = setInterval(() => {
            ghost3();

        }, getRandomInt(50, 150))

        setGhost4 = setInterval(() => {
            ghost4();

        }, getRandomInt(50, 150))

        setGhost5 = setInterval(() => {
            ghost5();

        }, getRandomInt(50, 150))
    } else {

        gameOver();






        clearInterval(setGhost1);
        clearInterval(setGhost2);
        clearInterval(setGhost3);
        clearInterval(setGhost4);
        clearInterval(setGhost5);

        initializePosition();

    }

    // }
}
const ghost1 = () => {
    // console.log("GHOST!");

    let ghost1 = document.querySelector("#ghost1");
    if (paddingLeft1 < 1250) {
        paddingLeft1 += 10;
        ghost1.style.paddingLeft = paddingLeft1 + "px";
    } else {
        gameOver();
        clearInterval(setGhost1);

    }


}
const ghost2 = () => {

    let ghost2 = document.querySelector("#ghost2");



    if (paddingLeft2 < 1250) {
        paddingLeft2 += 10;
        ghost2.style.paddingLeft = paddingLeft2 + "px";

    } else {
        gameOver();
        clearInterval(setGhost2);

    }

    // console.log(ghost2);
}
const ghost3 = () => {

    let ghost3 = document.querySelector("#ghost3");

    if (paddingLeft3 < 1250) {
        paddingLeft3 += 10;
        ghost3.style.paddingLeft = paddingLeft3 + "px";

    } else {
        gameOver();

        clearInterval(setGhost3);

    }


    // console.log(ghost3);
}
const ghost4 = () => {

    let ghost4 = document.querySelector("#ghost4");
    if (paddingLeft4 < 1250) {
        paddingLeft4 += 10;
        ghost4.style.paddingLeft = paddingLeft4 + "px";


    } else {
        gameOver();

        clearInterval(setGhost4);

    }


    // console.log(ghost4);
}
const ghost5 = () => {

    let ghost5 = document.querySelector("#ghost5");

    if (paddingLeft5 < 1250) {
        paddingLeft5 += 10;
        ghost5.style.paddingLeft = paddingLeft5 + "px";



    } else {
        gameOver();

        clearInterval(setGhost5);

    }

    // console.log(ghost5);
}

const createGame = (e) => {
    e = e || window.event;
    let wizadry = document.querySelector("#wizard");

    // console.log("WIZADRY", wizadry.style.marginTop)
    // console.log("WIZADRY margin", marginTop)


    if (e.keyCode == '38') { //upp
        if (marginTop <= 0) {
            marginTop = 480
            wizadry.style.marginTop = marginTop + "px"
        } else {
            marginTop -= 120
            wizadry.style.marginTop = marginTop + "px"
        }

    } else if (e.keyCode == '40') { //down
        if (marginTop >= 480) {
            marginTop = 0;
            wizadry.style.marginTop = marginTop + "px"
        } else {
            marginTop += 120
            wizadry.style.marginTop = marginTop + "px"
        }
    } else if (e.keyCode == '32') {
        console.log("SPACE")
        let wizardLocation = document.querySelector('#wizard').getBoundingClientRect();




        if (wizardLocation.y <= 0) {
            // console.log("wizard", wizardLocation)
            // console.log("1")
            // clearInterval(setGhost1)
            let selectedGhost = numbers[0][0] * numbers[0][1]
            console.log("question", numbers[0]);
            console.log("answer", answer);
            if (selectedGhost === answer) {
                console.log("increase level")
                gamePlay(true);
            } else {
                console.log("change question");
                generateQuestions();
            }

            // generateQuestions();

        } else if (wizardLocation.y >= 100 && wizardLocation.y < 200) {
            let selectedGhost = numbers[1][0] * numbers[1][1]
            console.log("question", numbers[1]);
            console.log("answer", answer);
            if (selectedGhost === answer) {
                console.log("increase level")
                gamePlay(true);

            } else {
                console.log("change question");
                generateQuestions();
            }
        } else if (wizardLocation.y >= 200 && wizardLocation.y < 300) {
            let selectedGhost = numbers[2][0] * numbers[2][1]
            console.log("question", numbers[2]);
            console.log("answer", answer);
            if (selectedGhost === answer) {
                console.log("increase level")
                gamePlay(true);

            } else {
                console.log("change question");
                generateQuestions();
            }
        } else if (wizardLocation.y >= 300 && wizardLocation.y < 400) {
            let selectedGhost = numbers[3][0] * numbers[3][1]
            console.log("question", numbers[3]);
            console.log("answer", answer);
            if (selectedGhost === answer) {
                console.log("increase level")
                gamePlay(true);

            } else {
                console.log("change question");
                generateQuestions();
            }
        } else if (wizardLocation.y >= 400) {
            let selectedGhost = numbers[4][0] * numbers[4][1]
            console.log("question", numbers[4]);
            console.log("answer", answer);
            if (selectedGhost === answer) {
                console.log("increase level")
                gamePlay(true);

            } else {
                console.log("change question");
                generateQuestions();
            }
        }



    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
document.onkeydown = createGame;


const gameOver = () => {
    document.querySelector(".main-section").style.removeProperty("flex-flow")
    document.querySelector(".main-section").style.removeProperty("align-content")
    document.querySelector(".main-section").style.setProperty("justify-content", "center")
    document.querySelector(".main-section").style.setProperty("align-items", "center")

    document.querySelector("#ghosts").style.setProperty("display", "none")
    document.querySelector("#wizard").style.setProperty("display", "none")
    document.querySelector(".game-over").style.setProperty("display", "initial")
    clearInterval(counter)

}

// const ghostClick = (e) => {
//     let wizardLocation = document.querySelector('#wizard').getBoundingClientRect()
//     let ghost1Location = document.querySelector('#ghost1').getBoundingClientRect()
//     let ghost2Location = document.querySelector('#ghost2').getBoundingClientRect()
//     let ghost3Location = document.querySelector('#ghost3').getBoundingClientRect()
//     let ghost4Location = document.querySelector('#ghost4').getBoundingClientRect()
//     let ghost5Location = document.querySelector('#ghost5').getBoundingClientRect()

//     // console.log("wizard", wizardLocation)
//     console.log("1", ghost1Location)
//     console.log("2", ghost2Location)
//     console.log("3", ghost3Location)
//     console.log("4", ghost4Location)
//     console.log("5", ghost5Location)


// }
// document.body.addEventListener("click", ghostClick)