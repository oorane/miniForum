
import { User } from "./classes.js";

let username_check= false;
let password_check= false;
let confirm_check= false;
let save_check= false;
let users_list= [];

const db_url= "http://localhost:8080/api";

function displayForm(){

	// let main_div= document.getElementById("main_div");
	let username_div= document.createElement("div");
	let password_div= document.createElement("div");
	let confirm_div= document.createElement("div");
	let save_div= document.createElement("div");
	let button_div= document.createElement("div");
	let form= document.createElement("form");

	let username_input= document.createElement("input");
	username_input.setAttribute("id", "username_input"); 
	username_input.setAttribute("value","Nom d\"utilisateur");

	let username_label= document.createElement("label");
	username_label.setAttribute("id", "username_label");
	username_label.setAttribute("for","username_input");
	username_label.style.color= "red";

	let password_input= document.createElement("input");
	password_input.setAttribute("type", "password");
	password_input.setAttribute("id", "password_input");

	let password_label= document.createElement("label");
	password_label.setAttribute("id", "password_label");
	password_label.setAttribute("for","password_input");
	password_label.style.color= "red"; 

	let confirm_input= document.createElement("input");
	confirm_input.setAttribute("type", "password");
	confirm_input.setAttribute("id", "confirm_input");

	let confirm_label= document.createElement("label");
	confirm_label.setAttribute("id", "confirm_label");
	confirm_label.setAttribute("for","confirm_input");
	confirm_label.style.color= "red";

	let save_localstorage= document.createElement("input");
	save_localstorage.setAttribute("type", "checkbox");
	save_localstorage.setAttribute("id", "save_localstorage");
	save_localstorage.textContent= "Se souvenir de moi";

	let save_label= document.createElement("label")
	save_label.setAttribute("for","save_localstorage");
	save_label.textContent= "Se souvenir de moi";

	let create_button= document.createElement("button");
	create_button.setAttribute("id", "create_button");
	create_button.textContent= "Créer un compte";

	let jump_lign= document.createElement("br");

	username_div.appendChild(username_input);
	username_div.appendChild(username_label);
	form.appendChild(username_div);
	form.appendChild(jump_lign);
	password_div.appendChild(password_input);
	password_div.appendChild(password_label);
	form.appendChild(password_div);
	form.appendChild(jump_lign);
	confirm_div.appendChild(confirm_input);
	confirm_div.appendChild(confirm_label);
	form.appendChild(confirm_div);
	form.appendChild(jump_lign);
	save_div.appendChild(save_localstorage);
	save_div.appendChild(save_label);
	form.appendChild(save_div);
	form.appendChild(jump_lign);
	button_div.appendChild(create_button);
	form.appendChild(button_div);
	
	document.body.appendChild(form);

}

displayForm();

recupUsers();

username_input.addEventListener("input", event => {
	console.log(users_list);
	let username_label= document.getElementById("username_label");
	let search_value= username_input.value;
	recupUsers();
	username_label.textContent= "";
	username_check= true;
	users_list.forEach(user => {
		if(user.username === search_value) {
			username_label.textContent= "Erreur : ce nom existe déjà.";
			username_check= false;
		}
		else if(search_value.length <3 || search_value.length >50 ) {
			username_label.textContent= "La taille doit être comprise entre 3 et 50 caractères.";
			username_check= false;
		}
	});

});

password_input.addEventListener("input", event => {
	let password_label= document.getElementById("password_label");
	let search_value= password_input.value;
	password_label.textContent= "";
	password_check= true;
	if(search_value.search(/[0-9]/) === -1 || search_value.search(/[A-Z]/) === -1 || search_value.search(/[^A-Za-z0-9]/) === -1) {
		password_label.textContent= "Le mot de passe doit contenir au minimum : un chiffre, une majuscule et un caractère spécial.";
		password_check= false;
	}
	else if(search_value.length <8 || search_value.length >50 ) {
		password_label.textContent= "Le mot de passe doit contenir au moins 8 caractères.";
		password_check= false;
	}
});

confirm_input.addEventListener("input", event => {
	let confirm_label= document.getElementById("confirm_label");
	let search_value= confirm_input.value;
	confirm_label.textContent= "";
	confirm_check= true;
		if(password_input.value !== search_value) {
			confirm_label.textContent= "L'entrée ne correspond pas au mot de passe.";
			confirm_check= false;
		}
});

save_localstorage.addEventListener("change", event => {
	let save_input= document.getElementById("save_localstorage");
		if(save_input.checked) {
			save_check= true;
		}
		else {
			save_check= false;
		}
});

create_button.addEventListener("click", event => {
	if(username_check === true && password_check === true && confirm_check === true) {
		createUser();
		if(save_check === true) {
			const new_user= new User(username_input.value,password_input.value);
			localStorage.setItem("saved_user",JSON.stringify(new_user));
		}
	}
});

function recupUsers() {

	fetch(`${db_url}/user`).then(response => response.json())
		.then(data => {
			console.log("Success:", data);
			users_list= [];
			data.forEach(user => {
				users_list.push(new User(user.username,user.password));
			});
		})
		.catch((error) => {
			console.error("Error:", error);
		});
}

function createUser() {
	
	const xhr = new XMLHttpRequest();
	xhr.open('POST', `${db_url}/user`, true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send(JSON.stringify({ username: `${username_input.value}`, password: `${password_input.value}` }));
	new Promise((resolve, reject) => {
    xhr.onload = () => (xhr.status !== 200) ? reject() : resolve(JSON.parse(xhr.response))
		.then(user => {
    		console.log("Creation d'un nouvel réussie");
		})
		.catch(() => {
    		console.log("Echec de la création d'un nouvel utilisateur");
		});
	})
}

