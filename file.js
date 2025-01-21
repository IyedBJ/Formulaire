const form = document.querySelector('form');


form.addEventListener('submit', function (event) {
  event.preventDefault(); // Empêcher la soumission du formulaire

  // Valider le formulaire
  if (validateForm()) {
    alert('Formulaire soumis avec succès !');
    form.reset(); // Réinitialiser le formulaire
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche la soumission du formulaire

  });
});

function validateForm() {
  let isValid = true;

  //Valider le nom
  const fnameInput = document.getElementById("fname");
  if (fnameInput.value.trim() === '') {
    alert("le nom est obligatoire");
    isValid = false;
  }

  //Valider le prenom
  const lnameInput = document.getElementById("lname");
  if (lnameInput.value.trim() === '') {
    alert("le prenom est obligatoire");
    isValid = false;
  }

  //Valider le password 
  const passwordInput = document.getElementById("mdp");
  if (passwordInput.value.trim() === '') {
    alert("le mot de passe est obligatoire");
    isValid = false;
  }
  else if (passwordInput.value.trim().length < 6) {
    alert("Le mot de passe doit contenir au moins 6 caractères.");
    isValid = false;
  }

  //valider la date de naissance 
  const birthdayInput = document.querySelector('input[type="date"]');
  if (birthdayInput.value === '') {
    alert("La date de naissance est obligatoire.");
    isValid = false;
  }
  //valider l'mail
  const emailInput = document.getElementById("email");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailInput.value.trim() === '') {
    alert("le champ email est obligatoire ");
    isValid = false;
  }
  else if(!emailPattern.test(emailInput.value.trim())){
    alert("veuillez entrer un email valide.");
    isValid = false;
  }
  //valider le pays
  const paysSelect = document.getElementById('pays');
  if (paysSelect.value === '') {
    alert('Veuillez sélectionner un pays.');
    isValid = false;
  }
  //Valider les conditions
  const conditionsCheckbox = document.querySelector('input[type="checkbox"]');
  if (!conditionsCheckbox.checked) {
    alert('Vous devez accepter les conditions.');
    isValid = false;
  }

  //valider le genre 
  const genreInputs = document.querySelectorAll('input[name="genre"]');
  let genreSelected = false;
  genreInputs.forEach(input => {
    if (input.checked) {
      genreSelected = true;
    }
  });
  if (!genreSelected) {
    showError(document.querySelector('.genre'), "Veuillez sélectionner un genre.");
    isValid = false;
  }

  return isValid
}
