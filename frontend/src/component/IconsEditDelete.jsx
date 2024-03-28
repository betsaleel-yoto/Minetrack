function IconsEditDelete(props) {
  return ( 
    <>
    <div className="flex">
      <button type="button" onClick={props.onClick1}><img src="src/img/edit.svg" alt="" className="mr-4"/></button>
    <button type="button" onClick={props.onClick2}><img src="/src/img/Group-1.svg" alt="" /></button>
    </div>

    </>
   );
}

export default IconsEditDelete;