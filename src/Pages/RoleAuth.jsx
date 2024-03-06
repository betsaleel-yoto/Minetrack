function RoleAuth() {
  return ( 
    <>
    <div className="relative h-screen bg-center bg-cover"
      style={{
        backgroundImage:
          "url('./src/img/gros-plan-excavatrice-chantier 1.jpg')",
      }}>
  <div className="absolute inset-0 bg-black opacity-40"></div>
  <div className="bg-white w-[50rem] h-[25rem] ml-[30rem] relative top-[15rem] p-8 rounded-md shadow-2xl">
    <h1 className="font-raleway text-[#545454] font-bold text-[2rem] text-center">Mining Logistics Management</h1>
    <p className="text-center font-raleway text-[#565656] pt-16 text-[20px]">Welcome to our logistics management plateform</p><br />
    <p className="text-center font-raleway text-[#565656] text-[20px]">Please select your role:</p>
    <button type="submit" className="ml-[10rem] bg-[#4886FF] text-white w-32 h-10 rounded-[8px] hover:bg-[#39527B]  font-raleway font-semibold mt-16">S.Admin</button>
    <button type="submit" className="ml-[10px] bg-[#4886FF] text-white w-32 h-10 rounded-[8px] hover:bg-[#39527B]  font-raleway font-semibold mt-16">Admin</button>
    <button type="submit" className="ml-[10px] bg-[#4886FF] text-white w-32 h-10 rounded-[8px] hover:bg-[#39527B]  font-raleway font-semibold mt-16">Supplier</button>
  </div>
    </div>
    </>
   );
}

export default RoleAuth;