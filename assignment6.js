$(document).ready(function()
{	
	var $state = $("#state"),
		$errorState = $("#errorState"),
		$zipcode = $("#zipcode"),
		$errorZipcode = $("#errorZip"),
		$phone = $("#phone"),
		$errorPhone = $("#errorPhone"),
		$email = $("#eMail"),
		$errorEmail = $("#errorEmail"),
		$ccNumber = $("#ccNumber"),
		$errorCCNum = $("#errorCCNumber"),
		$fName = $("#fName"),
		$errorFirstName = $("#errorFirstName"),
		$lastName = $("#lName"),
		$errorLastName = $("#errorLastName"),	
		$city = $("#city"),
		$errorCity = $("#errorCity"),
		$address1 = $("#address1"),
		$errorAdd1 = $("#errorAdd1"),
		$address2 = $("#address2"),
		$errorAdd2 = $("#errorAdd2"),
		$none = $("#none"),
		$expMonth = $("#expMonth"),
		$expYear = $("#expYear"),
		$errorDate = $("#errorDate"),
		


//Hints 
$state.focus(function()
	{
		$errorState.append('Use a two letter abbreviation');
	}).blur(function()
	{
		$errorState.empty();
	});
	
	$zipcode.focus(function()
	{
		$errorZipcode.append('Use a 5 digit Zipcode');
	}).blur(function()
	{
		$errorZipcode.empty();
	});
	
	$phone.focus(function()
	{
		$errorPhone.append('Numbers Only - No Spaces or Dashes');
	}).blur(function()
	{
		$erroPhone.empty();
	});
	
	$email.focus(function()
	{
		$errorEmail.append('Example - john@doe.com');
	}).blur(function()
	{
		$errorEmail.empty();
	});
	
	$ccNum.focus(function()
	{
		$errorCCNumber.append('Numbers Only - No Spaces or Dashes');
	}).blur(function()
	{
		$errorCCNumber.empty();
	});

	//Validation

	$("#custForm").submit(function(event)
	{
		var pattern = /^[a-z ]+$/i;
			addressPattern = /^[a-z0-9 ]+$/i;
			statePattern = /^[a-z]+$/i;
			numberPattern = /^[0-9]+$/;
			emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
			errors = 0;
			
			$(".errorMsg").empty();
		
		//First Name 
		if (($firstName.val().length > 1) && ($firstName.val().length < 21))
		{
			if(!pattern.test($firstName.val()))
			{
				$errorFirstName.append("Required: Must contain only letters and	spaces between 2 and 20 characters!");
				errors += 1;			
			}
		}
		else
		{
			$errorFirstName.append("Required: Must contain only letters and	spaces between 2 and 20 characters!");
				errors += 1;	
		}
		
		//Last Name Check
		if (($lastName.val().length > 1) && ($lastName.val().length < 21))
		{
			if(!pattern.test($lastName.val()))
			{
				$errorLastName.append("Required: Must contain only letters and	spaces between 2 and 20 characters!");
				errors += 1;			
			}
		}
		else
		{
			$errorLastName.append("Required: Must contain only letters and spaces between 2 and 20 characters!");
				errors += 1;	
		}
		
		//City Check
		if (($city.val().length > 1) && ($city.val().length < 21))
		{
			if(!pattern.test($city.val()))
			{
				$errorCity.append("Required: Must contain only letters and spaces between 2 and 20 characters!");
				errors += 1;			
			}
		}
		else
		{
			$errorCity.append("Required: Must contain only letters and spaces between 2 and 20 characters!");
				errors += 1;	
		}
		
		//Address1
		if (($address1.val().length > 1) && ($address1.val().length < 21))
		{
			if(!addressPattern.test($address1.val()))
			{
				$errorAdd1.append("Required: Must contain only letters, numbers, and spaces between 2 and 20 characters!");
				errors += 1;			
			}
		}
		else
		{
			$errorAdd1.append("Required: Must contain only letters, numbers, and spaces between 2 and 20 characters!");
				errors += 1;	
		}		
		
		//Address2
		if ($address2.val() != "")
		{	
			if (($address2.val().length > 1) && ($address2.val().length < 21))
			{
				if(!addressPattern.test($address2.val()))
				{
					$errorAdd2.append("Required: Must contain only letters, numbers and spaces between 2 and 20 characters!");
					errors += 1;			
				}
			}
			else
			{
				$errAdd2.append("Required: Must contain only letters and spaces between 2 and 20 characters!");
					errors += 1;
			}	
		}
		
		//State 
		if (($state.val().length != 2) || (!statePattern.test($state.val())))
		{	
			$errorState.append("Required: Must contain a two-letter State abbreviation!");
			errors += 1;
		}
		
		//Zip 
		if (($zipcode.val().length != 5) || (!numberPattern.test($zipcode.val())))
		{	
			$errorZipcode.append("Required: Must contain a 5 number Zip Code!");
			errors += 1;
		}
		
		//Phone 
		if (($phone.val().length != 10) || (!numberPattern.test($phone.val())))
		{		
			$errorPhone.append("Required: Must contain a 10 digit number with no space or dashes!");
			errors += 1;
		}
		
		//Email 
		if (!emailPattern.test($email.val()))
		{		
			$errorEmail.append("Required: Must be a valid e-mail address!");
			errors += 1;
		}
		
		//Credit Card
		if($none.is(":checked"))
		{			
		}		
		else
		{
			if(($ccNumber.val().length >= 13) && ($ccNumber.val().length <= 16)) 
			{
				if(!numberPattern.test($ccNumber.val()))
				{
					$errorCCNumber.append("Must contain a 13-16 digit number with no space or dashes!");
					errors += 1;
				}	
			}
			else
			{	
				$errorCCNum.append("Must contain a 13-16 digit number with no space or dashes!");
				errors += 1;
			}
		}
			
		//Credit Card Date
		if($none.is(":checked"))
		{
		}
		else
		{
			if (($expMonth.val() == "") || ($expYear.val() == ""))
			{
				$errorDate.append("Must select a Month and Year!");
				errors +=1;
			}
		}
		
		//Error Count
		if (errors > 0) 
		{
			$("#custForm").prepend('<div class="errorMsg">Please edit the marked fields below to fix errors.</div>');
			event.preventDefault();
		}
	});

});

	