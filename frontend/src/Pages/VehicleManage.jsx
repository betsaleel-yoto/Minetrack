import EnteteTableau from "../component/EnteteTableau";
import validator from 'validator';
import { useState } from "react";
import NavBar from "../component/navBar";
import Input from "../component/inputs/input";
import DoubleButton from "../component/Button/DoubleBoutton";
import LineTableu from "../component/LineTableau";
import SuperTitle from "../component/SuperTitle";
import IconsEditDelete from "../component/IconsEditDelete";
import ElementTableau1 from "../component/ElementTableau1";
import UniqueButton from "../component/Button/UniqueButton";
import Select from "../component/inputs/Select";
function VehicleManage() {
const [Vehiclename,setVehiclename]=useState('')
const [VehicleRegistrationNumber,setVehicleRegistrationNumber]=useState('')
const [StartOfUse,setStartOfUse]=useState('')
const [VehicleCondition,setVehicleCondition]=useState('')
const [MaintenanceDate,setMaintenanceDate]=useState('')

  

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
    const matriculationNumberAdmin = localStorage.getItem('matriculationNumber');
    const requestData = {
      VehicleRegistrationNumber: VehicleRegistrationNumber,
      VehicleName: Vehiclename,
      StartOfUse: StartOfUse,
      matriculationNumberSadmin: matriculationNumberAdmin
    };
  
    // Effectuer la requête POST en utilisant fetch
    fetch('http://localhost:3000/vehicle/Add', {
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
        // Si la réponse est ok, retournez les données en JSON
        return response.json();
      })
      .then(data => {
        
        const vehicleRegistrationNumber = data.VehicleRegistrationNumber;
        
        localStorage.setItem('vehicleRegistrationNumber', vehicleRegistrationNumber);
        
        console.log('Véhicule ajouté');
        
        // Vous pouvez effectuer d'autres actions avec les données de la réponse si nécessaire
      })
      .catch(error => {
        // Gérer les erreurs éventuelles
        console.error('Erreur lors de la requête :', error);
      });
  };
  

  const sendData2 = () => {
    // Récupérer la valeur de VehicleRegistrationNumber depuis le localStorage
    const vehicleRegistrationNumber = localStorage.getItem('vehicleRegistrationNumber');
  
    // Vérifier si la valeur est présente dans le localStorage
    if (!vehicleRegistrationNumber) {
      console.error('VehicleRegistrationNumber non trouvé dans le localStorage');
      return; // Arrêter l'exécution de la fonction si la valeur n'est pas trouvée
    }
  
    const requestData = {
      VehicleCondition: VehicleCondition,
      MaintenanceDate: MaintenanceDate
    };
  
    // Effectuer la requête PUT en utilisant fetch
    fetch(`http://localhost:3000/vehicle/edit/${vehicleRegistrationNumber}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    })
      .then(response => {
        // Vérifier si la réponse est ok
        if (!response.ok) {
          throw new Error('Erreur lors de la requête');
        }
        console.log('mis à jour');
        // Si la réponse est ok, retournez les données en JSON
        return response.json();
      })
      .catch(error => {
        // Gérer les erreurs éventuelles
        console.error('Erreur lors de la requête :', error);
      });
  };
  
  
  
  const handleVehicleName = (e) => {
    setVehiclename(e.target.value); // Mettre à jour l'état matriculationNumber avec la valeur entrée
    textValidator(e.target.value, Vehiclename); // Appel de textValidator avec la nouvelle valeur du matriculationNumber
  };

  const handleVehicleRegistrationNumber = (e) => {
    setVehicleRegistrationNumber(e.target.value); // Mettre à jour l'état matriculationNumber avec la valeur entrée
    textValidator(e.target.value, VehicleRegistrationNumber); // Appel de textValidator avec la nouvelle valeur du matriculationNumber
  };

  const handleStartOfUse = (e) => {
    setStartOfUse(e.target.value); // Mettre à jour l'état matriculationNumber avec la valeur entrée
    dateValidator(e.target.value); // Appel de textValidator avec la nouvelle valeur du matriculationNumber
  };


  const handleVehicleCondition = (e) => {
    setVehicleCondition(e.target.value); // Mettre à jour l'état matriculationNumber avec la valeur entrée
    textValidator(e.target.value,VehicleCondition); // Appel de textValidator avec la nouvelle valeur du matriculationNumber
  };

  const handleMaintenanceDate = (e) => {
    setMaintenanceDate(e.target.value); // Mettre à jour l'état matriculationNumber avec la valeur entrée
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
            <EnteteTableau text="Add Vehicle" />
            <form action="" className="w-[90%] m-auto h-[40rem]">
              <Input
                classes="w-[100%]"
                type="text"
                name="VehicleName"
                label="Vehicle Name"
                htmlFor="Vehiclename"
                change={handleVehicleName}
              />

              <Input
                classes="w-[100%]"
                type="text"
                name="VehicleRegistrationNumber"
                label="Vehicle registration number"
                htmlFor="RegistrationNumber"
                change={handleVehicleRegistrationNumber}
              />

              <Input
                classes="w-[100%]"
                type="date"
                name="StartOfUse"
                label="Start of use"
                htmlFor="StartOfUse"
                change={handleStartOfUse}
              />

              <DoubleButton click={sendData}/>
            </form>
          </div>

          {/* Partie Manipulation de l'Etat des Vehicules */}

          <div className="flex w-[80%] m-auto pt-24 border-b border-[#BAB2B2] pb-5">
            <div className="w-[100%] h-auto border rounded-lg border-[#C9C9C9] pb-3">
              {/* Entete */}
              <div className="border-b border-[#D2D2D2]">
                <div className="flex">
                  <SuperTitle text="Title of the Shipment" />
                  <IconsEditDelete />
                </div>
              </div>
              <div className="flex">
                <LineTableu text1="Vehicle" />
                <LineTableu text1="Start of use"/>
                <LineTableu text1="Vehicle Condition" />
                <LineTableu text1="Maintenance date" />
                <LineTableu text1="Next maintenance" />
              </div>
              <div className="flex">
              <ElementTableau1 text1='Truck'/> 
              <ElementTableau1 text1='12/12/2020'/> 
              <div className="relative right-[4rem] top-[1rem]">
              <Select htmlFor='VehicleCondition' name='VehicleCondition' option1='Good' option2='Bad' change={handleVehicleCondition}/>
              </div>
             
              <ElementTableau1 text1='12/12/2020'/> 
              <div className="relative right-[5rem]">
              <Input
                classes="w-[100%]"
                type="date"
                name="MaintenanceDate"
                htmlFor="NextMaintenance"
                change={handleMaintenanceDate}
              />
              <UniqueButton text='Add' click={sendData2}/>
              </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VehicleManage;
