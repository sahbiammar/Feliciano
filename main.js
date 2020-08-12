// Select element function

$(document).ready(function(){  

    $(".menu-btn").click(function(){
        $(".nav-desc").slideToggle("slow");
    });

    AOS.init({
        easing: 'ease',
        duration: 1800,      
        once: true              
    })

    $('nav a[href*="#"]').on('click', function() {                 
        $('html, body').animate({                              
            scrollTop: $($(this).attr('href')).offset().top - 100        
        }, 2000);                                                       
    });

    
    $(".num").counterUp({delay:90,time:3000}); 

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    })

    if(jQuery(window).width() < 768) {
        $(".nav-desc ul li a").click(function(){
            $(".nav-desc").slideToggle("slow");
        });
    };


    
});
