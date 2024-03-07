function EnteteTableau(props) {
  const classNames=`text-[#39527B] font-raleway font-semibold rounded-t-lg bg-[#D9D9D9] ${props.width}`
  return ( 
    <>
    <h2 className={classNames}>
      Ongoing Expeditions
    </h2>
    </>
   );
}

export default EnteteTableau;