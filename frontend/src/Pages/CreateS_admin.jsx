import { useState } from 'react';
import ConnectForm from '../component/connectForm';
import validator from 'validator';
import { Link } from 'react-router-dom';

function CreateS_admin() {
  const [matriculationNumber, setMatriculationNumber] = useState(""); // Déclaration de l'état matriculationNumber
  const [username, setUsername] = useState(""); // Déclaration de l'état username

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

  const sendData = () => {
    const requestData = {
      matriculationNumber: matriculationNumber,
      username: username
    };

    // Effectuer la requête POST en utilisant fetch
    fetch('http://localhost:3000/sAdmin/Signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    })
      .then(response => {
        // Vérifiez si la réponse est ok
        if (!response.ok) {
          throw new Error('Erreur lors de la requête');
        }
        console.log('salut');
        // Si la réponse est ok, retournez les données en JSON
        return response.json();
      })
      .then(data => {
        // Gérer la réponse du serveur
        console.log('Réponse du serveur :', data);
        // Stocker le token dans sessionStorage
        if(data.token) {
          sessionStorage.setItem('token', data.token);
        }
        if (data.data && data.data.matriculationNumber) {
          const matriculationNumberValue = data.data.matriculationNumber;
          localStorage.setItem('matriculationNumber', matriculationNumberValue);
          const matriculationNumber = localStorage.getItem('matriculationNumber');
          console.log('Matriculation Number:', matriculationNumber);
      }
      
      })
      .catch(error => {
        // Gérer les erreurs éventuelles
        console.error('Erreur lors de la requête :', error);
      });
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
      <ConnectForm h1="Create the S.Administrator" button='Sign up' change={handleUsernameChange} change1={handleMatriculationNumberChange} click={sendData} onMatriculationNumberChange={handleMatriculationNumberChange} onUsernameChange={handleUsernameChange} />
    </>
  );
}

export default CreateS_admin;
