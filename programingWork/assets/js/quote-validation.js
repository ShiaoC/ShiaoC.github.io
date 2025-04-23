(function($){
	'use script';

	let firstNumber = document.getElementById("firstNumber").innerHTML =Math.floor(Math.random() * 10) + 1;
	let secondNumber = document.getElementById("secondNumber").innerHTML =Math.floor(Math.random() * 10) + 1;
	let getCaptchaVal = firstNumber+secondNumber;

	// Contact Form Validation Email
	$('#contactForm').on('submit', function (e) {
		e.preventDefault();

		// Get value
		var name = $('#name').val();
		var email = $('#email').val();
		var serviceName = $('#serviceName').val();
		var budgetStatus = $('#budget').val();
		var phoneStatus = $('#phone').val();
		var messageStatus = $('#message').val();
		var captcha = $('#mathcaptcha').val();

		// Form Validation
		if(name == ''){
			$('#nameStatus').html('Name is required').delay(5000).hide(800);
		}

		if(email == ''){
			$('#emailStatus').html('Email is required').delay(5000).hide(800);
		}

		
		if(serviceName == ''){
			$('#serviceNameStatus').html('Service name is required').delay(5000).hide(800);
		}

		if(budgetStatus == ''){
			$('#budgetStatus').html('Budget is required').delay(5000).hide(800);
		}

		if( phoneStatus == '' ){
			$('#phoneStatus').html('Phone is required').delay(5000).hide(800);
		}

		if( messageStatus == '' ){
			$('#messageStatus').html('Message is required').delay(5000).hide(800);
		}



		if(captcha == ''){
			$('#captchaStatus').html('Captcha validation is required').delay(5000).hide(800);
		}

		console.log(getCaptchaVal);
		console.log(captcha);

		// return false;


		if( getCaptchaVal !=  captcha){

			$('#captchaStatus').html('Captcha validation failed').delay(5000).hide(800);
			return false;
		}


		if( name == ''  || email == '' || serviceName == '' || budgetStatus == '' || phoneStatus == '' || messageStatus == ''){
			return false;
		}

		$.ajax({
			url:"mail/quote-mail.php",
			type:"POST",
			data:{
				name:name,
				email:email,
				service:serviceName,
				budget:budgetStatus,
				phone:phoneStatus,
				message:messageStatus,

			},
			success:function(resp){
				var j = JSON.parse(resp);
				if(j.status === true){
					console.log('response success');
					$('.status-message').html('<span class="success-message">Email has been send sucessfully, Thanks!</span>').delay(5000).hide(800);
					$('form')[0].reset();
				}else{
					alert('Error Sending Email');
				}
			},
			error:function(err){
				alert('error occurred'+err);
			}
		});
	});

}(jQuery));