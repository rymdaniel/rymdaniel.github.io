$(document).ready(function(){
    $("#bars").on("click", function() {
        $("#menuIcon .bar").fadeOut();
        $("#close").fadeIn();
        $("#mobilelinks a").css("display", "block");
        $("#mobilelinks a").animate({opacity: "1",
                                     right: "-20px"}, 300);
        $("footer").fadeIn();
    });

    $("#close").on("click", function() {
        $("#menuIcon .bar").fadeIn();
        $("#close").fadeOut();
        $("#mobilelinks a").animate({opacity: "0",
                                  right: "-=20px",
                                  display: "none"}, 300);
        setTimeout(function(){
            $("#mobilelinks a").css("display", "none");
        }, 300);
        $("footer").fadeOut();
    });

    $(window).resize(function(){
        width = $(window).width();
        if(width >= 1230) {
            $("footer").css("display", "block");
            $("footer img").css("filter", "invert(1)");
        } else {
            $("footer img").css("width", "30px");
            $("footer img").css("filter", "invert(0)")
        }
    });
        
    var showBio = document.getElementById("bioButton");
    var closeBio = document.getElementById("closeBio");
    showBio.addEventListener("click", toggleModal, false);
    closeBio.addEventListener("click", toggleModal, false);
});



function toggleModal() {
    $("#fullBio").fadeToggle();
}
