import EnteteTableau from "../component/EnteteTableau";
import NavBar from "../component/navBar";
import Input from "../component/inputs/input";
import Select from "../component/inputs/Select";
import DoubleButton from "../component/Button/DoubleBoutton";
import SuperTitle from "../component/SuperTitle";
import IconsEditDelete from "../component/IconsEditDelete";
import LineTableu from "../component/LineTableau";
import ElementTableau1 from "../component/ElementTableau1";
import UniqueButton from "../component/Button/UniqueButton";
function RoutePlanning() {
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
                name="Routename"
                label="Route Name"
                htmlFor="Routename"
              />
        
              <Input
                classes="w-[100%]"
                type="text"
                name="RouteDescription"
                label="Describe your route"
                htmlFor="RouteDescription"
              />
              <Select
                htmlFor="material"
                label="Select the material"
                name="material"
              />
             
              <DoubleButton />
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