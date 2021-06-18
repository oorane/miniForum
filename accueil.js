import { Sujet } from"./classes.js";

const listSujetsObjets = [new Sujet(0, "Coucou", "18/06/2021", "Thomas"),new Sujet(0, "Qui est la maman de Oui-Oui ????", "01/01/0000", "Jesus"),new Sujet(0, "Le groupe 2 est le meilleur !", "08/07/2021", "Soufiane")]; //TODO Récup tableau complet


const body = document.body;

const br = document.createElement("br");

const popup = document.createElement("div");
popup.setAttribute("class", "popup invisible");
popup.setAttribute("style", "left: 80px; top: 80px;");
const popupContent = document.createElement("p");
popup.appendChild(popupContent);



const divNouvSujet = document.createElement("div");
const listSujet = document.createElement("div");

const nouvSujet = document.createElement("form");
nouvSujet.setAttribute("class", "nvsujet")

const nouvTitre = document.createElement("input");
nouvTitre.setAttribute("type", "text");
nouvTitre.setAttribute("placeholder","Titre");
nouvTitre.setAttribute("minlength", "5");
nouvTitre.setAttribute("maxlenght", "1000");
nouvTitre.setAttribute("class", "inputtxt");

const nouvMessage = document.createElement("textarea");
nouvMessage.setAttribute("name", "nouvmessage");
nouvMessage.setAttribute("rows", "5");
nouvMessage.setAttribute("minlength", "5");
nouvMessage.setAttribute("maxlenght", "1000");
nouvMessage.setAttribute("placeholder", "Message");
nouvMessage.setAttribute("class", "inputtxt");

const nouvSujetBouton = document.createElement("input");
nouvSujetBouton.setAttribute("type","submit");
nouvSujetBouton.setAttribute("value", "Ajouter un nouveau sujet");
nouvSujetBouton.setAttribute("class", "ajoutsujet");


nouvSujet.appendChild(nouvTitre);
nouvSujet.appendChild(br);
nouvSujet.appendChild(nouvMessage);
nouvSujet.appendChild(br);
nouvSujet.appendChild(nouvSujetBouton);



const filtreForm = document.createElement("form");

const filtre = document.createElement("input");
filtre.setAttribute("type", "text");
filtre.setAttribute("placeholder","Filtrer par titre ou par auteur");
filtre.setAttribute("maxlenght", "1000");
filtre.setAttribute("class", "inputtxt")

filtreForm.addEventListener("keyup", event => {
    //TODO mettre à jour liste des sujets en fonction de ce qui est dans "filtre"
});

filtreForm.appendChild(filtre);
listSujet.appendChild(filtreForm);


listSujetsObjets.forEach(element => {
    const sujet = document.createElement("div");
    sujet.setAttribute("class", "sujet");

    const sujetTitre = document.createElement("h3");
    sujetTitre.textContent = element.title;
    sujetTitre.setAttribute("class", "accueil")

    sujetTitre.addEventListener("mouseover", event => {
        console.log(event);
        popupContent.innerHTML = `Posté par ${element.author_id}<br>le ${element.date}`;
        popup.setAttribute("class", "popup");
    });

    sujetTitre.addEventListener("mousemove", event => {
        let posX = event.clientX + 10;
        let posY = event.clientY + 10;
        popup.setAttribute("style", `left: ${posX}px; top: ${posY}px;`);
    });

    sujetTitre.addEventListener("mouseout", event => {
        popup.setAttribute("class", "popup invisible");
    });

    const modifTitre = document.createElement("input");
    modifTitre.setAttribute("type", "text");
    modifTitre.setAttribute("class", "modif_titre invisible");


    let modifMode = false

    const boutonModif = document.createElement("button");
    boutonModif.textContent = "Modifier";
    boutonModif.setAttribute("class", "bouton_modif");

    boutonModif.addEventListener("click", event => {
        console.log(event);
        if (modifMode === false) {
            boutonModif.textContent = "Enrgistrer";
            boutonModif.setAttribute("class", "bouton_enregistre");
            sujetTitre.setAttribute("class", "invisible");
            modifTitre.setAttribute("class", "modif_titre");
            modifMode = true;
        } else {
            boutonModif.textContent = "Modifier";
            boutonModif.setAttribute("class", "bouton_modif");
            sujetTitre.setAttribute("class", "accueil");
            modifTitre.setAttribute("class", "modif_titre invisible");
            modifMode = false;
        }
    });



    const boutonSupp = document.createElement("button");
    boutonSupp.textContent = "Supprimer";
    boutonSupp.setAttribute("class", "bouton_supp");

    boutonSupp.addEventListener("click", event => {

    });
    

    sujet.appendChild(sujetTitre);
    sujet.appendChild(modifTitre);
    sujet.appendChild(boutonModif);
    sujet.appendChild(boutonSupp);
    listSujet.appendChild(sujet);

});











body.appendChild(nouvSujet);
body.appendChild(listSujet);
body.appendChild(popup);    