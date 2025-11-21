import { FaRegUserCircle } from "react-icons/fa";
import { RiEditCircleLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
function Contactcard({ contact }) {
  return (
    <div
      key={contact.id}
      className="flex bg-yellow-200 justify-between items-center p-2 rounded-lg "
    >
      <FaRegUserCircle className="text-3xl text-orange-400" />
      <div className="gap-2">
        <h2 className="font-medium">{contact.name}</h2>
        <p className="text-sm">{contact.email}</p>
      </div>
      <div className="flex text-3xl gap-2">
        <RiEditCircleLine />
        <MdDelete className="text-purple-800" />
      </div>
    </div>
  );
}

export default Contactcard;
