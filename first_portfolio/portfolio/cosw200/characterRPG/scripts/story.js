/*localStorage.getItem gets the items that were stored on the previous page where the value within the parentheses 
is the key assigned to hold the variable value. Here those values are reassigned to new variables.*/
var firstname = localStorage.getItem('fName');
var lastname = localStorage.getItem('lName');
var disorder = localStorage.getItem('disorder');
var personality = localStorage.getItem('personality');
var keepsake = localStorage.getItem('keepsake');

//creates variables specifically to hold the list of classes as array values.
var fNameSpans = document.getElementsByClassName("firstName");
var lNameSpans = document.getElementsByClassName("lastName");
var disorderSpans = document.getElementsByClassName("disorder");
var personalitySpans = document.getElementsByClassName("personality");
var keepsakeSpans = document.getElementsByClassName("keepsake");
var mitchellSpans = document.getElementsByClassName("drMitchell");

var drMitchell = "Dr. Mitchell: "


//accepts arguments to change the innerHTML of all the class elements in the passed variable to the desired value.
function populateSpans(x, y) {
    for(i = 0; i < x.length; i++) {
    x[i].innerHTML = y;
    }
}

populateSpans(mitchellSpans, drMitchell);
populateSpans(fNameSpans, firstname);
populateSpans(lNameSpans, lastname);
populateSpans(disorderSpans, disorder);
populateSpans(personalitySpans, personality);
populateSpans(keepsakeSpans, keepsake);