$('.dot').click( function() {
    $(this).toggleClass("current");
    $(this).siblings().removeClass('current');
} );
