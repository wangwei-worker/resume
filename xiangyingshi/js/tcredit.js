// JavaScript Document
$(function(){
	$('#btnPostContact').on('click',function(){
		var company = $.trim($('#company').val());
		var name = $.trim($('#name').val());
		var email = $.trim($('#email').val());
		var mobile = $.trim($('#mobile').val());
		if(company=="" || name=="" || email=="" || mobile==""){
			alert('请完善联系信息');
		}else{
			if(!validateEmail(email)){
				alert('请填写正确的邮箱');
				return false;
			}
			if(!validateMobile(mobile)){
				alert('请填写正确的手机号码');
				return false;
			}
			var url = "http://admin.tcredit.com/bigdata/manage/addBusinessCooperation";
			var data = {
				customerName : name,
				email : email,
				mobile : mobile,
				companyName : company
			}
			$.ajax({
				async : false,
				url : url,
				type: 'GET',
				dataType:"jsonp",
				data: qsData,
				success: function(json){
					if(response.status==0){
						alert(response.message);
					}else{
						alert(response.message);
					}
				}
			});
			
			$.post(url,data,function(response){
				if(response.status==0){
					$('.theme-mask').show();
					$('.theme-mask').height($(document).height());
					$('.popoverl').slideDown(200);
				}else{
					alert('请求失败');
				}
			},'json');
		}
	});
})

function validateEmail(email){
	var reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
	return reg.test(email);
}
function validateMobile(mobile){
	var reg = /^1[0-9]{10}$/;
	return reg.test(mobile);
}