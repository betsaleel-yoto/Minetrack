import EnteteTableau from "../component/EnteteTableau";
import NavBar from "../component/navBar";
import Input from "../component/inputs/input";
import DoubleButton from "../component/Button/DoubleBoutton";
import LineTableu from "../component/LineTableau";
import SuperTitle from "../component/SuperTitle";
import IconsEditDelete from "../component/IconsEditDelete";
import ElementTableau1 from "../component/ElementTableau1";
import UniqueButton from "../component/Button/UniqueButton";
function VehicleManage() {
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
                name="Vehiclename"
                label="Vehicle Name"
                htmlFor="Vehiclename"
              />

              <Input
                classes="w-[100%]"
                type="text"
                name="RegistrationNumber"
                label="Vehicle registration number"
                htmlFor="RegistrationNumber"
              />

              <Input
                classes="w-[100%]"
                type="date"
                name="StartOfUse"
                label="Start of use"
                htmlFor="StartOfUse"
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
                <LineTableu text1="Vehicle" text2="Start of use" />
                <LineTableu text1="Maintenance date" text2="Next maintenance" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VehicleManage;
