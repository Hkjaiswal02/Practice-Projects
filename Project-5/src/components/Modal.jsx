import { IoMdClose } from "react-icons/io";
import { createPortal } from "react-dom";
function Modal({ onClose, isOpen, children }) {
  return createPortal(
    <>
      {isOpen && (
        <>
          <div className="z-60 relative min-h-[250px] max-w-[40%] bg-white p-3 m-auto">
            <div className="flex justify-end">
              <IoMdClose className="text-2xl " onClick={onClose} />
            </div>
            {children}
          </div>
          <div
            className="absolute h-screen backdrop-blur z-40 w-screen top-0 "
            onClick={onClose}
          />
        </>
      )}
      ;
    </>,
    document.getElementById("modal-root")
  );
}

export default Modal;
