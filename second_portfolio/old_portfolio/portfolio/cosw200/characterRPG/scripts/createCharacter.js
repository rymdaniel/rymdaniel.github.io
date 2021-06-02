//Created objects for character name, attributes, disorder, and personality options.

var character = {
    firstName: "",
    lastName: "",
}

var attributes = {
    anger: 0,
    awkwardness: 0,
    disgust: 0,
    envy: 0,
    fear: 0,
    happiness: 0,
    love: 0,
    pride: 0,
    sadness: 0,
    shame: 0,
    stress: 0,
    stoicism: 0
}

var disorder = {
    anxiety: "Affects rate at which all things are completed in.<br><br>Prevents some things from being done without knowing required information.",
    depression: "Affects chances things are done correctly. <br><br>Prevents most things from being done without help.",
    depersonalization: "Affects chances of gathering new information from others. <br><br>Prevents some interpersonal bonds from forming.",
    narcolepsy: "Affects rate at which all things are completed in. <br><br>Prevents some information from being retained."
}

var personality = {
    deceiverOne: "Lying allows easier collection of information and items.",
    deceiverTwo: "Manipulation greatly increases the chance people will help you although only for a limited amount times.",
    performerOne: "Dual Personalities gives the chance people will collect false information.",
    performerTwo: "Secrecy prevents people from collecting information.",
    theJustOne: "Honesty greatly increases the chance people provide information but it's validity is uncertain.",
    theJustTwo: "Helpfulness increases the chance people provide items.",
    saintOne: "Forgiveness increases the chance people will help you (Not as efficient as manipulation but allows limitless aid).",
    saintTwo: "Compassion increases the chance people provide information."
}

/*I'll be frank in that I had to copy paste the following slideshow code. I can only grasp it a little.

showImages() and showText() work in unison to show first keepsake class element (cameraicon) because it is the first of its class hence it has the imageIndex of 1. 

Cycle() adds or substracts to go forward or backwards by assigning a new imageIndex
showImages and showText will get all keepsake/keepsakeName class elements. Will then check if current index is greater than the length total of class elements. If you cycle farther than there are classes then it resets imageIndex to 1.

The second if statement does the opposite if you go below imageIndex 1 when cycling backwards then it sets the index to the largest position in the array retreived from collection of classes.

The for loop makes every class element hidden and immediately after after line 75 & 89 makes the current image and text visible.*/

var imageIndex = 1;
var textIndex = 1;

showImages(imageIndex);
showText(textIndex);

function cycle(cycleNum) {
    showImages(imageIndex += cycleNum);
    showText(textIndex += cycleNum);
}

function showImages(imageNum) {
    var ksImage = document.getElementsByClassName("keepsake");

    if (imageNum > ksImage.length) {
        imageIndex = 1
    }
    if (imageNum < 1) {
        imageIndex = ksImage.length
    }
    for (var i = 0; i < ksImage.length; i++) {
        ksImage[i].style.display = "none";
    }
    ksImage[imageIndex - 1].style.display = "block";
}

function showText(textNum) {
    ksText = document.getElementsByClassName("keepsakeName");
    if (textNum > ksText.length) {
        textIndex = 1
    }
    if (textNum < 1) {
        textIndex = ksText.length
    }
    for (var i = 0; i < ksText.length; i++) {
        ksText[i].style.display = "none";
    }
    ksText[textIndex - 1].style.display = "block";
    return ksText;
}

//These lines listen for when a user clicks on a disorder icon. It will then retrive the relevant information from the disorder Object and fill it into the disorder Info box.

document.getElementById("anxiety").addEventListener("click", function () {
    document.getElementById("disorder").innerHTML = "ANXIETY";
    document.getElementById("disorderInfo").innerHTML = disorder.anxiety;
});

document.getElementById("depersonalization").addEventListener("click", function () {
    document.getElementById("disorder").innerHTML = "DEPERSONALIZATION DISORDER";
    document.getElementById("disorderInfo").innerHTML = disorder.depersonalization;
});

document.getElementById("depression").addEventListener("click", function () {
    document.getElementById("disorder").innerHTML = "DEPRESSION";
    document.getElementById("disorderInfo").innerHTML = disorder.depression;
});

document.getElementById("narcolepsy").addEventListener("click", function () {
    document.getElementById("disorder").innerHTML = "NARCOLEPSY";
    document.getElementById("disorderInfo").innerHTML = disorder.anxiety;
});

//These lines listen for when a user clicks on a personality icon. It will do the same as the above set of lines expect these will fill in the personality Info box.

