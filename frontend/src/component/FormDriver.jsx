import Select from "./inputs/Select";
import UniqueButton from "./Button/UniqueButton";
function FormDriver() {
  return ( 
    <>
    <div className="flex">
    <p className="font-semibold font-raleway text-[#39527B]">Vehicle</p>
    <form action="" className="flex">
    <Select/>
    <UniqueButton text='ok'/>
    </form>
   
  </div>
    </>
   );
}

export default FormDriver;