function ElementUser(props) {
  return (
    <>
    <div className="flex border-b border-[#A6A6A6]  pt-3">

  
      <div className="pl-3 pr-6 mt-1">
        <img src={props.src} alt="" className="w-[1.3rem]"/>
      </div>
      <div className="w-[100%]">
        <p className="font-bold font-raleway text-[#565656]">{props.name}</p>
        <p className="font-normal font-raleway text-[#A6A6A6] text-[13px]">{props.title}</p>
      </div>
      <div className="flex mb-11 w-44">
        <button type="button"><img src="/src/img/edit.svg" alt="" className="px-6"/></button>
        <button type="button"><img src="/src/img/Group-1.svg" alt="" /></button>
      </div>

      </div>
    </>
  );
}

export default ElementUser;