document.getElementById("deceiver").addEventListener("click", function () {
    document.getElementById("personality").innerHTML = "DECEIVER";
    document.getElementById("personalityInfoOne").innerHTML = personality.deceiverOne;
    document.getElementById("personalityInfoTwo").innerHTML = personality.deceiverTwo;
    document.getElementById("abilityOne").src = "media/abilities/LnM/lying.png";
    document.getElementById("abilityTwo").src = "media/abilities/LnM/manipulation.png";
});

document.getElementById("just").addEventListener("click", function () {
    document.getElementById("personality").innerHTML = "JUST";
    document.getElementById("personalityInfoOne").innerHTML = personality.theJustOne;
    document.getElementById("personalityInfoTwo").innerHTML = personality.theJustTwo;
    document.getElementById("abilityOne").src = "media/abilities/HnH/laurel.png";
    document.getElementById("abilityTwo").src = "media/abilities/HnH/helpfulness.png";
});

document.getElementById("performer").addEventListener("click", function () {
    document.getElementById("personality").innerHTML = "PERFORMER";
    document.getElementById("personalityInfoOne").innerHTML = personality.performerOne;
    document.getElementById("personalityInfoTwo").innerHTML = personality.performerTwo;
    document.getElementById("abilityOne").src = "media/abilities/DPnS/dualPersonalities.png";
    document.getElementById("abilityTwo").src = "media/abilities/DPnS/secrecy.png";
});

document.getElementById("saint").addEventListener("click", function () {
    document.getElementById("personality").innerHTML = "SAINT";
    document.getElementById("personalityInfoOne").innerHTML = personality.saintOne;
    document.getElementById("personalityInfoTwo").innerHTML = personality.saintTwo;
    document.getElementById("abilityOne").src = "media/abilities/FnC/forgiveness.png";
    document.getElementById("abilityTwo").src = "media/abilities/FnC/compassion.png";
});

//event listener to for Back button to return to main menu.
document.getElementById("back").onclick = function () {
    location.href = "startMenu.html"
}

//beginStory() triggers on character confirmation. It assigns all the user's input and selections to variables. These variables are then locally stored via the localStorage.setItem() method where the first value within the parentheses is the key and the second is the variable being stored. The key is then used on a different page to retreive the value as can be seen in story.js. The last line (line 166) links us to story.html.
function beginStory() {
        var firstName = document.getElementById("firstNameSummary").innerHTML;
        var lastName = document.getElementById("lastNameSummary").innerHTML;
        var disorderName = document.getElementById("disorderSummary").innerHTML;
        var personalityName = document.getElementById("personalitySummary").innerHTML;
        var keepsakeName = document.getElementById("keepsakeSummary").innerHTML;
        localStorage.setItem('fName', firstName);
        localStorage.setItem('lName', lastName);
        localStorage.setItem('disorder', disorderName);
        localStorage.setItem('personality', personalityName);
        localStorage.setItem('keepsake', keepsakeName);
        location.href = "story.html";
    };

//The random attributes generator. When generate button on page clicked, generates 12 random numbers and adds them to an array.
function generate() {
    attriRay = []; //initializes array to 0 values.
    var i;
    for (i = 0; i < 12; i++) { 
        var randomNum = Math.floor((Math.random() * 10) + 1); //generates a random number and
        attriRay.push(randomNum);                              //pushes it to the array every iteration for 12 iterations.
    }
    for (i = 0; i < 12; i++) { 
        attributes[Object.keys(attributes)[i]] = attriRay[i]; //assigns attribute objects first property to hold the first value in the array, incremeneting up to max position.
    }
    setRandomKeepsake(); //displays a random keepsake
    setAttributes(); //displays the generated attributes
}

//A mass reset function. On click it will remove user input in the name fields, generated attributes, disorder info and personality info, and returns the keepsake icon and text to its first index.
function reset() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("disorder").innerHTML = ""
    document.getElementById("disorderInfo").innerHTML = "";
    document.getElementById("personality").innerHTML = ""
    document.getElementById("personalityInfoOne").innerHTML = "";
    document.getElementById("personalityInfoTwo").innerHTML = "";
    document.getElementById("abilityOne").src = "";
    document.getElementById("abilityTwo").src = "";

    var i;
    for (i = 0; i < 12; i++) {
        attributes[Object.keys(attributes)[i]] = "0";
    }
    setAttributes(); //displays all attributes as "0";
    imageIndex = 1; //sets image to first in list
    textIndex = 1; //sets imagetext to first in list
    showImages(imageIndex); //these two lines then display the keepsake and keepsake title.
    showText(textIndex);
}

