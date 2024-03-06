import ElementUser from "../component/ElementUser";

function Dashboard() {
  return (
    <>
      {/* div supreme */}
      <div className="flex">
        {/* première grande div */}
        <div className="border border-[#565656] rounded-md w-[35%]">
          <div className="flex bg-[#565656]">
            <h2>All User</h2>
            <div className="flex">
              <img src="" alt="" />
              <h2>Form Admin</h2>
            </div>
            <div className="flex">
              <img src="" alt="" />
              <h2>For others</h2>
            </div>
          </div>

          <div className="flex border border-[#565656] rounded-md">
            <div className="border border-[#565656] rounded-md">
            <ElementUser src='/src/img/Ellipse 8.svg' name='Betsaleel Yoto' title='Manager' className='border'/>
            <ElementUser src='/src/img/Ellipse 8.svg' name='Betsaleel Yoto' title='Manager' className='border'/>
            </div>
            <div className="border border-[#565656] rounded-md">
              <ElementUser src='/src/img/Ellipse 13.svg' name='Betsaleel Yoto' title='Manager'/>
            </div>
          </div>
        </div>
        {/* première grande div */}

        {/* deuxième grande div */}
        <div className="border border-[#565656] rounded-md">
          <h2></h2>
          <form action=""></form>
        </div>
        {/* deuxième grande div */}
      </div>
    </>
  );
}

export default Dashboard;
