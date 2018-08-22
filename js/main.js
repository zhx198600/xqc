/*!function() {
    // 自执行
}();*/
$(document).ready(function(){
    // 导航菜单
    $('.mobileMenuBtn').on('click', function(){
        $('#mobileNav').addClass('mm-opened');
        $('#mobileNav').addClass('mm-current');
    });
    // 返回顶部
    $(window).scroll(function(){
        var a = $(document).scrollTop();
        if (a > 1200) {
            $('.met-scroll-top').removeClass('hide');
        } else {
            $('.met-scroll-top').addClass('hide');
        }
    });
    $('.met-scroll-top').on('click', function(){
        $('html,body').animate({
            scrollTop: '0px'
        }, 800);
        return false;
    });
    // 产品列表tab页切换
    $('.product-class li').on('click', function () {
        $('.tabcon').addClass('hide');
        $('.product-class li').removeClass('active');
        $('#' + $(this).attr('name')).removeClass('hide');
        $(this).addClass('active');
    })
});


