function Select(props) {
  return ( 
    <>
    <div className="pt-3 pb-5">
    <label htmlFor={props.htmlFor} className="font-semibold font-raleway text-[#808080]">{props.label}</label><br />
    <select name={props.name} id="">
      <option value="option1">option1</option>
      <option value="option2">option2</option>
      <option value="option3">option3</option>
    </select>
    </div>
   
    </>
   );
}

export default Select;