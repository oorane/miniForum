const header = document.getElementById("h");

const hBoutons = [document.getElementById("hBouton1"), document.getElementById("hBouton2"), document.getElementById("hBouton3")];
let Selected = 0;

console.log(header);

hBoutons.forEach((element, index) => {

    if (index === Selected) {
        element.setAttribute("class", "headerB hSelected");
    } else {
        element.setAttribute("class", "headerB hUnselected");
    }


    element.addEventListener("click", event => {
        Selected = index;
        hBoutons.forEach((element2, index2) => {
            if (index2 === Selected) {
                element2.setAttribute("class", "headerB hSelected");
            } else {
                element2.setAttribute("class", "headerB hUnselected");
            }
        });
    });

    element.addEventListener("mouseover", event => {
        element.setAttribute("class", "headerB hHover");
    });

    element.addEventListener("mouseout", event => {
        if (index === Selected) {
            element.setAttribute("class", "headerB hSelected");
        } else {
            element.setAttribute("class", "headerB hUnselected");
        }
    });
});

montrerBoutonAccueil();
montrerBoutonMMC();
montrerBoutonSD();



function montrerBoutonAccueil() {
    hBoutons[0].textContent = "Accueil";
}

function montrerBoutonMMC() {
    hBoutons[1].textContent = "Modifier mon compte";
}

function montrerBoutonCUC() {
    hBoutons[1].textContent = "Créer un compte";
}

function montrerBoutonSD() {
    hBoutons[2].textContent = "Se déconnecter";
}

function montrerBoutonSC() {
    hBoutons[2].textContent = "Se connecter";
}