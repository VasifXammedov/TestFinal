

$(document).ready(function () {
    

    let nav = document.querySelector("nav")

    $(window).scroll(function () {
        if ($(window).scrollTop() > 70) {
            nav.classList.add("nav-scroll");
        }
         else {
            nav.classList.remove("nav-scroll");
        }
    });

     
    $("#NavOpen").click(function(e){
        $(".navigation").addClass("show");
        e.stopPropagation()
    })
    $("#NavClose").click(function(e){
        $(".navigation").removeClass("show");
        e.stopPropagation()
    })
    $('html').click(function(){
        if($("#navigation").hasClass("show")){
         $("#navigation").removeClass("show");
        }
    })
   
})

