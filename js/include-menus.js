$(document).ready(function(){
    $.ajax({url: "includes/header.inc.html", success: function(result){
            $("#content-head").html(result);
        }});

    $.ajax({url: "includes/footer.inc.html", success: function(result){
            $("#content-foot").html(result);
        }});

    $("div").click(function () {
        if($(this).data("href") != null){
            window.location.href = $(this).data("href");
        }
    });
});