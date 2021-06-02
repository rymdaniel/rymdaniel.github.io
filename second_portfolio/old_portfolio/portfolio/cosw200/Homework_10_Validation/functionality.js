$(document).ready(function() {
            var passwordOne = document.getElementById("passwordOne");
            var passwordTwo = document.getElementById("passwordTwo");
            var bio = document.getElementById("bio");
            var changeAvatar = $("#changeModal");
    
            $("#pressPlay").delay(800).fadeIn();
            $("#registration").delay(500).fadeIn();
            $("#about").delay(800).fadeIn();

            $("#changeAvatar").on("click", function() {
                changeAvatar.css("display", "block");
            });

            $("#changeModal #confirm").on("click", function() {
                var avatarLink = $("#avatarLink").val();
                $("#avatar").attr("src", avatarLink).css("display", "block");
                changeAvatar.css("display", "none");
                $("#avatarContainer p").css("display", "none");
            });

            $("#changeModal #cancel").on("click", function() {
                changeAvatar.css("display", "none");
                $("#avatarLink").val("");
            });

            $("#changeBio").on("click", function() {
                $(this).css("display", "none");
                $("#confirmBio").css("display", "block");
                bio.contentEditable = "true";
                $("#profileBio").css("background-color", "black");
            });

            $("#confirmBio").on("click", function() {
                $(this).css("display", "none");
                $("#changeBio").css("display", "block");
                bio.contentEditable = "false";
                $("#profileBio").css("background-color", "#393e46");
            });
            
            $("#about").on("click", function(){
                window.open("about.html");
            });
    
            $("#showPass").on("click", function(){
                if(document.getElementById("showPass").checked) {
                    passwordOne.type = "text";
                    passwordTwo.type = "text";
                } else {
                    passwordOne.type = "password";
                    passwordTwo.type = "password";
                }
            });
    });