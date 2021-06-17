import { Sujet } from "./classes.js";

const creationPage = () => {
   // remplacer par la requete du sujet
   const sujet = new Sujet(2, "Le titre de mon sujet", 1254896256, "Orane Monteil"); 
   const titreH1 = document.createElement("h1");
   //titreH1.textContent = sujet.infoSujet();
   titreH1.textContent = sujet.author_id;
   //const div = document.getElementById("test");
   //console.log(div);
   //div.appendChild(titreH1);
   
}

creationPage();