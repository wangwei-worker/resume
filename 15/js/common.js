// JavaScript Document
$(function(){
	$('.cot1 dd span').on('click',function(){
		window.location.href = 'tijian.html';
	});
	$('.cot5 input[type="button"]').each(function(index, element) {
       $(this).click(function(){
		 	$('.yuding-login').show();
		 });
    });
	$('.yuding-login i').click(function(){
		$('.yuding-login').hide();
	});
})