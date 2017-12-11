function hand() {
    var top = $(document.body).scrollTop() + $(document.documentElement).scrollTop();
    if ($(document).scrollTop() > 1000) { //窗口 srcolltop方法设置或返回被选元素的水平滚动条位置。
        $(".zuiyou").addClass("animated fadeInRight");
        $('.tp_box ul').css('display','block');
    } 
    
    // else {
    //      $(".top_box ul>li:eq(0)")RemoveClass('.fadeInRight')
    // }
    setTimeout(hand);
}
hand();

function hand1() {
    var top = $(document.body).scrollTop() + $(document.documentElement).scrollTop();
    if ($(document).scrollTop() > 800) { //窗口 srcolltop方法设置或返回被选元素的水平滚动条位置。
        $(".zuizou").addClass("animated bounceInLeft");
    } 
    // else {
    //      $(".top_box ul>li:eq(0)")RemoveClass('.fadeInRight')
    // }
    setTimeout(hand1);
}
hand1();

function hand2() {
    var top = $(document.body).scrollTop() + $(document.documentElement).scrollTop();
    if ($(document).scrollTop() > 800) { //窗口 srcolltop方法设置或返回被选元素的水平滚动条位置。
        $(".zhongjian").addClass("animated bounceInDown");
    } 
    // else {
    //      $(".top_box ul>li:eq(0)")RemoveClass('.fadeInRight')
    // }
    setTimeout(hand2);
}
hand2();

function hand3() {
    var top = $(document.body).scrollTop() + $(document.documentElement).scrollTop();
    alert(scrollTop )
    // if ($(document).scrollTop() > 800) { //窗口 srcolltop方法设置或返回被选元素的水平滚动条位置。
    //     $(".zuiyou").addClass("animated fadeInRight");
    // } 
    // else {
    //      $(".top_box ul>li:eq(0)")RemoveClass('.fadeInRight')
    // }
    setTimeout(hand3);
}
hand3();