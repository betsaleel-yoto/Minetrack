import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import ConnectForm from "../component/connectForm";
import validator from 'validator';

function S_adminLogin() {
  const [redirect, setRedirect] = useState(null);

  const token = () => {
    const storedToken = sessionStorage.getItem('Admintoken');
    if (storedToken) {
      const requestData = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: storedToken })
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
      {redirect && <Navigate to={redirect} />}
      <ConnectForm checkbox='checkbox' remember='Let go of the hand' button='Log in' change={textValidator} click={token}/>
    </>
  );
}

export default S_adminLogin;
