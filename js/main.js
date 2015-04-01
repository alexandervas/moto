    
$ = jQuery.noConflict();
   // Multizoom 
$(document).ready(function($){

    $('#image1').addimagezoom({ 
        zoomrange: [3, 10],
        magnifiersize: [400,398],
        magnifierpos: 'right',
        cursorshade: true,
        largeimage: 'img/Bak/bak-168-big.jpg' 
    });

});   


   // Multizoom 


    // Fancybox
$(document).ready(function() {
   

             $('.fancybox').fancybox();

             $(".fancybox-effects-b").fancybox({
                 openEffect  : 'none',
                 closeEffect : 'none',

                 helpers : {
              
                         type : null
               
                 }
             });


});

    // Fancybox

         // Tiny carousel
        $(document).ready(function(){

            $('#slider1').tinycarousel({

                infinite:false

            });
        });
 // Tiny carousel


