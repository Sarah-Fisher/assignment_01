// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1 = document.querySelector("#noun1");
const verb = document.querySelector("#verb");
const adjective = document.querySelector("#adjective");
const noun2 = document.querySelector("#noun2");
const setting = document.querySelector("#setting");

// Constants for p tag to display query selectors
const choosenNoun1 = document.querySelector("#choosenNoun1");
const choosenVerb = document.querySelector("#choosenVerb");
const choosenAdjective = document.querySelector("#choosenAdjective");
const choosenNoun2 = document.querySelector("#choosenNoun2");
const choosenSetting = document.querySelector("#choosenSetting");

// Constants for final buttons and p tags
const playback = document.querySelector("#playback");
const random = document.querySelector("#random");
const story = document.querySelector("#story");
const reset = document.querySelector("#reset");

// Variables for pre-defined arrays

var noun1Array = ["The turkey", "Mom", "Dad", "The Dog", "My teacher", "The elephant", "The cat"];
var verbArray = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
var adjectiveArray = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
var noun2Array = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
var settingArray = ["on the moon.", "on the chair.", "in my spaghetti.", "in my soup.", "on the grass.", "in my shoes."]; 

// Variables for count to grab array elements

var noun1Count = 0;
var verbCount = 0;
var adjectiveCount = 0;
var noun2Count = 0;
var settingCount = 0;


/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    choosenNoun1.textContent = noun1Array[noun1Count];
    noun1Count++;
    if (noun1Count === noun1Array.length) noun1Count = 0;
}

function verb_on_click() {
    choosenVerb.textContent = verbArray[verbCount];
    verbCount++;
    if (verbCount === verbArray.length) verbCount = 0;
}

function adjective_on_click() {
    choosenAdjective.textContent = adjectiveArray[adjectiveCount];
    adjectiveCount++;
    if (adjectiveCount === adjectiveArray.length) adjectiveCount = 0;
}

function noun2_on_click() {
    choosenNoun2.textContent = noun2Array[noun2Count];
    noun2Count++;
    if (noun2Count === noun2Array.length) noun2Count = 0;
}

function setting_on_click() {
    choosenSetting.textContent = settingArray[settingCount];
    settingCount++;
    if (settingCount === settingArray.length) settingCount = 0;
}

// concatenate the user story and display
function playback_on_click() {
    story.textContent = choosenNoun1.innerHTML + ' ' + choosenVerb.innerHTML + ' ' + choosenAdjective.innerHTML + ' ' + choosenNoun2.innerHTML + ' ' + choosenSetting.innerHTML;   
}

// grabbing random element from arrays, concatenate and display
function randomValue(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function random_on_click() {
    
    var randomNoun1 = randomValue(noun1Array);
    console.log(randomNoun1);
    var randomVerb = randomValue(verbArray);
    var randomAdjective = randomValue(adjectiveArray);
    var randomNoun2 = randomValue(noun2Array);
    var randomSetting = randomValue(settingArray);

    story.textContent = randomNoun1 + ' ' + randomVerb + ' ' + randomAdjective + ' ' + randomNoun2 + ' ' + randomSetting;
}

// reset button fuction

function reset_on_click() {
    choosenNoun1.textContent = "";
    choosenVerb.textContent = "";
    choosenAdjective.textContent = "";
    choosenNoun2.textContent = "";
    choosenSetting.textContent = "";
    story.textContent = "";

}

/* Event Listeners
-------------------------------------------------- */
noun1.addEventListener("click", noun1_on_click);
verb.addEventListener("click", verb_on_click);
adjective.addEventListener("click", adjective_on_click);
noun2.addEventListener("click", noun2_on_click);
setting.addEventListener("click", setting_on_click);

playback.addEventListener("click", playback_on_click);
random.addEventListener("click", random_on_click);
reset.addEventListener("click", reset_on_click);