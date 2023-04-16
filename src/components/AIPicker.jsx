import React from "react";
import CustomBtn from "./CustomBtn";
// import toast from "react-hot-toast";

const AIpicker = ({ prompt, setPrompt, generatingImg, handelSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea
        value={prompt}
        placeholder="Ask AI"
        rows="5"
        className="aipicker-textarea"
        onChange={(e) => setPrompt(e.target.value)}
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          // toast.loading("Generating img...")
          console.log("loading")
        ) : (
          <>
            <CustomBtn
              type="filled"
              title="AI Logo"
              customStyles="text-xs"
              handelClick={() => handelSubmit("logo")}
            />
            <CustomBtn
              type="filled"
              title="AI Full"
              customStyles="text-xs"
              handelClick={() => handelSubmit("full")}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AIpicker;
