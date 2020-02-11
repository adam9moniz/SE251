// JavaScript Document

	window.addEventListener("load", initialize); // Listener

	function initialize(){
		
		var submitButton = document.getElementById("submitButton");
		submitButton.addEventListener("click", submitForm);
		
		
	}



	function submitForm(){
		
		var pTags = document.querySelectorAll("#form p");
		
		var spans = document.querySelectorAll("span");
		
		var textFields = document.querySelectorAll("input[type='text']");
		
		var blankText = false;

		for(var z = 0; z < textFields.length;z++){
			
			if(textFields[z].value == ""){
				spans[z].innerHTML = "*";
				
				pTags[z].classList.add("red");
				
				blankText = true;
							
			}
		}
		
		if(blankText == false){
			emailMatch();
			
		}
	}



	function emailMatch(){
		
		var email = document.getElementById("email");
		var cemail = document.getElementById("cemail");
		
		if(email.value === cemail.value){
			
			inputCheck();


		}
		
		else{
			
			alert("Emails Do Not Match");
		}
		
		
	}
	
	
	
	function inputCheck(){
		
		var first = document.getElementById("first-name");
		var last = document.getElementById("last-name");	
	
		



		
		
		if (!/^[a-zA-Z]*$/g.test(first.value)){
			
			alert("Please Enter a Valid First Name... DO NOT INCLUDE SPEC CHARACTERS!!");	
				
		
		
		}
		else{
			
			inputLastCheck();
			
			
			
		}


		
		
		
		
	}
	
		function inputLastCheck(){
		
		var first = document.getElementById("first-name");
		var last = document.getElementById("last-name");	
	
		



		
		
		if (!/^[a-zA-Z]*$/g.test(last.value)){
			
			alert("Please Enter a Valid Last Name... DO NOT INCLUDE SPEC CHARACTERS!!");	
				
		
		
		}
		else{
			
			inputEmailCheck();
			
			
			
		}	
	}
	
	
	function inputEmailCheck(){
		
		var email = document.getElementById("email");
	
	
	
		var lookFor = /@/g;
        var result = lookFor.test(email.value);
		
		
		if (result == false){
			
			alert("Please Enter a Valid Email... EX. boblarry2@whatsup.com")
		}
		
		else{
			
			inputPhoneCheck();
			
		}
		
		
	}
	
	
	function inputPhoneCheck(){
		var phone = document.getElementById("phone");	

		var lookFor = /^\d{10}$/g;
		var result = lookFor.test(phone.value);
		
		if (result == false){
			
			alert("Please Enter a Valid Phone Number... EX. 4015552546")
		}
		
		else{
			
			displayResults();
			S
		}		
		
		
		
		
		
	}
	
	
	function displayResults(){
		
		
		
		var first = document.getElementById("first-name");
		var last = document.getElementById("last-name");	
		var email = document.getElementById("email");
		var phone = document.getElementById("phone");		
		


			var form = document.getElementById("form");
			form.style.display = "none";
			
			var confirm = document.getElementById("confirmation");
			confirm.style.display ="block";
			
			var info = document.getElementById("info");
			
			info.innerHTML = first.value + " "+ last.value + "<br/>";
			
			info.innerHTML += email.value + "<br/>";
			
			info.innerHTML += phone.value + "<br/>";
		
		
		
	}
	

	
	
	
	
	// console.log(pTags);
	// console.log(spans);
	// console.log(textFields);