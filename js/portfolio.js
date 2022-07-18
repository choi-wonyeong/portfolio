$(document).ready(function(){
	//이벤트 썸네일이미지 마우스오버
	$("#event> div> div").hover(
		function(){
			$(this).addClass("ho");			
		} , 
		function(){
			$(this).removeClass("ho");
		}
	);
	//이벤트 썸네일이미지 클릭
	$("#event> div> div").click(function(){
		const x = $(this).children("img").attr("src");		
		const y = x.substr(-4);// ".jpg" 또는 ".png"...	
		const z = x.slice(0,-4);//예_ "images/event-1"부분
		const zz = z + "_big" + y;
		$("#popup img").attr("src" , zz);
		const txt = $(this).children("img").attr("alt");				
		$("#popup img").attr("alt", txt);  //alt속성값 부여
		$("#popup h3").text( txt ); //h3안 콘텐츠 텍스트 부여
		$("#popup").fadeIn();
		$("body").css("overflow","hidden");		
	});
	//팝업 큰이미지 닫기
	$("#popup img").click(function(){
		$("#popup").fadeOut();
		$("body").css("overflow","auto");
	});
	
	//상단 메뉴 부드럽게 이동
	$("nav a, #top a").click(function(){
		//큰화면에서만, 부드럽게 스크롤이동
		if( $(window).width() > 768 ){
			$("html,body").stop().animate({scrollTop : $(this.hash).offset().top });
		}
		//상단 메뉴 - 활성화 유지 (색변경)
		if( $("nav a") ){
			$(this).addClass("active").siblings().removeClass("active");
		}
	});
	
	//상단 한글자씩 나오는 기능 (타자치는 효과)
	const typing = "안녕하세요. \n최원영의 포트폴리오입니다."
	console.log(typing);
	//$("h1").html( typing[4]  );  "요"
	let i = 0; 
	let txt = "";
	function type(){
		if( i < typing.length ){			
			txt += typing[i];
			document.getElementById("typing").innerText = txt;
			i++;
			setTimeout( type, 150 );
		}
	}
	type();
	
	//휴대폰에서는 상단 배경색 보임
	if( $(window).width()<= 600 ){
		$("nav").addClass("act");
	} else{	//휴대폰 아닐때
		//화면 스크롤시 상단 배경색 생김
		$(window).scroll(function(){
			if( $(window).scrollTop() > 100 ){
				$("nav").addClass("act");
			} else {
				$("nav").removeClass("act");
			}
		});
	}
	
	//((모바일이 아닌 화면))스크롤을 내릴때마다 작품이 하나씩 보임
	if( $(window).width()> 500 ){
		$(window).scroll(function(){
			if( $(window).scrollTop()>1600 ){
				$("#portfolio> section").eq(0).addClass("act");
			}
			if( $(window).scrollTop()>2500 ){
				$("#portfolio> section").eq(1).addClass("act");
			}
			if( $(window).scrollTop()>3400 ){
				$("#portfolio> section").eq(2).addClass("act");
			}
			if( $(window).scrollTop()>4300 ){
				$("#portfolio> section").eq(3).addClass("act");
			}
			if( $(window).scrollTop()>5200 ){
				$("#portfolio> section").eq(4).addClass("act");
			}
		});				
	}
	
	//스크롤 내리면  게이지 올라감
	
	$(window).scroll(function(){
				
				if( $(window).scrollTop()>500 ){            
        $(".w1").stop().delay(200).animate({width:"90%"});
        $(".w2").stop().delay(200).animate({width:"80%"});
        $(".w3").stop().delay(200).animate({width:"70%"});
        $(".w4").stop().delay(200).animate({width:"70%"});
        $(".w5").stop().delay(200).animate({width:"50%"});
        }
	});
	
	$(".hover-bg>a:not(.noBlack)").click(function(){
		var x1 = $(this).find("img").attr("src");
		var x2 = x1.replace("small","large");
		var y = $(this).find("h4").text();
		//alert(x + y);		
		
		$("#black").fadeIn();
		$("#black>h1").text(y);
		$("#black img").attr({"src": x2, "alt":y , "max-width" : "1000px"});
		
		$("body").removeClass().css("overflow","hidden");
		$("body>div").last().remove();
	});
	$("#black>button").click(function(){
		$("#black").fadeOut();
		$("body").css("overflow","auto");
	});
	$(document).keydown(function(e){
		if(e.keyCode==27){
			$("#black").fadeOut();	
			$("body").css("overflow","auto");
		}	
	});

	
});//끝









