import React from "react";
import CustomBtn from "./CustomBtn";
import { toast } from "react-hot-toast";

const FilePicker = ({ file, setFile, readFile }) => {
  // console.log(file);
  return (
    <div className="filepicker-container">
      <div className="flex flex-1 flex-col">
        <input
          type="file"
          name="file"
          id="file-upload"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>
        <p className="mt-2 text-xs truncate">
          {" "}
          {file === "" ? "No file selected" : file.name}
        </p>
        {/* <img src={file} alt="Your image" /> */}
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <CustomBtn
          type="filled"
          title="Logo"
          handelClick={() =>
            !file
              ? toast.error("Please upload an image first!")
              : readFile("logo")
          }
          customStyles="text-xs"
        />
        <CustomBtn
          type="filled"
          title="Full"
          handelClick={() =>
            !file
              ? toast.error("Please upload an image first!")
              : readFile("full")
          }
          customStyles="text-xs"
        />
      </div>
    </div>
  );
};

export default FilePicker;
