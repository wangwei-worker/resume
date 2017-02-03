// JavaScript Document
$().ready(function() {	
    $('#commentForm').validate({
		rules:{
			username:{
				required: true,
				minlength: 6,
				remote: {
					url: 'ajax_check.action',
					type: 'post'
				}
			},
			password:{
				required: true,
				rangelength: [6,12]
			},
			confirm_password:{
				required: true,
				equalTo: '#password'
			},
			email:{
				required: true,
				email: true
			},
		},
		remote: {
			url: 'check-login.php',
			type: 'get',
			data: {
				yanzheng: function(){
					return $('#yanzheng').val();
				}
			}
		}
	});
});