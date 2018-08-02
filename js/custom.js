var isMobile = true;
// if (/Mobi|Android/i.test(navigator.userAgent)) {
//     isMobile = true;
// }

videoPreload =  {
    init: function() {
        this.vidCount = $("#preload video").length;
        this.loopVids();
    },
    loopVids: function() {
        var self = this;
        $("#preload video").each(function(idx,val){
            self.checkLoad(val);
        })
    },
    checkLoad: function(vid) {
        var self = this;
        vid.onloadeddata = function() {
            self.vidCount--;
            if(self.vidCount == 0) {
                setTimeout(function(){
                    showHomepage(); 
                },2000)
            }
        };
    }
};

var getQueryVariable = function(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return(false);
};
var fadeOutTagline = function() {
    TweenMax.staggerTo(".tagline", 1, {
        alpha: 0,
        ease: Expo.easeInOut,
        y: "-20%"
    }, 0, function(){
        showLogo();
    })
};

var showLogo = function() {
    $(".intro-logo").fadeIn("slow");
    $(".intro-video").attr("src","video/flamme_high.mp4");
    $(".intro-video").fadeIn("slow");
    setTimeout(function(){
        $(".intro-logo").fadeOut("slow");
        $(".intro-video").fadeOut("slow");
        if(isMobile == true) showHomepage();
    },3500)

};

var showHomepage = function() {
    $(".content-homepage").fadeIn("slow");
    $(".home-logo-container").fadeIn("2000");

    TweenMax.set(".list-menu", {
        alpha: 0,
        y: "20%"
    })
    TweenMax.staggerTo(".list-menu", 1, {
        alpha: 1,
        y: "0%",
        ease: Expo.easeInOut
    }, .25, function() {

    })
};

if( !getQueryVariable("loaded") ) {
    if(!isMobile) videoPreload.init();
    
    setTimeout(function(){
        $(".progress-bar").addClass("active");
    },50)

    $(".tagline-container").show();

    TweenMax.set(".tagline", {
        alpha: 0,
        y: "20%"
    })

    TweenMax.staggerTo(".tagline", 1, {
        alpha: 1,
        y: "0%",
        ease: Expo.easeInOut
    }, .25, function() {
        fadeOutTagline();
    })

} 
else {
    TweenMax.set(".tagline", {
        alpha: 0,
        y: "20%"
    })
    showHomepage();
}

var clickAnimation = function(menuitem){
    $(".home-logo-container").fadeOut();
    menuitem
        .fadeOut()
        .addClass("clicked")
    $( ".item-menu" ).each(function() {
        if(!$(this).hasClass("clicked")) {
            $(this).fadeOut(500,function(){
                menuitem
                    .removeClass("clicked")
                    .fadeIn()
                    .parent().animate({ 
                        top: "20px",
                        bottom: "-20px",
                      }, 300, function(){
                        setTimeout(function(){
                            document.location.href = menuitem.attr("href");
                        },500)
                    } );
            });
        };
    });
};

var defaultVid = "/wp-content/uploads/2018/07/default.mp4";
$( ".item-menu" ).each(function( idx, value ) {
    $(this).mouseenter(function() {
        $(".video-background video").attr("src",$(this).attr("vidSrc"));
    });
    $(this).mouseleave(function() {
        $(".video-background video").attr("src",defaultVid);
    });
    $(this).click(function(e){
        e.preventDefault();
        $(this).off( "mouseleave" )
        clickAnimation($(this))
    })
});
TweenMax.set("h3", {
    alpha: 0,
    y: "20%"
})

TweenMax.staggerTo("h3", 1, {
    alpha: 1,
    y: "0%",
    ease: Expo.easeInOut
}, .25, function() {

})

TweenMax.set(".wrapper a", {
    alpha: 0,
})

TweenMax.staggerTo(".wrapper a", 2, {
    alpha: 1,
    ease: Expo.easeInOut
}, .25, function() {

})

$(".menu-anchors a").hover(
    function () {
        $(this).addClass("active");
        $(this).find("span").addClass("active");
    },
    function () {
        $(this).removeClass("active");
        $(this).find("span").addClass("active");
    }
);

$(".menu-anchors a").each(function(){
    $(this).click(function(){
        $(".logo-container").fadeOut();
        var target = $(this).attr("data-slug");
        var aTag = $("a[name='" + target +"']");
        $("html,body").animate(
            {scrollTop: aTag.offset().top - 200}
            ,1500, function(){
                $(".logo-container").fadeIn();
            });
    })
});

// INJECT CUSTOM LOGO HEADER INTO BLOG

// $(function() {
//  var logoHeader = '<div class="logo-container"><a href="/?loaded=y" style="cursor: pointer"><img class="logo-desktop" src="/wp-content/uploads/2018/07/logo_white_120.png" alt="Maverick Logo" /><img class="logo-mobile" src="/wp-content/uploads/2018/07/logo_white_60.png" alt="Maverick Logo" /></a><div class="logo-container-mask"></div></div>';
//  $( ".site-content" ).prepend(logoHeader);
// });

