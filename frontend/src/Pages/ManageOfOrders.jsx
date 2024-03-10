import EnteteRapports from "../component/EnTeteRapports";
import NormalTitle from "../component/NormalTitle";
import SuperLineBlue from "../component/SuperlineBlue";
function ManageOfOrders() {
  return ( 
    <>
    <div className="h-[20%] bg-[#39527B] flex">
    <h1 className="font-bold font-raleway text-[2rem] text-white text-center relative left-[48rem]">Manage your orders</h1>
    <img src="/src/img/Vector.svg" alt="" className="ml-[85rem] border-l border-[white] pl-20"/>
    </div>

    <div className="w-[100%] h-auto pt-6">
<EnteteRapports text='List of orders'/>
<SuperLineBlue text1='Order ID' text2='Date' text3='Product' text4='Quantity'/>
<NormalTitle text1='1' text2='2024-02-27' text3='Product A' text4='90'/>
<NormalTitle text1='2'text2='2024-02-27' text3='Product B' text4='5'/>
<NormalTitle text1='3' text2='2024-02-27' text3='Product C' text4='1 500 000 $'/>
</div>
    </>
   );
}

export default ManageOfOrders;