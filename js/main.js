/*!function() {
    // 自执行
}();*/
$(document).ready(function(){
    $('.mobileMenuBtn').on('click', function(){
        $('#mobileNav').addClass('mm-opened');
        $('#mobileNav').addClass('mm-current');
    });
    $(window).scroll(function(){
        var a = $(document).scrollTop();
        if (a > 1200) {
            $('.met-scroll-top').removeClass('hide');
        } else {
            $('.met-scroll-top').addClass('hide');
        }
    });
});


