const validator=require('validator')

const textValidator = (inputValueA, inputValueB) => {
  try {
    if (!validator.isLength(inputValueA, { min: 1 })) {
      console.log('le champ A ne doit pas être vide');
    } else if (!validator.matches(inputValueA, /^[^<>]+$/)) {
      console.log("ces caractères ne sont pas autorisés pour le champ A");
    } else if (!validator.isLength(inputValueB, { min: 1 })) {
      console.log('le champ B ne doit pas être vide');
    } else if (!validator.matches(inputValueB, /^[^<>]+$/)) {
      console.log("ces caractères ne sont pas autorisés pour le champ B");
    } else {
      console.log('valide');
    }
  } catch (error) {
    console.error('Une erreur est survenue lors de la validation :', error);
  }
};

module.exports={textValidator}