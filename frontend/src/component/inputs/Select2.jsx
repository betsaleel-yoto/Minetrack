function Select2(props) {
  return ( 
    <>
    <div className="pt-3 pb-5">
    <label htmlFor={props.htmlFor} className="font-semibold font-raleway text-[#808080]">{props.label}</label><br />
    <select name={props.name} id="" onChange={props.change}>
      {props.options.map(shipment => (
          <option key={shipment.id} value={shipment.ShipmentTitle}>
            {shipment.ShipmentTitle}
          </option>
        ))}
    </select>
    </div>
   
    </>
   );
}

export default Select2;