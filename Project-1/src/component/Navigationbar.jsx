import Loginbutton from "./Loginbutton";
import Navoption from "./Navoption";

const Naviagationbar = () => {
  return (
    <>
      <div className="flex h-20 justify-between bg-white py-5 pr-20 pl-20 shadow-sm items-center">
        <img src="../images/nike.png" alt="Nike logo" className="h-11" />
        <Navoption />
        <Loginbutton />
      </div>
    </>
  );
};
export default Naviagationbar;
