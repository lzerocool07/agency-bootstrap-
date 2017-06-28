$(document).ready(function(){
    var touch = $('.touchMenu'),
        menu = $('.navigation');
    
    touch.on('click',function(e){
        e.preventDefault();
        menu.slideToggle(500 , function(){
            if($(this).css('display') ==='none'){
                $(this).removeAttr('style');
            }
        });
    });
    
//    $(window).resize(function(){
//        var wind = $(window).width();
//        if(wind > 768 && menu.is(':hidden')){
//            menu.removeAttr('style');
//        }
//    });
});