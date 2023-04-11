import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";

const CustomBtn = ({ title, type, customStyles, handelClick }) => {
  const snap = useSnapshot(state);
  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: "#fff",
      };
    }
  };
  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      onClick={handelClick}
      style={generateStyle(type)}
    >
      {title}
    </button>
  );
};

export default CustomBtn;
