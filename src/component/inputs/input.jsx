function Input(props) {
  const classNames=`p-4 border-2 rounded ${props.classes}`
  return ( 
    <>
    <input type={props.type} name={props.name} id="" className={classNames}/>
    </>
   );
}

export default Input;