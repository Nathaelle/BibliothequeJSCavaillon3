"use strict";

let livre1 = {
    reference: "rs548",
    titre: "Les Misérables",
    auteur: "Victor Hugo"
}

let livre2 = {
    reference: "nb548",
    titre: "L'Iliade et l'Odyssée",
    auteur: "Homère"
}

let livre3 = {
    reference: "ut862",
    titre: "1984",
    auteur: "George Orwell"
}

let livres = [livre1, livre2, livre3];


function mkHtml(datas) {

    let html = "<ul>";

        for(let livre of datas) {
            html += "<li>" + livre.titre + ", par " + livre.auteur + "</li>";
        }

    html += "</ul>";

    return html;

    /*
    <ul>
        <li>Les Misérables, par Victor Hugo</li>
        <li>L'Iliade et l'Odyssée, par Homère</li>
        <li>1984, par George Orwell</li>
    </ul>
    */
}

function ajoutLivre (e) {
    e.preventDefault();

    let ref = document.getElementById("ref");
    let titre = document.getElementById("titre");
    let auteur = document.getElementById("auteur");

    livres.push({
        ref: ref.value,
        titre: titre.value,
        auteur: auteur.value
    });

    console.log(livres);
}

/** LISTENERS */

document.getElementById("ajoutLivre").addEventListener("submit", ajoutLivre);