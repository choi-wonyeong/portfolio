$(document).ready(function(){
	
	/*메뉴 엔터*/
	/*$("nav> ul> li> a").on( "mouseenter  click" , function(){
		$("nav ul li> nav").stop().slideDown();
		$("nav nav li>a").removeClass("last");
		$(this).addClass("last");	
	});
	/*메뉴 리브*/
	/*$("nav>ul").mouseleave(function(){
		$("nav nav").stop().slideUp();
	}); */
	
	//메뉴 호버
	$("nav li> a").on("mouseenter click", function(){
		$("nav li> nav").stop().slideUp();
		$(this).next().stop().slideDown();
	});
	
	$("nav> nav").mouseleave(function(){
		$("nav li> nav").stop().slideUp();
	});	
	
	$(".last").blur(function(){
		$("#left li> nav").stop().slideUp();
	});
	
	
	/*슬라이드 이미지 넓이*/
	const slideimg=$("#slide img").width();
	console.log(slideimg);
	
	/*슬라이드*/
	const x=$("#slide div");
	const y=setInterval(z,4000);
	function z(){
		x.animate({left:slideimg*(-1)},1000,function(){
			x.append(x.children().first());
			x.css("left",0);
		});
	}
	
	//갤러리 큰 이미지
	$("#gallery div button").click(function(){
		const g1=$(this).children().attr("src");
		const g2=$(this).children().attr("alt");
		$("#big img").attr({"src":g1,"alt":g2});
		$("#big").fadeIn();
	});
	
	//이미지 닫기
	$("#big").click(function(){
		$(this).fadeOut();
	});
	
	//메뉴
	$("header button").click(function(){
		$("header> nav").stop().slideToggle(400,function(){
			if($("header> nav").css("display")=="block"){
				$("header button").text("close");
			}
			if($("header> nav").css("display")=="none"){
				$("header button").text("menu");
			}
		});
	});
	

	

	
	
});