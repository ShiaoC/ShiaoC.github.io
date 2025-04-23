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
		var subject = $('#subject').val();
		var message = $('#message').val();
		var captcha = $('#mathcaptcha').val();

		// Form Validation
		if(name == ''){
			$('#nameStatus').html('Name is required').delay(5000).hide(800);
		}

		if(email == ''){
			$('#emailStatus').html('Email is required').delay(5000).hide(800);
		}

		
		if(subject == ''){
			$('#subjectStatus').html('Subject is required').delay(5000).hide(800);
		}

		if( message == '' ){
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


		if( name == ''  || captcha == '' || email == '' || subject == '' || message == ''){
			return false;
		}

		$.ajax({
			url:"mail/contact-mail.php",
			type:"POST",
			data:{name:name,email:email,subject:subject,message:message},
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