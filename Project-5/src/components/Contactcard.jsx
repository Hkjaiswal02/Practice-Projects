import { FaRegUserCircle } from "react-icons/fa";
import { RiEditCircleLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { db } from "../config/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import AddAndUpdateContact from "./AddAndUpdateContact";
import useDisclouse from "../hooks/useDisclouse";
function Contactcard({ contact }) {
  const { isOpen, onClose, onOpen } = useDisclouse();
  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
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
          <RiEditCircleLine onClick={onOpen} className="cursor-pointer" />
          <MdDelete
            className="text-purple-800 cursor-pointer"
            onClick={() => deleteContact(contact.id)}
          />
        </div>
      </div>
      <AddAndUpdateContact
        contact={contact}
        isUpdate
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
}

export default Contactcard;
