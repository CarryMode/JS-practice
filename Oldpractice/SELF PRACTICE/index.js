// let username;
// let password;

// document.getElementById('submit').onclick = function(){
// 	username = document.getElementById('username').value;
// 	password = document.getElementById('password').value;

// 	console.log(username);
// 	console.log(password);
// }



document.addEventListener('DOMContentLoaded', function() {
	const usernameInput = document.getElementById('username');
	const passwordInput = document.getElementById('password');

	// Remove placeholder text when username or password field is clicked
	usernameInput.addEventListener('focus', removePlaceholder);
	passwordInput.addEventListener('focus', removePlaceholder);

	// Restore placeholder text when username or password field loses focus
	usernameInput.addEventListener('blur', restorePlaceholder);
	passwordInput.addEventListener('blur', restorePlaceholder);

	function removePlaceholder(event) {
		 event.target.placeholder = '';
	}

	function restorePlaceholder(event) {
		 if (!event.target.value) {
			  event.target.placeholder = event.target.id === 'username' ? 'Username' : 'Password';
		 }
	}
	
	// Your form submission code can go here...
});


