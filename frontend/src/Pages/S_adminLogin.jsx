import { useState } from 'react';
import ConnectForm from "../component/connectForm";
import validator from 'validator';

function S_adminLogin() {


  function token() {
    const storedToken = sessionStorage.getItem('token');
    if (storedToken) {
      // Préparer les données de la requête
      const requestData = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: storedToken }) // Ajouter le token au corps de la requête
      };
  
      // Envoyer la requête à l'adresse
      fetch('http://localhost:3000/sAdmin/Login', requestData)
        .then(response => {
          if (!response.ok) {
            console.error('Erreur lors de la requête');
          }
          // Afficher une alerte lorsque le token est envoyé avec succès
          alert('Token envoyé avec succès');
          // Traiter la réponse si nécessaire
        })
        .catch(error => {
          console.error('Erreur lors de la requête :', error);
        });
    } else {
      console.error('Aucun token trouvé dans le sessionStorage');
    }
  }
  
  


  const textValidator = (e) => {
    const inputValue = e.target.value;
    if (!validator.isLength(inputValue, { min: 1 })) {
        console.log('le champ ne doit pas être vide');
    } else if (!validator.matches(inputValue, /^[^<>\s]+$/)) {
        console.log("ces caractères ne sont pas autorisés");
    } else {
        console.log('valide');
    }
  };

  return ( 
    <>
      <ConnectForm checkbox='checkbox' remember='Let go of the hand' button='Log in' change={textValidator} click={token}/>
    </>
  );
}

export default S_adminLogin;
