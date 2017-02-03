// JavaScript Document
$(function(){
	$('#xiala').click(function(){
		$(this).prevAll('ul').find('a').removeClass('on');
		$(this).prevAll('ul').slideToggle();
	});
	$(window).scroll(function(){                    //滚动滑出
		if($(window).scrollTop() > 200){
			$('#side-bar').slideDown();
		}else{
			$('#side-bar').slideUp();
		}
	});
	$('#side-bar .gotop').click(function(){
		$('html,body').animate({'scrollTop':0},500);
	});
	$('#side-bar .wx').click(function(){
		$(this).next('.wx_node').toggle();
	});
	$('.tp ul').find('a').each(function(index, element) {
        $(this).click(function(){
			if($(document).width() > 768){
				$('.tp ul a').removeClass('on');
				$(this).addClass('on');
			}else{
				$('.tp ul').hide();
			}
		});
    });
})
$(document).ready(function($) {
	$('.close').click(function(){
		$('.theme-mask').hide();
		$('.popoverl').slideUp();
	});
	document.onkeydown = function(event){
		var e = event || window.event || arguments.callee.caller.arguments[0];
		if(e && e.keyCode == 13){
			$('#btnQuery').trigger('click');
		}
	}
	$('#btnQuery').on('click',function(){
		var query = $.trim($('#txtQuery').val());
		if(query != ''){
			window.location.href="http://qx.tcredit.com/searchresult?q="+query;
		}else{
			alert('请输入需要查询的公司名称');
		}
	})
});