$(function() {
    $("#previewContainer div").on("click", "img", function() {
        $("#modal").fadeIn();
    });

    $("#modal").on("click", "#modalClose", function() {
        $("#modal").fadeToggle();
        $("#table").delay(600).empty();
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
        
        for(var i = 0; i < info[name].skillTable.length; i+=2) {
            // if(i == 0 || i % 2 == 0) {
            //     $("#table").append("<tr>").append("<td>" + info[name].skillTable[i] + "</td>");
            // }else {
            //     $("#table").append("<td>" + info[name].skillTable[i] + "weeee" + "</td>").append("</tr>");   
            // }
            if(info[name].skillTable[i + 1] == undefined) {
                $("#table").append("<tr><td>" + info[name].skillTable[i] + "</td></tr>");
                break;
            } else {
                $("#table").append("<tr><td>" + info[name].skillTable[i] + "</td><td>" + info[name].skillTable[i + 1] + "</td></tr>")
            }
        }

        // $.each(info[name].skillTable, function(i, l) {
        //     $("#table").html("<td>" + l + "</td>");
        // });
        //$("#table").html(info[name].skillTable);
    })
});
