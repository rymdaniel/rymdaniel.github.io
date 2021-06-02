$(function() {
    $("#previewContainer div").on("click", "img", function() {
        $("#modal").fadeIn();
    });

    $("#modal").on("click", "#modalClose", function() {
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
        $.getJSON("data/projects.json")
        .done(function(data){
            info = data;
        }).fail( function() {
            $("#description").text("Sorry! We can't load the descriptions at this time!");
            //$("#modal p").text("Sorry! We can't load the descriptions at this time!");
        });
    }
    
    loadInfo();
    
    $("#previewContainer div").on("click", "img", function(e){
        e.preventDefault();
        var name = this.id;
        $("#header").text(info[name].header);
        $("#image").attr("src", info[name].src);
        $("#link").attr("href", info[name].href);
        $("#description").text(info[name].description);
        $("#table").html(info[name].skillTable);
    })
});