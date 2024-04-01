export const authenticateUser = async () => {
  try {
    const Admintoken = localStorage.getItem('Admintoken');
    if (!Admintoken) {
      // Si le token n'est pas présent, retourner une instance de Navigate pour effectuer la redirection
      // return <Navigate to="/S_adminLogin" />;
      console.log("accès refusée")
    }

    // Envoyer la demande avec le token
    const response = await fetch('http://localhost:3000/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Admintoken}`
      }
    });

    if (!response.ok) {
      throw new Error('Erreur lors de l\'authentification');
    }
  } catch (error) {
    console.error('Erreur lors de l\'authentification :', error);
    // Gérer l'erreur
  }
};
