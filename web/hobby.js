$(document).ready(function() {

    // bartxt
    $('#main-nav a').on({
        mouseover: function() {
            $(this).css("color", "#42c5ed");
        },
        mouseout: function() {
            $(this).css("color", "rgb(255, 255, 255)");
        }
    });
    // btn
    $(".btn").hover(
        function() {
            $(this).find("span:nth-child(1)").css({
                //find事件:尋找前面選擇器的子元素
                //這裡是(.btn)->(span:nth-child(1))加上css...
                height: "100%",
                transition: "height 1.5s ease"
                // transition:轉場效果
                // ease:指定一個緩慢開始，然後快速，然後緩慢結束的轉場效果
            });
            $(this).find("span:nth-child(2)").css({
                width: "100%",
                transition: "width 1.5s ease"
            });
            $(this).find("span:nth-child(3)").css({
                height: "100%",
                transition: "height 1.5s ease"
            });
            $(this).find("span:nth-child(4)").css({
                width: "100%",
                transition: "width 1.5s ease"
            });
        },
        function() {
            $(this).find("span:nth-child(1)").css({
                height: "0",
                transition: "height 1.5s ease"
            });
            $(this).find("span:nth-child(2)").css({
                width: "0",
                transition: "width 1.5s ease"
            });
            $(this).find("span:nth-child(3)").css({
                height: "0",
                transition: "height 1.5s ease"
            });
            $(this).find("span:nth-child(4)").css({
                width: "0",
                transition: "width 1.5s ease"
            });
        }
    );
    $('#fs-btn').click(function(){
        $(this).append(': BILLIE EILISH');
    });
    $('#fa-btn').click(function(){
        $(this).append(': 進撃の巨人');
    });
    $('#fb-btn').click(function(){
        $(this).append(': YOASOBI');
    });
    $('#fso-btn').click(function(){
        $(this).append(': 群青');
    });
    $('#fb-btn').click(function(){
        $(this).append(': YOASOBI');
    });
    $('#fso-btn').click(function(){
        $(this).append(': 群青');
    });
    
});
$('.hamburger-menu').click(function(){
    $('.fullscreen-menu').toggleClass('display_nav');
    $('div:not(.fullscreen-menu,.hamburger-menu,.line)').toggleClass('blur');
    $('.hamburger-menu').toggleClass('move');

});
$('.fullscreen-menu:not(ul)').click(function(){//若全屏選單已經開啟且被點擊任一處，則關閉選單(把選單加上display:none的效果)
    $('.fullscreen-menu').toggleClass('display_nav');
    $('div:not(.fullscreen-menu,.hamburger-menu,.line)').toggleClass('blur');
});

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');

    function showPage(hash) {
        pages.forEach(page => {
            if ('#' + page.id === hash) {
                page.classList.add('active');
            } else {
                page.classList.remove('active');
            }
        });
    }

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const hash = this.getAttribute('href');
            window.location.hash = hash;
            showPage(hash);
        });
    });

    // 初始顯示頁面
    const currentHash = window.location.hash || '#home';
    showPage(currentHash);
});