//assigns the innerHTML of each attribute on the creation page to the values generated and stored in the attributes object
function setAttributes() {
    document.getElementById("angerValue").innerHTML = attributes.anger;
    document.getElementById("awkwardnessValue").innerHTML = attributes.awkwardness;
    document.getElementById("disgustValue").innerHTML = attributes.disgust;
    document.getElementById("envyValue").innerHTML = attributes.envy;
    document.getElementById("fearValue").innerHTML = attributes.fear;
    document.getElementById("happinessValue").innerHTML = attributes.happiness;
    document.getElementById("loveValue").innerHTML = attributes.love;
    document.getElementById("prideValue").innerHTML = attributes.pride;
    document.getElementById("sadnessValue").innerHTML = attributes.sadness;
    document.getElementById("shameValue").innerHTML = attributes.shame;
    document.getElementById("stressValue").innerHTML = attributes.stress;
    document.getElementById("stoicismValue").innerHTML = attributes.stoicism;
}

//sets the innerHTML of each attribute on the confrim page to the values generated and stored in the attributes object. Need to find a solution to solve the redundancy in setAttributes() and setSummaryAttributes().
function setSummaryAttributes() {
    document.getElementById("angerFinal").innerHTML = attributes.anger;
    document.getElementById("awkwardnessFinal").innerHTML = attributes.awkwardness;
    document.getElementById("disgustFinal").innerHTML = attributes.disgust;
    document.getElementById("envyFinal").innerHTML = attributes.envy;
    document.getElementById("fearFinal").innerHTML = attributes.fear;
    document.getElementById("happinessFinal").innerHTML = attributes.happiness;
    document.getElementById("loveFinal").innerHTML = attributes.love;
    document.getElementById("prideFinal").innerHTML = attributes.pride;
    document.getElementById("sadnessFinal").innerHTML = attributes.sadness;
    document.getElementById("shameFinal").innerHTML = attributes.shame;
    document.getElementById("stressFinal").innerHTML = attributes.stress;
    document.getElementById("stoicismFinal").innerHTML = attributes.stoicism;
}


//generates a random number to set as the imageIndex and textIndex and then display the chosen image and corresponding title.
function setRandomKeepsake() {
    for (i = 0; i < 1; i++) {
        var randomNum = Math.floor((Math.random() * 10) + 1);
    }
    imageIndex = randomNum;
    textIndex = randomNum;
    showImages();
    showText();
}

/*grabs all the user's input and stores them in variables. also checks if there are any missing selections or input.
If everything checks out it hides all the character creation elements and displays the character confirm elements*/
function loadConfirm() {
    character.firstName = document.getElementById("firstName").value;
    character.lastName = document.getElementById("lastName").value;
    var fName = character.firstName;
    var lName = character.lastName;
    var disorder = document.getElementById("disorder").innerHTML;
    var personality = document.getElementById("personality").innerHTML;
    var keepsakeName = $(".keepsakeName:visible"); //used jquery to select visible keepsakeNames
    keepsakeName.find("span").detach(); //this removes the tooltip within the span
    var keepsakeSolo = keepsakeName.html(); //this gets the html value
    var showPopup = document.getElementById("alertPopup");
    var setWarning = document.getElementById("alertText");
    if (fName.length == 0) {
        setWarning.innerHTML = "You must input a first name!";
        showPopup.style.display = "block";
    } else if (lName.length == 0) {
        setWarning.innerHTML = "You must input a last name!";
        showPopup.style.display = "block";
    } else if (disorder == 0) {
        setWarning.innerHTML = "You must select a disorder!";
        showPopup.style.display = "block";
    } else if (personality == 0) {
        setWarning.innerHTML = "You must select a personality!";
        showPopup.style.display = "block";
    } else if (Object.values(attributes).indexOf(0) == 0) {
        setWarning.innerHTML = "You must GENERATE attributes!";
        showPopup.style.display = "block";
    } else {
        document.getElementById("header").style.display = "none";
        document.getElementById("main").style.display = "none";
        document.getElementById("footer").style.display = "none";
        document.getElementById("characterConfirm").style.display = "block";
        document.getElementById("firstNameSummary").innerHTML = fName;
        document.getElementById("lastNameSummary").innerHTML = lName;
        document.getElementById("disorderSummary").innerHTML = disorder;
        document.getElementById("personalitySummary").innerHTML = personality;
        document.getElementById("keepsakeSummary").innerHTML = keepsakeSolo;
        setSummaryAttributes();
    }
}

function hideAlert() {
    document.getElementById("alertPopup").style.display = "none";
}

//on clicking back on character confirm page, hides the character confirm elements and displays character creation elements.
function returnCharCreate() {
    document.getElementById("header").style.display = "block";
    document.getElementById("main").style.display = "block";
    document.getElementById("footer").style.display = "block";
    document.getElementById("characterConfirm").style.display = "none";
}
