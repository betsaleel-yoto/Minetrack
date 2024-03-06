function DoubleButton() {
  return (
    <>
      <div className="flex">
      <button
          type="submit"
          className="bg-[#60C84C] text-white w-20 h-8 rounded-[8px] hover:bg-[#349a20]  font-raleway font-semibold mr-5"
        >Add</button>
        <button
          type="reset"
          className=" bg-[#FF7473] text-white w-20 h-8 rounded-[8px] hover:bg-[#fb4646]  font-raleway font-semibold"
        >Renit</button>
       
      </div>
    </>
  );
}

export default DoubleButton;
