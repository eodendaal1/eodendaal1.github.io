// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){
    
    $("#email_form").validate({
		rules: {
			"papersize": {
				required: true,
				number: true,
			},
			"papertype": {
				required: true,
			},
			"paperweight": {
				required: true,
			},
			"color": {
				required: true,
			},
			"quantity": {
				required: true,
				number: true,
			},
			"name": {
				required: true,
			},
			"company_name": {
				required: true,
			},
			"email": {
				required: true,
				email: true,
			},
			"phone": {
				required: true,
				number: true,
				minlength: 7,
			},
			"address_1": {
				required: true,
			},
			"city": {
				required: true,
			},
			
			"zip": {
				required: true,
				number: true,
				minlength: 5,
			},
			"image": {
				required: true,
			},
		},
		
		messages: {
			"papersize": {
				required: "Paper Size is required",
			},
			"papertype": {
				required: "Paper Type is required",
			},
			"paperweight": {
				required: "Paper Weight is required",
			},
			"color": {
				required: "Please enter the colors you wish to use",
			},
			"quantiy": {
				required: "Please enter how many",
			},
			"email": {
				required: "Email Address is required",
				email: "Please enter a valid email address",
			},
			"phone": {
				required: "Please enter your phone number",
				minlength: "Please enter at least 7 numbers",
			},	
			"address_1": {
				required: "Please enter your address",
			},
			"city": {
				required: "Please enter your city",
			},
			"state": {
				required: "Please enter your state",
			},
			"zip": {
				required: "Please enter your zip code",
				minlength: "Please enter at least 5 numbers",
			},	
		},
		
		
	});
	
});
		
	