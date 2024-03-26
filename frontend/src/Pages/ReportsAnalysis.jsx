import EnteteRapports from "../component/EnTeteRapports";
import NormalTitle from "../component/NormalTitle";
import SubTitleReports from "../component/SubTitleReports";
import SuperLineBlue from "../component/SuperlineBlue";
import { useState,useEffect } from "react";

const [Alldata,setAllData]=useState([])

function ReportsAnalysis() {
  return (
    <>
    <div className="w-[100%] flex">
<div className="w-[100%] h-auto pt-6">
<EnteteRapports text='Logistics Performance Report'/>
<SubTitleReports/>
<SuperLineBlue text1='Indicator' text4='Value'/>
<NormalTitle text1='Rate of on-time delivery' text4='90%'/>
<NormalTitle text1='Inventory turnover rate' text4='5'/>
<NormalTitle text1='Shipping costs' text4='1 500 000 $'/>
</div>

    </div>
    
    </>
   );
}

export default ReportsAnalysis;