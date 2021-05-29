$(document).ready(function(){
    /*--------------------搜索框样式控制js------------------------*/
	 var search_types={
        "types":[{name:"wd",action:"https://www.baidu.com/s",stype:"images/searchChoice/scbaidu.png",type:"baidu"},
                 {name:"query",action:"https://www.sogou.com/web",stype:"images/searchChoice/scsougou.png",type:"sogou"},
                 {name:"q",action:"https://cn.bing.com/search",stype:"images/searchChoice/scbing.png",type:"bing"},
                 {name:"q",action:"https://www.so.com/s",stype:"images/searchChoice/sc360.png",type:"so"},
                 {name:"q",action:"https://www.google.com.hk/search",stype:"images/searchChoice/scgoogle.png",type:"google"},
                 {name:"key",action:"https://www.cupfox.com/search",stype:"images/searchChoice/sccili.png",type:"cili"},
                 {name:"key",action:"http://neets.cc/search",stype:"images/searchChoice/scyingyin.png",type:"yingyin"},
                 
                ]};
	var checktype=$(".sChoiceBtn");
    var type=$(".scSmallBox");
    var seach_type=$(".scBigBox");
    var form=$("#search_bg #button_bg form");
    var textb=$("#search_bg #button_bg form .textb");
    var subb=$("#search_bg #button_bg form .subb");
    var tbcolor="#126AC1";

	var selType=get_cookie("sel"),obj=null;
	search_types.types.forEach(function(e){
		if(e.type==selType){
			obj = e;
		}
	})
	if(obj!=null){
		form.attr("action",obj.action);//改变表单提交位置
		textb.attr("name",obj.name);//改变表单变量名
		checktype.css({"background":"url("+obj.stype+")"});
	}
    textb.focus();//文档加载完毕 搜索框获取焦点
    //alert(search_types.types[1].value);
    //选择搜索类型按钮被点击
    checktype.click(function(){        
        seach_type.css({"display":"block",height:0});
        seach_type.animate({
            height:(type.height())*type.length,
        },300);

    });

    type.click(function(){
        //alert(search_types.types[$(this).index()].value)
		var type = search_types.types[$(this).index()].type,exp=null;
		exp = new Date();
		exp.setTime(exp.getTime() + 2592000* 1000);//过期时间1分钟  
		document.cookie="sel="+type+";path=/;expires="+exp.toGMTString();
        form.attr("action",search_types.types[$(this).index()].action);//改变表单提交位置
        textb.attr("name",search_types.types[$(this).index()].name);//改变表单变量名
        checktype.css({"background":"url("+search_types.types[$(this).index()].stype+")"});
        /*subb.val(search_types.types[$(this).index()].value);//改变按钮显示
        subb.css({background:search_types.types[$(this).index()].subcolor});//改变按钮颜色
        tbcolor=search_types.types[$(this).index()].subcolor;//改变输入框边框颜色
        
        subb.css({"box-shadow":"0 1px 2px "+search_types.types[$(this).index()].subcolor});
        textb.focus();//编辑框获取焦点*/
        seach_type.animate({
            height:0,
        },500,function(){
            seach_type.css({"display":"none",height:0});
        });
    });

    seach_type.mouseleave(function(){
        seach_type.animate({
            height:0,
        },500,function(){
            seach_type.css({"display":"none",height:0});
        });
    });
    textb.focus(function(){
        
        //
        seach_type.animate({
            height:0,
        },500,function(){
            seach_type.css({"display":"none",height:0});
        });
    });
    /*-----------------获取关键词js---------------------*/
    var textb=$("#search_bg #button_bg form .textb");
    textb.keyup(function(event){
        if(textb.val()==""||textb.val()==" "){
            return;
        }
        if(event.which!=39&&event.which!=40&&event.which!=37&&event.which!=38&&event.which!=13)
        $.ajax({
            url:"https://suggestion.baidu.com/su",
            type:"GET",
            dataType:"jsonp",
            jsonp: 'jsoncallback',
            async: false,
            timeout: 5000,//请求超时
            data:{
                "wd":textb.val(),
                "cb":"keydata"
            },
            success: function (json) {
            },
            error: function (xhr) {
                return;
            }

        });
    });

});

function get_cookie(Name) {
   var search = Name + "="//查询检索的值
   var returnvalue = "";//返回值
   if (document.cookie.length > 0) {
     sd = document.cookie.indexOf(search);
     if (sd!= -1) {
        sd += search.length;
        end = document.cookie.indexOf(";", sd);
        if (end == -1)
         end = document.cookie.length;
         //unescape() 函数可对通过 escape() 编码的字符串进行解码。
        returnvalue=unescape(document.cookie.substring(sd, end))
      }
   } 
   return returnvalue;
}

