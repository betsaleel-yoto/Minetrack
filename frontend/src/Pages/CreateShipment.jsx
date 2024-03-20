import EnteteTableau from "../component/EnteteTableau";
import validator from 'validator';
import { useState,useEffect } from "react";
import NavBar from "../component/navBar";
import Input from "../component/inputs/input";
import DoubleButton from "../component/Button/DoubleBoutton";
import SuperTitle from "../component/SuperTitle";
import IconsEditDelete from "../component/IconsEditDelete";
import ProfilShipment from "../component/ProfilShipment";
import FormDriver from "../component/FormDriver";
import FormTask from "../component/FormTask";
function CreateShipment() {
  const [ShipmentTitle, setShipmentTitle] = useState(""); // Déclaration de l'état matriculationNumber
  const [ShipmentDescription, setShipmentDescription] = useState("")
  const [BeginDate, setBeginDate] = useState(""); // Déclaration de l'état matriculationNumber
  const [EndDate, setEndDate] = useState("")

  

  
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

  const sendData = () => {
    const matriculationNumber = localStorage.getItem('matriculationNumber');
    const requestData = {
      ShipmentTitle:ShipmentTitle,
      ShipmentDescription:ShipmentDescription,
      BeginDate:BeginDate,
      EndDate:EndDate,
      matriculationNumberSadmin:matriculationNumber
      
    };

    // Effectuer la requête POST en utilisant fetch
    fetch('http://localhost:3000/shipments/Add', {
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
        console.log('expédition lancée');
        // Si la réponse est ok, retournez les données en JSON
        return response.json();
      })
      .catch(error => {
        // Gérer les erreurs éventuelles
        console.error('Erreur lors de la requête :', error);
      });
  };
  

  const handleShipmentTitle = (e) => {
    setShipmentTitle(e.target.value); // Mettre à jour l'état matriculationNumber avec la valeur entrée
    textValidator(e.target.value, ShipmentTitle); // Appel de textValidator avec la nouvelle valeur du matriculationNumber
  };

  const handleShipmentDescription = (e) => {
    setShipmentDescription(e.target.value); // Mettre à jour l'état matriculationNumber avec la valeur entrée
    textValidator(e.target.value, ShipmentDescription); // Appel de textValidator avec la nouvelle valeur du matriculationNumber
  };
  
  const handleBeginDate = (e) => {
    setBeginDate(e.target.value); // Mettre à jour l'état matriculationNumber avec la valeur entrée
    dateValidator(e.target.value); // Appel de textValidator avec la nouvelle valeur du matriculationNumber
  };

  const handleEndDate = (e) => {
    setEndDate(e.target.value); // Mettre à jour l'état matriculationNumber avec la valeur entrée
    dateValidator(e.target.value); // Appel de textValidator avec la nouvelle valeur du matriculationNumber
  };
  
  return ( 
    <>
     <div className="flex w-[100%]">


        <NavBar />


        {/* div supreme */}
        <div className="flex-col w-[80%]">



          {/* Partie Formulaire */}
      <div className="w-[80%] m-auto border border-[#D0D0D0] rounded-lg mt-6">
        <EnteteTableau text='Create a Shipment'/>
        <form action="" className="w-[90%] m-auto h-[40rem]">
        <Input
                  classes="w-[100%]"
                  type="text"
                  name="ShipmentTitle"
                  label="Shipment Title"
                  htmlFor="ShipmentTitle"
                  change={handleShipmentTitle}
                />
                <Input
                  classes="w-[100%]"
                  type="text"
                  name="ShipmentDescription"
                  label="Description"
                  htmlFor="Description"
                  change={handleShipmentDescription}
                />
                <Input
                  classes="w-[100%]"
                  type="date"
                  name="BeginDate"
                  label="Begin at"
                  htmlFor="Begin"
                  change={handleBeginDate}
                />
                 <Input
                  classes="w-[100%]"
                  type="date"
                  name="EndDate"
                  label="End"
                  htmlFor="End"
                  change={handleEndDate}
                />

                <DoubleButton click={sendData}/>
        </form>
        
      </div>
        
        {/* Partie Manipulation de l'expédition */}

        <div className="flex w-[80%] m-auto pt-24 border-b border-[#BAB2B2] pb-5">

          {/* Partie affichage */}
<div className="w-[40%] h-auto border rounded-lg border-[#C9C9C9]">
  {/* Entete */}
  <div className="border-b border-[#D2D2D2]">
<div className="flex">
  <SuperTitle text='Title of the Shipment'/>
  <IconsEditDelete/>
</div>

<div className="flex m-5">
  {/* info */}
  
    <button type="button" className="flex"><img src="/src/img/info.svg" alt="" />
    
    <p className="font-semibold font-raleway text-[#6E6E6E] pl-2">Info</p>
    </button>

  {/* Add Participants */}

  <button type="button" className="flex pl-[3rem]">
    <img src="/src/img/Group (1).svg" alt="" />
    <p className="font-semibold font-raleway text-[#6E6E6E] pl-2">Add Participants</p>
  </button>
</div>
  </div>
  <div className="p-5">
  <ProfilShipment src='/src/img/Ellipse 13.svg' name='Ken Full' title='Driver'/>
  {/* formulaire chauffeur */}
<FormDriver/>
  <ProfilShipment src='/src/img/Ellipse 8.svg' name='Rosen Yot' title='Human Resources Director'/>
  <ProfilShipment src='/src/img/Ellipse 8.svg' name='Rosen Yot' title='Human Resources Director'/>
  <ProfilShipment src='/src/img/Ellipse 13.svg' name='Kev Boys' title='Driver'/>
  <FormDriver/>
</div>
  
</div>

{/* Partie to do list */}
<div className="w-[40%] h-auto border rounded-lg border-[#C9C9C9] ml-[10rem]">
  <EnteteTableau text='To Do list'/>
  <form action="" className="w-[90%] m-auto h-[12rem] border-b border-[#D2D2D2]">
  <Input
                  classes="w-[100%]"
                  type="text"
                  name="task"
                  label="add task to the shipment"
                  htmlFor="task"
                  change={textValidator}
                />
                <DoubleButton/>
</form>


{/* formulaire de soumission des taches */}

<FormTask text='Monitor environmental impact and implement mitigation measures.'/>
<FormTask text='Set up and maintain equipment for mineral extraction.'/>
<FormTask text='Set up and maintain equipment for mineral extraction.'/>
</div>

        </div>



        </div>


      </div>
    </>
   );
}

export default CreateShipment;