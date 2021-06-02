var email = document.getElementById("email");
var username = document.getElementById("username");
var bioText = document.getElementById("bioText");
var count = document.getElementById("count");
var submit = document.getElementById("submit");
var birthday = document.getElementById("birthday");
var passwordOne = document.getElementById("passwordOne");
var passwordTwo = document.getElementById("passwordTwo");
var usernameAlert = document.getElementById("usernameAlert");
var passwordLength = document.getElementById("passwordLength");
var passwordMatch = document.getElementById("passwordMatch");

bioText.addEventListener("keydown", function (e) {
    if (e.keyCode == 8 && this.value.length != 0) {
        count.innerText = (bioText.value.length - 1);
    }
});

bioText.addEventListener("keypress", function () {
    if (this.value.length != 300) {
        console.log(this.value.length);
        count.innerText = (bioText.value.length + 1);
    }

});

username.addEventListener("blur", function () {
    if (username.value.length < 8 && username.value.length > 0) {
        usernameAlert.textContent = "Username must be at least 8 characters long!";
    } else {
        usernameAlert.textContent = "";
    }
});

passwordOne.addEventListener("blur", function () {
    if (passwordOne.value.length < 7 && passwordOne.value.length > 0) {
        passwordLength.textContent = "Password must be at least 7 characters long!";
    } else {
        passwordLength.textContent = "";
    }
});

passwordTwo.addEventListener("blur", function () {
    if (!(passwordOne.value === passwordTwo.value) && (passwordTwo.value.length > 0)) {
        passwordMatch.textContent = "Passwords do not match!";
    } else {
        passwordMatch.textContent = "";
    }
});

submit.addEventListener("click", function (e) {
    if ((email.value.includes("@")) &&
        (username.value.length >= 8) &&
        (passwordOne.value.length >= 7) &&
        (passwordOne.value === passwordTwo.value) &&
        (birthday.value.length > 0)) {
        e.preventDefault();
        $("#registration").delay(1000).fadeOut();
        $("#about").delay(1000).fadeOut();
        $("#welcome").delay(1500).text("Welcome, " + username.value + ".").fadeIn().delay(2000).fadeOut();
        $("#profile").delay(5000).fadeIn();
        $("#name").text(username.value);
        $("#bio").text(bioText.value);
    }
});
