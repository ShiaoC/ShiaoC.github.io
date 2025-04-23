(function($){
	'use script';


	// Contact Form Validation Email
	$('#newsletterForm').on('submit', function (e) {
		e.preventDefault();

		// Get value
		var email = $('#email').val();

		if(email == ''){
			$('#emailStatus').html('Email is required').delay(5000).hide(800);
			return false;
		}

		$.ajax({
			url:"mail/newsletter-mail.php",
			type:"POST",
			data:{email:email},
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