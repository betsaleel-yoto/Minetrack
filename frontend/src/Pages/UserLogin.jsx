import ConnectForm from "../component/connectForm";
import validator from 'validator';
function UserLogin() {
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
<ConnectForm button='Log in' change={textValidator}/>
    </>
   );
}

export default UserLogin;