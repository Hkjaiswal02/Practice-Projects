import "./App.css";
import { CiSearch } from "react-icons/ci";
import { IoMdAddCircle } from "react-icons/io";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import Contactcard from "./components/Contactcard";
import Modal from "./components/Modal";
function App() {
  const [contact, setContacts] = useState([]);
  const [isopen, setOpen] = useState(true);
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const getConstacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactSnapshot = await getDocs(contactsRef);
        const contactLists = contactSnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setContacts(contactLists);
      } catch (error) {
        console.log(error);
      }
    };
    getConstacts();
  }, []);

  return (
    <>
      <div className="mx-auto max-w-[370px] px-4">
        <Navbar />
        <div className="relative flex items-center">
          <CiSearch className="text-white ml-1 text-3xl absolute" />
          <input
            type="text"
            className="border bg-transparent pl-9 text-white border-white rounded-md h-10 grow"
          />
          <div>
            <IoMdAddCircle
              className="text-white text-4xl ml-2 cursor-pointer"
              onClick={onOpen}
            />
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-4">
          {contact.map((contact) => (
            <Contactcard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
      <Modal onClose={onClose} isOpen={isopen}>
        hi
      </Modal>
    </>
  );
}

export default App;
