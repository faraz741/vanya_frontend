  $(document).ready(function(){
     // preloader
        setTimeout(function() {
            $("#ctn-preloader").addClass("loaded");
            if ($("#ctn-preloader").hasClass("loaded")) {
                $("#preloader")
                    .delay(1000)
                    .queue(function() {
                        $(this).remove();
                    });
            }
        }, 1000);
  })


$(document).ready(function(){
    $('.ct_client_brand_slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
autoplayTimeout:2000 ,
smartSpeed:1000,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })


    $('.ct_news_slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
autoplayTimeout:2000 ,
smartSpeed:1000,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })



    $('.ct_project_slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplayTimeout:2000 ,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })

    
    $('.ct_testimonial_slider').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        nav:true,
        autoplayTimeout:3000 ,
        smartSpeed:1500,
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
})


// document.body.addEventListener("mousemove", function(e) {

//     var curX = e.clientX;
//     var curY = e.clientY;
  
//     document.getElementById('ct_cursor').style.left = curX - 10 + 'px';
//     document.getElementById('ct_cursor').style.top = curY - 10 + 'px';


//   });





