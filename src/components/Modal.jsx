import React from "react";
import { useRef } from "react";

const Modal = ({ setToggle, setData }) => {
  const inputElement = useRef();
  return (
    <div className="ModalBackground">
      <div className="ModalBody">
        <input type="text" ref={inputElement} placeholder="Input" />
        <button
          type="button"
          onClick={() => {
            setToggle(true);
            setData(inputElement.current.value);
          }}
        >
          Close Modal
        </button>
      </div>
    </div>
  );
};

export default Modal;
