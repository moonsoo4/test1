function followCursor() {
    const mousePos = {
        x: 0,
        y: 0
    };

    $(window).on("mousemove", function(event){
        // console.log(event);
        mousePos.x = event.clientX;
        mousePos.y = event.clientY;

        $(".followCursor").css({
            left: mousePos.x,
            top: mousePos.y
        })
    });

};
followCursor();




const $titleH3 = $("section h3");
const $titleH4 = $("section h4");
const $important = $(".important").find("li");
const $concept = $("section").find(".conceptArea div");
const $textArea = $(".selfIntroPage").find(".introTxt")

let scrollH = $(window).scrollTop();
let totalH = $("body").innerHeight();
let winH = $(window).innerHeight();

function scrollAni() {
    for (let i = 0; i < $titleH3.length; i++) {
        if (scrollH + winH > $titleH3.eq(i).offset().top) {
            $titleH3.eq(i).addClass("ani");
        } else {
            $titleH3.eq(i).removeClass("ani");
        }
    }
}

function scrollAni2() {
    for (let i = 0; i < $titleH4.length; i++){
        if ( scrollH + winH > $titleH4.eq(i).offset().top ){
            $titleH4.eq(i).addClass("ani");
        } else {
            $titleH4.eq(i).removeClass("ani");
        }
    }
}
function scrollAni3(){
    for( let i = 0; i < $important.length; i++ ) {
        if ( scrollH + winH > $important.eq(i).offset().top ){
            $important.eq(i).addClass("on");
        } else{
            $important.eq(i).removeClass("on");
        }
    }
}
function scrollAni4(){
    for( let i = 0; i < $concept.length; i++ ){
        if( scrollH + winH > $concept.eq(i).offset().top ){
            $concept.eq(i).addClass("active");
        } else {
            $concept.eq(i).removeClass("active");
        }
    } 
}

function scrollAni5() {
    for( let i = 0; i < $textArea.length; i++ ) {
        if ( scrollH + winH > $textArea.eq(i).offset().top ) {
            $textArea.eq(i).addClass("move");
        } else {
            $textArea.eq(i).removeClass("move");
        }
    }
}
// textArea는 한 부분이라 굳이 eq를 쓸 필요는 없을거 같은데..


$(window).on("resize", function() {
    scrollH = $(window).scrollTop();
    totalH = $("body").innerHeight();
    winH = $(window).innerheight();

    scrollAni();
    scrollAni2();
    scrollAni3();
    scrollAni4();
    scrollAni5();
});

scrollAni();
scrollAni2();
scrollAni3();
scrollAni4();
scrollAni5();