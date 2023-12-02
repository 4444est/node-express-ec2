let BTN_ONE = document.getElementById("btn-one");
let BTN_TWO = document.getElementById("btn-two");
let BTN_THREE = document.getElementById("btn-three");
let STAGE_TEXT = document.querySelector('#stage-text');
let STAGE_CHOICE_L = document.querySelector('#stage-choice-l');
let STAGE_CHOICE_R = document.querySelector('#stage-choice-r');
let STAGE_CONSEQUENCES = document.querySelector('#stage-consequences');
let IMG1 = document.getElementById("img1");
let IMG2 = document.querySelector('#img2');
let IMG3 = document.querySelector('#img3');
let myObjVar;


const stranded = { 
    text: "The afternoon sun beats down on your brow as waves reach up to touch your heels. You are stranded.", 
    choices: ["Explore", "Build Camp", "Take A Nap"], 
    consequences: ["none", "none"], 
    image: "beach.png"
}
const explore = { 
    text: "While scouting out the beach you come across what looks like a path", 
    choices: ["Take Left Path", "Take Right Path"], 
    consequences: ["none", "none"], 
    image: "path.png"
}
const buildCamp = { 
    text: "You begin looking for sticks", 
    choices: ["Enter Wooded Grove", "Search For Sticks Along Beach"], 
    consequences: ["none", "none"], 
    image: "camp.png"
}
const takeNapEnding = { 
    text: "You wake up in a foreign village. The apes have captured you", 
    consequences: ["none", "none"], 
    image: "beach.png"
}
const leftPath = { 
    text: "You come across a ruin hidden behind dense foliage to your right", 
    choices: ["Walk Towards Ruin", "Continue Forward"], 
    consequences: ["none", "none"], 
    image: "leftPath.png"
}
const cabinEnding = { 
    text: "You come across a cabin, and decide to enter. A gentle ape answers the door\
           and offers you shelter and a meal. You become close friends and live a quiet\
           life with this ape", 
    consequences: ["none", "none"], 
    image: "cabinEnding.png"
}
const rightPath = { 
    text: "You come across a hill in the distance", 
    choices: ["Summit Hill", "Continue Forward On Path"], 
    consequences: ["none", "none"], 
    image: "hill.png"
}
const hillEnding = { 
    text: "You reach the crest of the hill and are delighted to see small village\
            down below. You turn around to find that you are surrounded by apes.\
            You've been captured", 
    consequences: ["none", "none"], 
    image: "village.png"
}
const water = { 
    text: "You come across a lively river flowing from a waterfall with a mysterious cave beneath it", 
    choices: ["Explore Mysterious Cavern", "Travel downstream"], 
    consequences: ["none", "none"], 
    image: "amulet.png"
}
const amuletEnding = { 
    text: "Within the cavern a rhythmic beating pulls you toward an ornate amulet.\
            You put it on your neck without a second thought and become overwhelmed\
            with a wave of primal instinct. You've become the <strong>Ape King<strong>", 
    consequences: ["none", "none"], 
    image: "apeKingTransform.png"
}
const woodedGrove = { 
    text: "As you navigate through the ancient trees around you, a measured sound grabs your attention", 
    choices: ["Walk Towards Sound", "Continue Forward On Path"], 
    consequences: ["none", "none"], 
    image: "woodedGrove.png"
}
const denseWoods = { 
    text: "The wooods ahead become more and more dense", 
    choices: ["Turn Around", "Continue Forward On Path"], 
    consequences: ["none", "none"], 
    image: "denseWoods.png"
}
const monkeyRain = { 
    text: "While pondering the mysterious noise behind you, the rustle of branches from above\
            snaps you out of your trance. Apes rain from the skies. You've been captured", 
    consequences: ["none", "none"], 
    image: "monkeyRain.png"
}
const apeKingEnding = { 
    text: "The sound becomes louder and louder, reverberating through your bones.\
            You feel a sudden burst of hot air on your nape, and turn around to\
            find the <strong>Ape King<strong>", 
    consequences: ["none", "none"], 
    image: "apeKing.png"
}
const shipEnding = { 
    text: "After crossing a small rocky peninsula, you are amazed to see an oil tanker\
            in the distance. You manage to signal it towards you once it gets closer\
            and get rescued", 
    consequences: ["none", "none"], 
    image: "shipEnding.png"
}

function startGame() {
    myObjVar = "Stranded";
    STAGE_TEXT.innerHTML = stranded.text;
    BTN_ONE.innerHTML = stranded.choices[0];
    BTN_TWO.innerHTML = stranded.choices[1];
    BTN_THREE.innerHTML = stranded.choices[2];
    IMG1.src = stranded.image;

}

function updatePage( buttonPos, myObj ) {
    if( buttonPos === 'one') {
        varToObj('done', myObj.choices[0]);
    }
    else if( buttonPos === 'two' ) {
        varToObj('done', myObj.choices[1]);
    }
    else if( buttonPos === 'three' ) {
        varToObj('done', myObj.choices[2]);
    }
    else {
        console.log(myObj);
        STAGE_TEXT.innerHTML = myObj.text;
        BTN_ONE.innerHTML = myObj.choices[0];
        BTN_TWO.innerHTML = myObj.choices[1];
        IMG1.src = myObj.image;
        console.log(myObjVar);
        buttonPos = 'exit';
        return myObj;
    }
    // else {
    //     return varToObj('exit', myObj);
    // }
}



function varToObj( buttonPos, myObjVar ) {
    if( myObjVar === 'Stranded') {
        BTN_THREE.remove();
        updatePage( buttonPos, stranded )
    }
    else if( myObjVar === 'Explore' ) {
        updatePage( buttonPos, explore )
    }
    else if( myObjVar === 'Build Camp' ) {
        updatePage( buttonPos, buildCamp )
    }
    else if( myObjVar === 'Take A Nap' ) {
        updatePage( buttonPos, takeNapEnding )
    }
    else if( myObjVar === 'Take Left Path' ) {
        updatePage( buttonPos, leftPath )
    }
    else if( myObjVar === 'Take Right Path' ) {
        updatePage( buttonPos, rightPath )
    }
    else if( myObjVar === 'Enter Wooded Grove' ) {
        updatePage( buttonPos, woodedGrove )
    }
    else if( myObjVar === 'Search For Sticks Along Beach' ) {
        updatePage( buttonPos, shipEnding )
    }
    else if( myObjVar === 'Continue Forward' ) {
        updatePage( buttonPos, cabinEnding )
    }
    else if( myObjVar === 'Walk Towards Ruin' ) {
        updatePage( buttonPos, apeKingEnding )
    }
    else if( myObjVar === 'Summit Hill' ) {
        updatePage( buttonPos, hillEnding )
    }
    else {
        return myObjVar;
    }
}

function endGame() {
    return startGame()
}

Window.onload = startGame();
BTN_ONE.addEventListener("click", function() {myObjVar = varToObj('one', myObjVar)});
BTN_TWO.addEventListener("click", function() {myObjVar = varToObj('two', myObjVar)});
BTN_THREE.addEventListener("click", function() {myObjVar = varToObj('three', myObjVar)});