export const authenticateUser = async () => {
  const Admintoken=localStorage.setItem('Admintoken')
  try {
    // Effectuer une requête au serveur pour obtenir le token d'authentification
    const token = Admintoken; 
    // Remplacez cela par la méthode appropriée pour obtenir le token (par exemple, à partir d'un cookie ou d'un autre moyen)
    // Si le token n'est pas présent, gérer l'erreur ou demander à l'utilisateur de se connecter

    // Envoyer le token avec la demande
    const response = await fetch('http://localhost:3000/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
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