import EnteteTableau from "../component/EnteteTableau";
import { useState,useEffect } from "react";
import validator from 'validator';
import NavBar from "../component/navBar";
import Input from "../component/inputs/input";
import Select2 from "../component/inputs/Select2";
import DoubleButton from "../component/Button/DoubleBoutton";
import SuperTitle from "../component/SuperTitle";
import IconsEditDelete from "../component/IconsEditDelete";
function RoutePlanning() {
  const [shipments, setShipments] = useState([]);
  const [RouteName, setRouteName] = useState('');
  const [RouteDescription, setRouteDescription] = useState('');
  const [RelatedMaterial, setRelatedMaterial] = useState('');
  useEffect(() => {
    fetch('http://localhost:3000/orders/getAll')
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


  const sendData = () => {
    const matriculationNumberAdmin = localStorage.getItem('matriculationNumber');
    const requestData = {
      RouteName:RouteName,
      RouteDescription:RouteDescription,
      RelatedMaterial:RelatedMaterial,
      matriculationNumberSadmin: matriculationNumberAdmin
    };
  
    // Effectuer la requête POST en utilisant fetch
    fetch('http://localhost:3000/routePlanning/Add', {
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
        const RouteId = data.id;
  
        // Stocker les données dans le localStorage
        localStorage.setItem('MaterialID', RouteId);
        console.log('Itineraire ajouté');
        
        // Vous pouvez effectuer d'autres actions avec les données de la réponse si nécessaire
      })
      .catch(error => {
        // Gérer les erreurs éventuelles
        console.error('Erreur lors de la requête :', error);
      });
  };

  const handleRouteName = (e) => {
    setRouteName(e.target.value); // Mettre à jour l'état matriculationNumber avec la valeur entrée
    textValidator(e.target.value, RouteName); // Appel de textValidator avec la nouvelle valeur du matriculationNumber
  };
  
  const handleRouteDescription = (e) => {
    setRouteDescription(e.target.value); // Mettre à jour l'état matriculationNumber avec la valeur entrée
    textValidator(e.target.value, RouteDescription); // Appel de textValidator avec la nouvelle valeur du matriculationNumber
  };

  const handleRelatedMaterial = (e) => {
    setRelatedMaterial(e.target.value); // Mettre à jour l'état matriculationNumber avec la valeur entrée
    textValidator(e.target.value,RelatedMaterial); // Appel de textValidator avec la nouvelle valeur du matriculationNumber
  };

 
  return ( 
    <>
     <div className="flex w-[100%]">
        <NavBar />

        {/* div supreme */}
        <div className="flex-col w-[80%]">
          {/* Partie Formulaire */}
          <div className="w-[80%] m-auto border border-[#D0D0D0] rounded-lg mt-6">
            <EnteteTableau text="Select the best route for the delivery of your materials" />
            <form action="" className="w-[90%] m-auto h-[40rem]">
              <Input
                classes="w-[100%]"
                type="text"
                name="RouteName"
                label="Route Name"
                htmlFor="Routename"
                change={handleRouteName}
              />
        
              <Input
                classes="w-[100%]"
                type="text"
                name="RouteDescription"
                label="Describe your route"
                htmlFor="RouteDescription"
                change={handleRouteDescription}
              />
              <Select2
                htmlFor="material"
                label="Select Order"
                name="RelatedMaterial"
                optionText={shipment => shipment.MaterialName}
                options={shipments}
                change={handleRelatedMaterial}
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
                  <SuperTitle text="Route Name" />
                  <IconsEditDelete />
                </div>

                <div className="flex m-5">
                  <div></div>
                  <p className="font-semibold font-raleway text-[#999EA6]">Linked to(Material Name)</p>
                </div>
              </div>
              <p className="font-semibold font-raleway text-[#999EA6] pb-24 pt-2 pl-3">Description of the route:</p>
             
             
            </div>
          </div>
        </div>
      </div>
    </>
   );
}

export default RoutePlanning;