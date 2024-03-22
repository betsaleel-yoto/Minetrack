import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import ConnectForm from "../component/connectForm";
import validator from 'validator';

function S_adminLogin() {
  const [redirect, setRedirect] = useState(null);
  const [matriculationNumber, setMatriculationNumber] = useState(""); // Déclaration de l'état matriculationNumber
  const [username, setUsername] = useState(""); // Déclaration de l'état username

  const token = () => {
    const storedToken = sessionStorage.getItem('Admintoken');
    if (storedToken) {
      const requestData = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Envoyer le token, matriculationNumber et username
        body: JSON.stringify({ 
          token: storedToken,
          matriculationNumber: matriculationNumber,
          username: username
        })
      };
  
      fetch('http://localhost:3000/sAdmin/Login', requestData)
        .then(response => {
          if (!response.ok) {
            console.error('Erreur lors de la requête');
          }
          return response.json();
        })
        .then(data => {
          if (data.message === 'Oui, il existe') {
            setRedirect('/dashboard');
          } else {
            setRedirect('/CreateS_admin');
          }
        })
        .catch(error => {
          console.error('Erreur lors de la requête :', error);
        });
    } else {
      console.error('Aucun token trouvé dans le sessionStorage');
    }
  };
  

  const textValidator = (inputValueA, inputValueB) => {
    try {
      if (!validator.isLength(inputValueA, { min: 1 })) {
        console.log('le champ A ne doit pas être vide');
      } else if (!validator.matches(inputValueA, /^[^<>\s]+$/)) {
        console.log("ces caractères ne sont pas autorisés pour le champ A");
      } else if (!validator.isLength(inputValueB, { min: 1 })) {
        console.log('le champ B ne doit pas être vide');
      } else if (!validator.matches(inputValueB, /^[^<>\s]+$/)) {
        console.log("ces caractères ne sont pas autorisés pour le champ B");
      } else {
        console.log('valide');
      }
    } catch (error) {
      console.error('Une erreur est survenue lors de la validation :', error);
    }
  };

  const handleMatriculationNumberChange = (e) => {
    setMatriculationNumber(e.target.value); // Mettre à jour l'état matriculationNumber avec la valeur entrée
    textValidator(e.target.value, username); // Appel de textValidator avec la nouvelle valeur du matriculationNumber
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value); // Mettre à jour l'état username avec la valeur entrée
    textValidator(matriculationNumber, e.target.value); // Appel de textValidator avec la nouvelle valeur du username
  };

  return ( 
    <>
      {redirect && <Navigate to={redirect} />}
      <ConnectForm checkbox='checkbox' remember='Let go of the hand' button='Log in' change={handleUsernameChange} change1={handleMatriculationNumberChange} onMatriculationNumberChange={handleMatriculationNumberChange} onUsernameChange={handleUsernameChange} click={token}/>
    </>
  );
}

export default S_adminLogin;
