// MENU MOBILE


// INFOLETTRE - VALIDATION DU FORMULAIRE
function validateForm() {
    // Récupérer la valeur du champ de courriel
    var email = document.getElementById('courriel').value;

    // Vérifier si le champ de courriel est vide ou ne contient pas un format valide
    if (email.trim() === '' || !validateEmail(email)) {
        // Afficher un message d'erreur ou effectuer une autre action appropriée
        alert('Veuillez entrer une adresse e-mail valide.');
        return false; // Empêcher l'envoi du formulaire
    }

    // Si la validation réussit, le formulaire peut être soumis
    return true;
}

// Fonction pour valider le format de l'adresse e-mail
function validateEmail(email) {
    // Expression régulière pour vérifier le format de l'adresse e-mail
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


