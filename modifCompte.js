//Frame modifier mon compte

let div = document.createElement("div");
let form = document.createElement("form");


let modifNomUser = document.createElement("INPUT");
modifNomUser.setAttribute("type", "text");
modifNomUser.setAttribute("value","Modifier le nom utilisateur");

let modifMDP = document.createElement("INPUT");
modifMDP.setAttribute("type", "text");
modifMDP.setAttribute("value","Modifier le mot de passe");

let confirmMDP = document.createElement("INPUT");
confirmMDP.setAttribute("type", "text");
confirmMDP.setAttribute("value","Confirmer le nouveau mot de passe");

let ancienMDP = document.createElement("INPUT");
ancienMDP.setAttribute("type", "text");
ancienMDP.setAttribute("value","Enter le mot de passe actuel");

let boutton = document.createElement("INPUT");
boutton.setAttribute("type","submit");
boutton.setAttribute("value", "Modifier le compte");

document.body.appendChild(div);
div.appendChild(form);
form.appendChild(modifNomUser);
form.appendChild(modifMDP);
form.appendChild(confirmMDP);
form.appendChild(ancienMDP);
form.appendChild(boutton);
