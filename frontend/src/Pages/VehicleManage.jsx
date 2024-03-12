import EnteteTableau from "../component/EnteteTableau";
import validator from 'validator';
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
            <EnteteTableau text="Add Vehicle" />
            <form action="" className="w-[90%] m-auto h-[40rem]">
              <Input
                classes="w-[100%]"
                type="text"
                name="VehicleName"
                label="Vehicle Name"
                htmlFor="Vehiclename"
                change={textValidator}
              />

              <Input
                classes="w-[100%]"
                type="text"
                name="VehicleRegistrationNumber"
                label="Vehicle registration number"
                htmlFor="RegistrationNumber"
                change={textValidator}
              />

              <Input
                classes="w-[100%]"
                type="date"
                name="StartOfUse"
                label="Start of use"
                htmlFor="StartOfUse"
                change={dateValidator}
              />

              <DoubleButton />
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
              <div className="relative right-[7.5rem] top-[1rem]">
              <Select htmlFor='VehicleCondition' name='VehicleCondition'/>
              </div>
             
              <ElementTableau1 text1='12/12/2020'/> 
              <div className="relative right-[5rem]">
              <Input
                classes="w-[100%]"
                type="date"
                name="MaintenanceDate"
                htmlFor="NextMaintenance"
                change={dateValidator}
              />
              <UniqueButton text='Add'/>
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
