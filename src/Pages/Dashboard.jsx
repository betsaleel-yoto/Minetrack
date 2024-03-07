import ElementUser from "../component/ElementUser";
import NavBar from "../component/navBar";
import Input from "../component/inputs/input";
import Select from "../component/inputs/Select";
import DoubleButton from "../component/Button/DoubleBoutton";
import Search from "../component/Search";
import BarreDeNiveau from "../component/barreDeNiveau";
function Dashboard() {
  return (
    <>
      <div className="flex w-[100%]">
        <NavBar />
        {/* div supreme */}
        <div className="flex-col w-[80%]">
          {/* div du dessus avec la bannière */}
          <div className="w-[100%]">
            <div className="flex border-b border-[#D8D4D4] pt-3">
              <div className="border-r border-[#B6B6B6] pl-[2rem] pb-[1.77rem] pr-[2rem]">
                <button type="button">
                  <img src="/src/img/Vector.svg" alt="" className="mt-[1rem]" />
                </button>
              </div>
              <div className="relative left-[62rem]">
                <Search />
              </div>

              <div className="flex ml-[65rem]">
                <img
                  src="/src/img/user-solid.svg"
                  alt=""
                  className="border-2 border-[#909090] rounded-[100%] w-[2rem] h-[2rem]"
                />
                <p className="pl-1 font-semibold font-raleway text-[#787878] mt-1">
                  User
                </p>
                <img
                  src="/src/img/fleche_bas.svg"
                  alt=""
                  className="w-[10px] relative bottom-5 left-2"
                />
              </div>
            </div>
            {/* partie bannière */}
            <div
              className="h-40 w-[73%] ml-[10.3rem] mt-12 rounded-lg bg-center bg-cover"
              style={{
                backgroundImage:
                  "url('./src/img/istockphoto-1322302356-1024x1024 1.jpg')",
              }}
            >
              <div className="inset-0 bg-black opacity-60 h-40 w-[100%] rounded-lg"></div>
              <h1 className="font-bold text-white font-raleway text-[3.5rem] relative bottom-[9rem] left-14">
                Welcome to Minetrack
              </h1>
            </div>
          </div>
          {/* div du dessus avec la bannière */}

          <div className="flex w-[100%] h-[auto] mt-12">
            {/* première grande div */}
            <div className="border  border-[#BCBCBC] rounded-[8px] ml-[10rem] w-[45%] p-5">
              {/* En tete */}
              <div className="flex bg-[#D9D9D9] w-[41.55rem] relative right-[1.3rem] h-16 bottom-6 rounded-t-lg">
                <h2 className="font-bold font-raleway text-[#39527B] pl-8 border-r border-[#B2AEAE] pr-16 h-16 pt-5">
                  All User
                </h2>
                <div className="flex">
                  <img
                    src="/src/img/Ellipse 8.svg"
                    alt=""
                    className="pl-14 w-[4.3rem]"
                  />
                  <h2 className="font-bold font-raleway text-[#39527B] mt-5 pr-16 pl-2">
                    For Admin
                  </h2>
                </div>
                <div className="flex">
                  <img
                    src="/src/img/Ellipse 13.svg"
                    alt=""
                    className="w-[0.7555rem]"
                  />
                  <h2 className="font-bold font-raleway text-[#39527B] mt-5 pl-2">
                    For Others
                  </h2>
                </div>
              </div>
              {/* Partie Liste des Utilisateurs */}
              <div className="flex border rounded-md">
                <div className="border border-[#565656] rounded-md">
                  <ElementUser
                    src="/src/img/Ellipse 8.svg"
                    name="Betsaleel Yoto"
                    title="Manager"
                    className="border"
                  />
                  <ElementUser
                    src="/src/img/Ellipse 8.svg"
                    name="Betsaleel Yoto"
                    title="Manager"
                    className="border"
                  />
                  <ElementUser
                    src="/src/img/Ellipse 8.svg"
                    name="Betsaleel Yoto"
                    title="Manager"
                    className="border"
                  />
                  <ElementUser
                    src="/src/img/Ellipse 8.svg"
                    name="Betsaleel Yoto"
                    title="Manager"
                    className="border"
                  />
                  <ElementUser
                    src="/src/img/Ellipse 8.svg"
                    name="Betsaleel Yoto"
                    title="Manager"
                    className="border"
                  />
                  <ElementUser
                    src="/src/img/Ellipse 8.svg"
                    name="Betsaleel Yoto"
                    title="Manager"
                    className="border"
                  />
                </div>
                <div className="ml-3 border border-[#565656] rounded-md">
                  <ElementUser
                    src="/src/img/Ellipse 13.svg"
                    name="Betsaleel Yoto"
                    title="Manager"
                  />
                  <ElementUser
                    src="/src/img/Ellipse 13.svg"
                    name="Betsaleel Yoto"
                    title="Manager"
                  />
                  <ElementUser
                    src="/src/img/Ellipse 13.svg"
                    name="Betsaleel Yoto"
                    title="Manager"
                  />
                  <ElementUser
                    src="/src/img/Ellipse 13.svg"
                    name="Betsaleel Yoto"
                    title="Manager"
                  />
                  <ElementUser
                    src="/src/img/Ellipse 13.svg"
                    name="Betsaleel Yoto"
                    title="Manager"
                  />
                  <ElementUser
                    src="/src/img/Ellipse 13.svg"
                    name="Betsaleel Yoto"
                    title="Manager"
                  />
                </div>
              </div>
            </div>
            {/* première grande div */}

            {/* deuxième grande div */}

            {/* Partie formmulaire */}
            <div className="border  border-[#BCBCBC] rounded-[8px] ml-[5rem] w-[23%] p-5">
              <h2 className="bg-[#D9D9D9] w-[21.25rem] relative right-[1.3rem] h-16 bottom-6 rounded-t-lg font-raleway font-bold text-[#39527B] text-center pt-5">
                Add User
              </h2>
              <form action="">
                <Input
                  classes="w-[18rem]"
                  type="text"
                  name="username"
                  label="Username"
                  htmlFor="username"
                />
                <Input
                  classes="w-[18rem]"
                  type="text"
                  name="idnumber"
                  label="ID number"
                  htmlFor="idnumber"
                />
                <Select name="user_role" htmlFor="user_role" label="UserRole" />
                <Input
                  classes="w-[18rem]"
                  type="text"
                  name="usertitle"
                  label="UserTitle"
                  htmlFor="usertitle"
                />
                <DoubleButton />
              </form>
              
            </div>
            {/* deuxième grande div */}
         
          </div>
          {/* <BarreDeNiveau width='w-[40rem]' bgcl='bg-[#39527B]' h='h-[0.5rem]'/> */}

          
          {/* partie tableaux des stats */}


{/* premier Tableau */}


          
        </div>
      </div>
    </>
  );
}

export default Dashboard;
