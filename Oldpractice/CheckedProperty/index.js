// .checked - determines the checked state of an htm checkbox
// or if the round ball thingy is checked


const myCheckbox = document.getElementById('myCheckbox');
const visaBtn = document.getElementById('visaBtn');
const masterCardBtn = document.getElementById('masterCardBtn');
const payPalBtn = document.getElementById('payPalBtn');
const mySubmit = document.getElementById('mySubmit');
const subResult = document.getElementById('subResult');
const paymentResult = document.getElementById('paymentResult');

const gayCoinBtn = document.getElementById('gayCoinBtn');

mySubmit.onclick = function(){
	if(myCheckbox.checked){
		subResult.textContent = 'You are subscribed';
	}
	else{
		subResult.textContent = 'You are big gay';
	}


	if(visaBtn.checked){
		paymentResult.textContent = 'You are paying with Visa';
	}
	else if(masterCardBtn.checked){
		paymentResult.textContent = 'You are paying with Master Card';
	}
	else if(payPalBtn.checked){
		paymentResult.textContent = 'You are paying with PayPal';
	}
	else if(gayCoinBtn.checked){
		paymentResult.textContent= 'You are paying with Gay Coin baby ';
	}
	else{
		paymentResult.textContent = 'Choose and then pay MF';
	}
}