import EnteteTableau from "../component/EnteteTableau";
import NavBar from "../component/navBar";
import Input from "../component/inputs/input";
import DoubleButton from "../component/Button/DoubleBoutton";
import LineTableu from "../component/LineTableau";
import SuperTitle from "../component/SuperTitle";
import IconsEditDelete from "../component/IconsEditDelete";
import ElementTableau1 from "../component/ElementTableau1";
import UniqueButton from "../component/Button/UniqueButton";
import Select from "../component/inputs/Select";
function SupplierManage() {
  return ( 
    <>
    <div className="flex w-[100%]">
        <NavBar />

        {/* div supreme */}
        <div className="flex-col w-[80%]">
          {/* Partie Formulaire */}
          <div className="w-[80%] m-auto border border-[#D0D0D0] rounded-lg mt-6">
            <EnteteTableau text="Place an order" />
            <form action="" className="w-[90%] m-auto h-[40rem]">
              <Input
                classes="w-[100%]"
                type="text"
                name="Materialname"
                label="Material Name"
                htmlFor="Materialname"
              />


<Input
                classes="w-[100%]"
                type="date"
                name="DateOfOrder"
                label="Date of order"
                htmlFor="DateOfOrder"
              />

              <Input
                classes="w-[100%]"
                type="text"
                name="Quantity"
                label="Quantity"
                htmlFor="Quantity"
              />
<Input
                classes="w-[100%]"
                type="date"
                name="DeliveryDate"
                label="Determine a delivery date"
                htmlFor="DeliveryDate"
              />

              <DoubleButton />
            </form>
          </div>

          {/* Partie Manipulation de l'Etat des Vehicules */}

          <div className="w-[80%] m-auto mt-24 border border-[#C1C1C1] rounded-lg">
           <EnteteTableau text='List of orders'/>
           <div className="flex">
           <LineTableu text1='Date' text2='Made by' text3='Material Name'/>
           <LineTableu text3='Delivery Date'/>
           <LineTableu text3='Quantity'/>
           </div>
           <div className="flex">
           <ElementTableau1 text1='12/12/2020' text2='Betsaleel yoto' text3='Material Name' cl='text-[#6E6E6E]'/>
           <ElementTableau1 text3='12/12/2020' cl='text-[#6E6E6E]'/>
           <ElementTableau1 text3='100'  cl='text-[#6E6E6E]'/>
           </div>
           
           <div className="flex">
           <ElementTableau1 text1='12/12/2020' text2='Betsaleel yoto' text3='Material Name' cl='text-[#6E6E6E]'/>
           <ElementTableau1 text3='12/12/2020' cl='text-[#6E6E6E]'/>
           <ElementTableau1 text3='100'  cl='text-[#6E6E6E]'/>
           </div>
          
          
          </div>
        </div>
      </div>
    </>
   );
}

export default SupplierManage;