//打印关键词
function keydata(keys){
        var len=keys.s.length;
        var keywordbox=$("#search_bg #button_bg .keyword");//关键词盒子
        var textb=$("#search_bg #button_bg form .textb");
        var subb=$("#search_bg #button_bg form .subb");
        if(len==0){
            keywordbox.css({display:"none"});
        }else{
            keywordbox.css({display:"block"});
        }
        var spans="";
        for(var i=0;i<len;i++)
        {
            spans+="<span>"+keys.s[i]+"</span>"
        }
        keywordbox.html(spans);//把关键词写入关键词盒子
        keywordbox.animate({
            height:(keywordbox.children().height()+1)*len//关键词下滑效果
        },100);
        //点击候选词汇
        keywordbox.children().click(function(){
            textb.val($(this).html());//选中词汇放入输入框

            keywordbox.animate({
                height:0//关键盒子收缩效果
            },10,function(){
                keywordbox.css({display:"none",height:"auto"});
                keywordbox.empty();//清空盒子内容
            });

            textb.focus();//输入框获取焦点*/
            $("#search_bg #button_bg form").submit();//提交搜索
        });

        //提交按钮获取焦点后
        subb.focus(function(){//提交按钮获取焦点后
            keywordbox.animate({
                height:0//关键盒子收缩效果
            },10,function(){
                keywordbox.css({display:"none",height:"auto"});
                keywordbox.empty();//清空盒子内容
            });
        });

        /*textb.blur(function(){//输入框失去焦点后收缩关键词盒子(此方法会与点击候选词方法冲突造成失效)
            keywordbox.animate({
                height:0//关键盒子收缩效果
            },100,function(){
                keywordbox.css({display:"none",height:"auto"});
                keywordbox.empty();//清空盒子内容
            });
        });*/
        keywordbox.mouseleave(function(){//鼠标离开关键字盒子后收缩关键词盒子（取代上一个方法）
            keywordbox.animate({
                height:0//关键盒子收缩效果
            },100,function(){
                keywordbox.css({display:"none",height:"auto"});
                keywordbox.empty();//清空盒子内容
            });
        });
        var numspan=0;//用来指定选择候选词（通过方向键改变）
        textb.keydown(function(event){//如果使用回车提交时，关键词盒子也可以自动收缩
			/*if(event.which==8){//按下Backspace键触发，清空关键词关闭盒子
				if(textb.length==1){
					keywordbox.animate({
					height:0//关键盒子收缩效果
					},10,function(){
						keywordbox.css({display:"none",height:"auto"});
						keywordbox.empty();//清空盒子内容
					});
				}
			}*/
            if(event.which==13){
                keywordbox.animate({
                height:0//关键盒子收缩效果
                },10,function(){
                    keywordbox.css({display:"none",height:"auto"});
                    keywordbox.empty();//清空盒子内容
                });
                /*$("#search_bg #button_bg form").submit(function(){
                    return false;//阻止提交
                });*/
                /*$("#search_bg #button_bg form").submit(function(e){
                    e.preventDefault();//阻止提交方法2
                });*/
            }
            //按下下方向键
            if(event.which==40){

                if(numspan==len)
                    numspan=0;
                for(var i=0;i<len;i++){
                    if(numspan==i){
                        keywordbox.children().eq(i).css({
                            "background-color":"#f1f1f1"
                        });
                    }else{
                        keywordbox.children().eq(i).css({
                            "background-color":"rgba(255,255,255,0.3)"
                        });
                    }
                }
                textb.val(keywordbox.children().eq(numspan).html());
                numspan++;
            }
            //按下上方向键
            if(event.which==38){

                numspan--;
                if(numspan==len)
                    numspan=0;
                for(var i=0;i<len;i++){
                    if(numspan==i){
                        keywordbox.children().eq(i).css({
                            "background-color":"#f1f1f1"
                        });
                    }else{
                        keywordbox.children().eq(i).css({
                            "background-color":"rgba(255,255,255,0.3)"
                        });
                    }
                }
                textb.val(keywordbox.children().eq(numspan).html());

            }
        });
        keywordbox.children().mouseover(function(){
            numspan=$(this).index();
            for(var i=0;i<len;i++){
                    if(numspan==i){
                        keywordbox.children().eq(i).css({
                            "background-color":"#f1f1f1"
                        });
                    }else{
                        keywordbox.children().eq(i).css({
                            "background-color":"rgba(255,255,255,0.3)"
                        });
                    }
                }
                
        });

}