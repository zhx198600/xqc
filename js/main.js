!function() {
    // 自执行
}();
$(document).ready(function(){
    $(".mobileMenuBtn").on("click", function(){
        $('#mobileNav').addClass('mm-opened');
        $('#mobileNav').addClass('mm-current');
    });
});