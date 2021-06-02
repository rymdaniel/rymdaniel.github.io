$(function() {
    $("#gallery").on("click", "img", function() {
        $("#modal").fadeIn();
    });

    $("#close").on("click", function() {
        $("#modal").fadeToggle();
    });
    
    var info;
    $.ajax({
        beforeSend: function(xhr) {
            if (xhr.overrideMimeType) {
                xhr.overrideMimeType("application/json");
            }
        }
    });
    
    function loadInfo() {
        $.getJSON("data/info.json")
        .done(function(data){
            info = data;
        }).fail( function() {
            $("#alert").text("Sorry! We can't load the descriptions at this time!");
            //$("#modal p").text("Sorry! We can't load the descriptions at this time!");
        });
    }
    
    loadInfo();
    
    $("#gallery").on("click", "img", function(e){
        e.preventDefault();
        var name = this.id;
        $("#title").text(info[name].title);
        $("#preview").attr("src", info[name].src);
        $("#description").html(info[name].description);
    })
});