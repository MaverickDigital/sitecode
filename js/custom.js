$(function() {
	console.log('ready')
	function getQueryVariable(variable)
	{
	       var query = window.location.search.substring(1);
	       var vars = query.split("&");
	       for (var i=0;i<vars.length;i++) {
	               var pair = vars[i].split("=");
	               if(pair[0] == variable){return pair[1];}
	       }
	       return(false);
	}
	var fadeOutTagline = function() {
        TweenMax.staggerTo(".tagline", 1, {
            alpha: 0,
            ease: Expo.easeInOut,
            y: "-20%"
        }, 0, function(){
            showLogo();
        })
    }

    var showLogo = function() {
        $(".intro-logo").fadeIn("slow");
        $(".intro-video").attr("src","video/flamme_high.mp4");
        $(".intro-video").fadeIn("slow");
        setTimeout(function(){
            $(".intro-logo").fadeOut("slow");
            $(".intro-video").fadeOut("slow"); 
            showHomepage();
        },3000)
            
    }

    var showHomepage = function() {
        $(".content-homepage").fadeIn("slow");
        $(".logo-container").fadeIn("2000");

        TweenMax.set(".list-menu", {
            alpha: 0,
            y: "20%"
        })

        TweenMax.set(".logo-container", {
            alpha: 0,
            y: "20%"
        })

        TweenMax.staggerTo(".list-menu", 1, {
            alpha: 1,
            y: "0%",
            ease: Expo.easeInOut
        }, .25, function() {
            
        })

        TweenMax.staggerTo(".logo-container", 1, {
            alpha: 1,
            y: "0%",
            ease: Expo.easeInOut
        }, .25, function() {
            
        })
    }



    if( !getQueryVariable("loaded") ) {

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

	$(".logo-container a").click(function(){
		document.location.href="/?loaded=y";
	})
	$( ".item-menu" ).each(function( idx, value ) {
		$( this ).hover(
		  function() {
		  	if ($(this).attr("href") == "/work.html") {
	  			$(".video-background video").attr("src","http://assets.hereziegroup.paris/static/menu/work.mp4");
		  	}
		  	else if ($(this).attr("href") == "/about.html") {
		  		$(".video-background video").attr("src","http://assets.hereziegroup.paris/static/menu/about.mp4");
		  	}
		  	else if ($(this).attr("href") == "/clients.html") {
		  		$(".video-background video").attr("src","http://assets.hereziegroup.paris/static/menu/clients.mp4");
		  	}
		  	else if ($(this).attr("href") == "/people.html") {
		  		$(".video-background video").attr("src","http://assets.hereziegroup.paris/static/menu/people.mp4");
		  	}
		  	else if ($(this).attr("href") == "/news.html") {
		  		$(".video-background video").attr("src","http://assets.hereziegroup.paris/static/menu/news.mp4");
		  	}
		  	else {
		  		$(".video-background video").attr("src","http://assets.hereziegroup.paris/static/menu/default.mp4");
		  	}
		  }, function() {
		  	   $(".video-background video").attr("src","http://assets.hereziegroup.paris/static/menu/default.mp4");
		  }
		);
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

    TweenMax.staggerTo(".inner-page .logo-container", 1, {
        alpha: 1,
        ease: Expo.easeInOut,
    }, .75, function(){
        
    })

});

