import EnteteTableau from "../component/EnteteTableau";
import validator from 'validator';
import NavBar from "../component/navBar";
import Input from "../component/inputs/input";
import DoubleButton from "../component/Button/DoubleBoutton";
import SuperTitle from "../component/SuperTitle";
import IconsEditDelete from "../component/IconsEditDelete";
import ProfilShipment from "../component/ProfilShipment";
import FormDriver from "../component/FormDriver";
import FormTask from "../component/FormTask";
function CreateShipment() {
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

const dateValidator = (e) => {
  const inputValue = e.target.value;
  const regexDate = /^\d{4}-\d{2}-\d{2}$/;
  if (regexDate.test(inputValue)) {
      console.log("La date est valide.");
  } else {
      console.log("La date n'est pas valide.");
  }
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
                  change={textValidator}
                />
                <Input
                  classes="w-[100%]"
                  type="text"
                  name="Description"
                  label="Description"
                  htmlFor="Description"
                  change={textValidator}
                />
                <Input
                  classes="w-[100%]"
                  type="date"
                  name="Begin"
                  label="Begin at"
                  htmlFor="Begin"
                  change={dateValidator}
                />
                 <Input
                  classes="w-[100%]"
                  type="date"
                  name="End"
                  label="End"
                  htmlFor="End"
                  change={dateValidator}
                />

                <DoubleButton/>
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