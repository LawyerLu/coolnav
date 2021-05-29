$(function(){



	
	$('#logoLeft').mouseenter(function(){
		$('#logoLeftFe').animate({'top':'0px'},0)
		$('#logoLeftFe').animate({'top':'-750px'},1000)
	})

	$('#logoLeft').click(function(){
		$('#bigBox').hide()
		$('#recoPage').show()
		$('#recoPage').animate({'margin-top':'-90px','opacity':'1'},500)
	})

	$('.recoBtn').click(function(){
		$('#bigBox').show()
		$('#recoPage').hide()
		$('#recoPage').animate({'margin-top':'-150px','opacity':'0'},0)
	})

	$('.navBg').hide()

	$('.buy').mouseenter(function(){
		$('.navBg').hide()
		$('.navBg01').show()
		$('.navBg01 a').animate({'top':'0','bottom':'0','opacity':'1'},300)
	})

	$('.news').mouseenter(function(){
		$('.navBg').hide()
		$('.navBg02').show()
		$('.navBg02 a').animate({'top':'0','bottom':'0','opacity':'1'},300)
	})

	$('.forum').mouseenter(function(){
		$('.navBg').hide()
		$('.navBg03').show()
		$('.navBg03 a').animate({'top':'0','bottom':'0','opacity':'1'},300)
	})

	$('.tool').mouseenter(function(){
		$('.navBg').hide()
		$('.navBg04').show()
		$('.navBg04 a').animate({'top':'0','bottom':'0','opacity':'1'},300)
	})

	$('.favorites').mouseenter(function(){
		$('.navBg').hide()
		$('.navBg05').show()
		$('.navBg05 a').animate({'top':'0','bottom':'0','opacity':'1'},300)
	})

	
/*滑动页面*/

$.fn.hoverDelay = function(options){ 
var defaults = { 
hoverDuring: 200, 
outDuring: 200, 
hoverEvent: function(){ 
$.noop(); 
}, 
outEvent: function(){ 
$.noop(); 
} 
}; 
var sets = $.extend(defaults,options || {}); 
var hoverTimer, outTimer; 
return $(this).each(function(){ 
$(this).hover(function(){ 
clearTimeout(outTimer); 
hoverTimer = setTimeout(sets.hoverEvent, sets.hoverDuring); 
},function(){ 
clearTimeout(hoverTimer); 
outTimer = setTimeout(sets.outEvent, sets.outDuring); 
}); 
}); 
} 



$('.hChangyongBtn').hoverDelay({ 
hoverEvent: function(){ 
		$('.hSiteBox').hide()
		$('.hChangyong').show()				
		$(".hNav").removeClass("currentHNav")
		$(".hChangyongBtn").addClass("currentHNav")
} 
}); 

$('.hZhengfaBtn').hoverDelay({ 
hoverEvent: function(){ 
		$('.hSiteBox').hide()
		$('.hZhengfa').show()
		$(".hNav").removeClass("currentHNav")
		$(".hZhengfaBtn").addClass("currentHNav")	
} 
}); 

$('.hQuzhanBtn').hoverDelay({ 
hoverEvent: function(){ 
		$('.hSiteBox').hide()
		$('.hQuzhan').show()
		$(".hNav").removeClass("currentHNav")
		$(".hQuzhanBtn").addClass("currentHNav")	
} 
}); 

$('.hTukuBtn').hoverDelay({ 
hoverEvent: function(){ 
		$('.hSiteBox').hide()
		$('.hTuku').show()
		$(".hNav").removeClass("currentHNav")
		$(".hTukuBtn").addClass("currentHNav")	
} 
}); 

$('.hXuexiBtn').hoverDelay({ 
hoverEvent: function(){ 
		$('.hSiteBox').hide()
		$('.hXuexi').show()
		$(".hNav").removeClass("currentHNav")
		$(".hXuexiBtn").addClass("currentHNav")	
} 
}); 

$('.hShenghuoBtn').hoverDelay({ 
hoverEvent: function(){ 
		$('.hSiteBox').hide()
		$('.hShenghuo').show()
		$(".hNav").removeClass("currentHNav")
		$(".hShenghuoBtn").addClass("currentHNav")		
} 
}); 

$('.hGongjuBtn').hoverDelay({ 
hoverEvent: function(){ 
		$('.hSiteBox').hide()
		$('.hGongju').show()
		$(".hNav").removeClass("currentHNav")
		$(".hGongjuBtn").addClass("currentHNav")	
} 
}); 

$('.hZhanzhangBtn').hoverDelay({ 
hoverEvent: function(){ 
		$('.hSiteBox').hide()
		$('.hZhanzhang').show()
		$(".hNav").removeClass("currentHNav")
		$(".hZhanzhangBtn").addClass("currentHNav")
} 
}); 

$('.hBangongBtn').hoverDelay({ 
hoverEvent: function(){ 
		$('.hSiteBox').hide()
		$('.hBangong').show()
		$(".hNav").removeClass("currentHNav")
		$(".hBangongBtn").addClass("currentHNav")	
} 
}); 

$('.hSosoBtn').hoverDelay({ 
hoverEvent: function(){ 
		$('.hSiteBox').hide()
		$('.hSoso').show()
		$(".hNav").removeClass("currentHNav")
		$(".hSosoBtn").addClass("currentHNav")	
} 
}); 

$('.promptBtn').hoverDelay({ 
hoverEvent: function(){ 
		$('.promptText').show()
} 
}); 

$('.promptBtn').mouseout(function(){
		$(".promptText").hide()
	})




/*搜索引擎切换*/
	/*$('.sChoiceBtn').click(function(){
		$(".scBigBox").show()
	})

	$('.scSmallBox').click(function(){
		$(".scBigBox").hide()
	})*/

/*简洁、详细切换
	$(document).ready(function() {
		$.fn.fullpage({
			
			anchors: ['pa1', 'pa2', 'pa3', 'pa4']
		});
	});
	*/

})

