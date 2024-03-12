import EnteteTableau from "../component/EnteteTableau";
import validator from 'validator';
import NavBar from "../component/navBar";
import Input from "../component/inputs/input";
import Select from "../component/inputs/Select";
import DoubleButton from "../component/Button/DoubleBoutton";
import SuperTitle from "../component/SuperTitle";
import IconsEditDelete from "../component/IconsEditDelete";
import LineTableu from "../component/LineTableau";
import ElementTableau1 from "../component/ElementTableau1";
import UniqueButton from "../component/Button/UniqueButton";
import { useState } from "react";
function AddMaterials() {
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
            <EnteteTableau text="Add materials to your shipments" />
            <form action="" className="w-[90%] m-auto h-[40rem]">
              <Input
                classes="w-[100%]"
                type="text"
                name="MaterialName"
                label="Name"
                htmlFor="name"
                change={textValidator}
              />
              <Select
                htmlFor="shipment"
                label="Select the related shipment"
                name="shipment"
              />
              <Input
                classes="w-[100%]"
                type="text"
                name="initialQte"
                label="Choose an initial quantity"
                htmlFor="initialQuantity"
                change={textValidator}
              />
              <Input
                classes="w-[100%]"
                type="date"
                name="date"
                label="Date"
                htmlFor="date"
                change={dateValidator}
              />

              <DoubleButton/>
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
            
              />
          <UniqueButton text='Add'/>
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