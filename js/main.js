var bannerHeight=function(){
    var $window = $(window);
    var $windowWidth=$window.width();
    var bannerH=$windowWidth*0.41;
    $(".banner-slider").css({'height':bannerH});
};

$(window).resize(function() {
    bannerHeight();
});
$(function(){
    bannerHeight();
})





