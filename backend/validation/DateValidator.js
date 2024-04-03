const validator=require('validator')

const dateValidator = (inputValue) => {
  try {
    const regexDate = /^\d{4}-\d{2}-\d{2}$/;
    if (regexDate.test(inputValue)) {
     console.log("La date est valide.");
    } else {
      console.log("La date n'est pas valide.");
    }
  } catch (error) {
    console.error('Une erreur est survenue lors de la validation de la date :', error);
    console.log('Une erreur est survenue lors de la validation de la date');
  }
};