// Déclarations des variables de récupération par ID
var ajouter = document.getElementById('add');
var placeajout = document.getElementById('listcontainer');
var entre = document.getElementById('entre');

// Fonction d'ajout de la tâche
ajouter.onclick = function() {
    // Si la valeur de l'input n'est pas vide
    if(entre.value !== "") {
        // On crée un paragraphe
        var para = document.createElement('p');
        
        // On donne le contenu de l'input au paragraphe
        para.innerHTML = entre.value;

        // On stylise le paragraphe en ajoutant une classe
        para.classList.add('para_style');

        // On ajoute le paragraphe à la div
        placeajout.appendChild(para);

        // On vide l'input
        entre.value = "";

        // Ajouter un événement lorsqu'on clique sur le paragraphe
        para.addEventListener('click', function() {
            // On attribue une nouvelle classe pour changer l'apparence de la tâche
            para.classList.add('para-click');
        });

        // Ajouter un événement pour supprimer la tâche lors d'un double-clic
        para.addEventListener('dblclick', function() {
            placeajout.removeChild(para);
        });
    }
};
