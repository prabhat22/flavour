$(document).ready(function()
                 {

      setTimeout(function(){
        $("#preloader").fadeOut(2000);
        $("#body").css("overflow-y","scroll");
    },10000);
    
    
    new WOW().init();
     $("#nav_7").click(function(){
            $("#lgn").toggle(1000);
        })
    $("#BTN").click(function()
                   {
        $("#main-nav").toggle(1000);
        
    })

    $("#sop").click(function()
                   {
        $("#desrt").hide(1000);
         $("#dinnr").hide(1000);
                
 
        $("#soup").show(1000);
        
    })
       $("#dnr").click(function()
                   {
        $("#desrt").hide(1000);
         $("#soup").hide(1000);
        $("#dinnr").show(1000);
        
    })
    
       $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 60000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
   $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
       autoplay:true,
       
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        })

var vw=$(window).width();
    if(vw<420)
        {
             $('.circle').removeClass('left');
             $('.circle').removeClass('right');
        }
   
})
     








