import { Sujet } from "./classes.js";
import { Message } from "./classes.js";
import { User } from "./classes.js";

const url = "http://localhost:8080/";

let sujet = [];


function enregistreMessage(event, msg) {
    fetch(`${url}message`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.parse(JSON.stringify(msg))
    });
}

function recupUtilisateur(id) {
    return fetch(`${url}api/user/${id}`, 
    {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })
    .then((response) => {return response.json()})
    .then((responseData) => {
        return responseData;
    })
    .catch(error => console.warn(error));
}

function recupSujet(id) {
    fetch(`${url}api/topic/${id}`).then(response => response.json())
        .then(data => {
            console.log('Success');
            sujet.push(data);
            return data;
        })
        .catch((error) => {
            console.error('Error:', error);
    });
}

function recupSujet2(id) {
    return fetch(`${url}api/topic/${id}`, 
    {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })
    .then((response) => {return response.json()})
    .then((responseData) => {
        return responseData;
    })
    .catch(error => console.warn(error));
}


const xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/login', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({ username: 'Toto', password: '@z3rtY' }));
new Promise((resolve, reject) => {
    xhr.onload = () => (xhr.status !== 200) ? reject() : resolve(JSON.parse(xhr.response));
}).then(user => {
    console.log(user);
}).catch(() => {
    console.log('Oops, user not found');
});

const aaa = () => {
    recupUtilisateur(1).then((a) => {
      return a;
    });
  };




// loader les sujet
recupSujet(4);
let aaaa = recupUtilisateur(1).then((user) => {return user;});
console.log(aaaa);
console.log(Promise.resolve(aaaa));
//let sujet2 = recupSujet2(1);
//console.log(sujet2);
//let userObj = new User(user.id, user.username, user.password, user.admin);
//let sujetObj = new Sujet(sujet[0].id, sujet[0].title, sujet[0].date, userObj);
console.log(sujet[0]);


const afficherMessagesExistants = (msgs, div) => {
    msgs.forEach(msg => {
        const encadre = document.createElement("div");
        const titreH3 = document.createElement("h3");
        const paragraphe = document.createElement("p");
        titreH3.textContent = msg.titreMessage();
        paragraphe.textContent = msg.content;
        encadre.appendChild(titreH3);
        encadre.appendChild(paragraphe);
        encadre.style.backgroundColor = "grey";
        encadre.style.padding = "3px";
        encadre.style.margin = "10px";
        div.appendChild(encadre);
    });
}

const afficherNouveauMessage = (div) => {
    const nouveauMessage = document.createElement("input");
    nouveauMessage.defaultValue="Message";
    nouveauMessage.readOnly=false;
    div.appendChild(nouveauMessage);
    const boutonValider = document.createElement("button");
    boutonValider.textContent = 'Répondre au sujet';
    boutonValider.addEventListener('click', (event) => {
        const msgAEnregister = new Message(0, nouveauMessage.textContent, 5465461661, sujetObj, userObj);
        //enregistreMessage(event, msgAEnregister);
    });
    div.appendChild(boutonValider);
}

const afficherTitres = (div) => {
    const titreH1 = document.createElement("h1");
    //titreH1.textContent = sujetObj.title;
    const titreH2 = document.createElement("h2");
    //titreH2.textContent = sujetObj.infoSujet();
    div.appendChild(titreH1);
    div.appendChild(titreH2);
}



const creationPage = () => {
    const div = document.getElementById("test");
   
    afficherTitres(div);
   
    // requete recuperer tous les message ayant pour topic_id l'id du sujet
    const msg1 = new Message(4, "nfcosfjezpof,sqmlfv,dsv", 54654651651, 2, "Steffie HU");
    const msg2 = new Message(5, "zadeosfkds, ofg, zapeazpdkzpoad, zfhiazhdahodia !!", 848544658, 2, "Quentin NGUYEN");
    const messages = [
        msg1,
        msg2
    ]

    afficherMessagesExistants(messages, div);
    afficherNouveauMessage(div);
  
   

}

creationPage();

