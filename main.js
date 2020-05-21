$(document).ready(function() {
    $(".letter").click(function(){
        $("#letters-wrapper").toggleClass("fly-out");
        $("#workshops").toggleClass("fly-in");
    })
});