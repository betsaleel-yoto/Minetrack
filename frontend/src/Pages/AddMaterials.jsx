import EnteteTableau from "../component/EnteteTableau";
import validator from 'validator';
import NavBar from "../component/navBar";
import Input from "../component/inputs/input";
import Select2 from "../component/inputs/Select2";
import DoubleButton from "../component/Button/DoubleBoutton";
import SuperTitle from "../component/SuperTitle";
import IconsEditDelete from "../component/IconsEditDelete";
import LineTableu from "../component/LineTableau";
import ElementTableau1 from "../component/ElementTableau1";
import UniqueButton from "../component/Button/UniqueButton";
import { useState,useEffect } from "react";
function AddMaterials() {
const initialQte = localStorage.getItem('InitialQte');
let regex=/[0-9]/g
let valeur=initialQte.match(regex).join('')
let number= parseInt(valeur)
console.log(number)

const [shipments, setShipments] = useState([]);
const [MaterialName,setMaterialName]=useState('')
const [RelatedShipment,setRelatedShipment]=useState('')
const [InitialQte,setInitialQte]=useState('')
const [CurrentQte,setCurrentQte]=useState('')
const [Daily,setDaily]=useState('')
const [Date,setDate]=useState('')

let modification = parseInt(Daily)
const Total= number-modification
  useEffect(() => {
    fetch('http://localhost:3000/shipments/getAll')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données');
        }
        return response.json();
      })
      .then(data => {
        // Données récupérées avec succès
        setShipments(data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données :', error);
      });
  }, []);
  
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
    const matriculationNumberAdmin = localStorage.getItem('matriculationNumber');
    const requestData = {
      MaterialName: MaterialName,
      RelatedShipment: RelatedShipment,
      InitialQte: InitialQte,
      CurrentQte: CurrentQte,
      matriculationNumberSadmin: matriculationNumberAdmin
    };
  
    // Effectuer la requête POST en utilisant fetch
    fetch('http://localhost:3000/materials/Create', {
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
        // Récupérer l'ID et l'InitialQte du matériau ajouté
        const MaterialID = data.id;
        const InitialQte = data.InitialQte;
  
        // Stocker les données dans le localStorage
        localStorage.setItem('MaterialID', MaterialID);
        localStorage.setItem('InitialQte', InitialQte);
  
        console.log('Matériau ajouté');
        
        // Vous pouvez effectuer d'autres actions avec les données de la réponse si nécessaire
      })
      .catch(error => {
        // Gérer les erreurs éventuelles
        console.error('Erreur lors de la requête :', error);
      });
  };
  
  

  const sendData2 = () => {
    // Récupérer la valeur de VehicleRegistrationNumber depuis le localStorage
    const id = parseInt(localStorage.getItem('MaterialID'));
   
  
    // Vérifier si la valeur est présente dans le localStorage
    if (!id) {
      console.error('id non trouvé dans le localStorage');
      return; // Arrêter l'exécution de la fonction si la valeur n'est pas trouvée
    }
  
    const requestData = {
      CurrentQte:`${Total}`
    };
  
    // Effectuer la requête PUT en utilisant fetch
    fetch(`http://localhost:3000/materials/edit/${id}`, {
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
  

  

  const handleMaterialName = (e) => {
    setMaterialName(e.target.value); // Mettre à jour l'état matriculationNumber avec la valeur entrée
    textValidator(e.target.value, MaterialName); // Appel de textValidator avec la nouvelle valeur du matriculationNumber
  };
  
  const handleRelatedShipment = (e) => {
    setRelatedShipment(e.target.value); // Mettre à jour l'état matriculationNumber avec la valeur entrée
    textValidator(e.target.value,RelatedShipment); // Appel de textValidator avec la nouvelle valeur du matriculationNumber
  };

  const handleInitialQte = (e) => {
    setInitialQte(e.target.value); // Mettre à jour l'état matriculationNumber avec la valeur entrée
    textValidator(e.target.value,InitialQte); // Appel de textValidator avec la nouvelle valeur du matriculationNumber
  };

  const handleDaily = (e) => {
    setDaily(e.target.value); // Mettre à jour l'état matriculationNumber avec la valeur entrée
    textValidator(e.target.value,Daily); // Appel de textValidator avec la nouvelle valeur du matriculationNumber
  };

  const handleDate = (e) => {
    setDate(e.target.value); // Mettre à jour l'état matriculationNumber avec la valeur entrée
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
            <EnteteTableau text="Add materials to your shipments" />
            <form action="" className="w-[90%] m-auto h-[40rem]">
              <Input
                classes="w-[100%]"
                type="text"
                name="MaterialName"
                label="Name"
                htmlFor="name"
                change={handleMaterialName}
              />
              <Select2
                htmlFor="RelatedShipment"
                label="Select the related shipment"
                name="shipment"
                change={handleRelatedShipment}
                optionText={shipment => shipment.ShipmentTitle}
                options={shipments}
              />
              <Input
                classes="w-[100%]"
                type="text"
                name="initialQte"
                label="Choose an initial quantity"
                htmlFor="initialQuantity"
                change={handleInitialQte}
              />
              <Input
                classes="w-[100%]"
                type="date"
                name="Date"
                label="Date"
                htmlFor="date"
                change={handleDate}
              />

              <DoubleButton click={sendData}/>
            </form>
          </div>

          {/* Partie Manipulation du matériau */}

          <div className="flex w-[80%] m-auto pt-24 border-b border-[#BAB2B2] pb-5">
            {/* Partie affichage */}
            <div className="w-[40%] h-auto border rounded-lg border-[#C9C9C9] pb-3">
              {/* Entete */}
              <div className="border-b border-[#D2D2D2]">
                <div className="flex">
                  <SuperTitle text="Title of the Shipment" />
                  <IconsEditDelete />
                </div>

                <div className="flex m-5">
                  <div></div>
                  <p className="font-semibold font-raleway text-[#999EA6]">Linked to(Shipment Name)</p>
                </div>
              </div>

              <LineTableu text1='Initial Qte' text2='Current Qte' text3='Consumed today'/>
              <div className="flex">
              <ElementTableau1 text1='100' text2='80'/>
              <form action="" className="mr-[1rem]">
              <Input
                classes="w-[100%]"
                type="text"
                name="dailyConsumption"
  
                htmlFor="consumedT"
                change={handleDaily}
            
              />
          <UniqueButton text='Add' click={sendData2}/>
              </form>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddMaterials;


// quand la quantité est inférieur au 50% il faut que ce soit en rouge