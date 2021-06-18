import { Sujet } from "./classes.js";
import { Message } from "./classes.js";

const afficherMessages = (msgs, div) => {
    msgs.forEach(msg => {
        const encadre = document.createElement("div");
        const titreH3 = document.createElement("h3");
        const paragraphe = document.createElement("p");
        titreH3.textContent = msg.titreMessage();
        paragraphe.textContent = msg.content;
        encadre.appendChild(titreH3);
        encadre.appendChild(paragraphe);
        div.appendChild(encadre);
    });
}

const creationPage = () => {
   // remplacer par la requete du sujet
   const sujet = new Sujet(2, "Le titre de mon sujet", 1254896256, "Orane Monteil"); 
   const titreH1 = document.createElement("h1");
   titreH1.textContent = sujet.title;
   const titreH2 = document.createElement("h2");
   titreH2.textContent = sujet.infoSujet();
   //const div = document.getElementById("test");
   //console.log(div);
   //div.appendChild(titreH1);
   //div.appendChild(titreH2);
   // recuperer tous les message ayant pour topic_id l'id du sujet
   // faire un foreach sur les message

   const msg1 = new Message(4, "nfcosfjezpof,sqmlfv,dsv", 54654651651, 2, "Steffie HU");
   const msg2 = new Message(5, "zadeosfkds, ofg, zapeazpdkzpoad, zfhiazhdahodia !!", 848544658, 2, "Quentin NGUYEN");

   const messages = [
       msg1,
       msg2
   ]

   //afficherMessages(messages, div);
   

}

creationPage();

