import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useSnapshot } from "valtio";
import config from "../config/config";
import state from "../store";
import { download } from "../assets";
import { reader, downloadCanvasToImage } from "../config/helpers";
import { FilterTabs, EditorTabs, DecalTypes } from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";
import {
  Tap,
  AIpicker,
  ColorPicker,
  FilePicker,
  CustomBtn,
} from "../components";

const Customizer = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation("left")}
          >
            <div className="flex min-h-screen items-center">
              <div className="editortabs-container taps">
                {EditorTabs.map((tap) => (
                  <Tap key={tap.name} tap={tap} handelClick={() => {}} />
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            className="absolute top-5 right-5 z-10"
            {...fadeAnimation}
          >
            <CustomBtn
              type="filled"
              title="Go back"
              handelClick={() => (state.intro = true)}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>

          <motion.div
            className="filtertabs-container"
            {...slideAnimation("up")}
          >
            {FilterTabs.map((tap) => (
              <Tap
                key={tap.name}
                tap={tap}
                isActiveTab=""
                isFilterTab
                handelClick={() => {}}
              />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Customizer;

// {/* Download button */}
// <button className="download-btn" onClick={downloadCanvasToImage}>
// <img
//   src={download}
//   alt="download_image"
//   className="w-3/5 h-3/5 object-contain"
// />
// </button>
