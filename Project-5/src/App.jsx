import "./App.css";
import { CiSearch } from "react-icons/ci";
import { IoMdAddCircle } from "react-icons/io";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="mx-auto max-w-[370px] px-4">
      <Navbar />
      <div className="relative flex items-center">
        <CiSearch className="text-white ml-1 text-3xl absolute" />
        <input
          type="text"
          className="border bg-transparent pl-9 text-white border-white rounded-md h-10 flex-grow"
        />
        <div>
          <IoMdAddCircle className="text-white text-4xl ml-2 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default App;
