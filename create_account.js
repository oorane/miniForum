
function displayForm(){

	let main_div= document.getElementById('main_div');
	let form= document.createElement('form');

	let username_input= document.createElement('input');
	username_input.setAttribute('id', 'username_input'); 
	username_input.setAttribute('value','Nom d\'utilisateur');
	let password_input= document.createElement('input');
	password_input.setAttribute('type', 'password');
	password_input.setAttribute('id', 'password_input'); 
	let confirm_input= document.createElement('input');
	confirm_input.setAttribute('type', 'password');
	confirm_input.setAttribute('id', 'confirm_input'); 
	let save_localstorage= document.createElement('input');
	save_localstorage.setAttribute('type', 'checkbox');
	save_localstorage.setAttribute('id', 'save_localstorage');
	save_localstorage.textContent= 'Se souvenir de moi';
	let save_label= document.createElement('label')
	save_label.setAttribute('for','save_localstorage');
	save_label.textContent= 'Se souvenir de moi';
	let create_button= document.createElement('button');
	create_button.setAttribute('id', 'create_button');
	create_button.textContent= 'Créer un compte';

	form.appendChild(username_input);
	form.appendChild(password_input);
	form.appendChild(confirm_input);
	form.appendChild(save_localstorage);
	form.appendChild(save_label);
	form.appendChild(create_button);
	main_div.appendChild(form);

}

displayForm();

let create_button= document.getElementById('create_button');

create_button.addEventListener('click', event => {

});