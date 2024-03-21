import React, { useState } from "react";

function FormTask(props) {
  const [isChecked, setIsChecked] = useState(props.checked);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    props.change(event); // Appel de la fonction de gestion de la case à cocher du composant parent
  };

  return (
    <>
      <form action="" method="POST" className="pt-4 pl-5">
        <input
          type="checkbox"
          name="taskFinished"
          checked={isChecked}
          className="font-semibold font-raleway"
          onChange={handleCheckboxChange}
        />{" "}
        <label
          htmlFor="checkbox"
          className="text-[#808080]  font-raleway font-semibold"
        >
          {props.text}
        </label>
      </form>
    </>
  );
}

export default FormTask;
