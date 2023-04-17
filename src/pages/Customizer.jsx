import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useSnapshot } from "valtio";
import config from "../config/config";
import state from "../store";
import { download } from "../assets";
import { reader, downloadCanvasToImage } from "../config/helpers";
import { FilterTabs, EditorTabs, DecalTypes } from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Tab,
  AIpicker,
  ColorPicker,
  FilePicker,
  CustomBtn,
} from "../components";
import axios from "axios";
const Customizer = () => {
  const snap = useSnapshot(state);
  const [file, setFile] = useState("");
  const [prompt, setPrompt] = useState("");
  const [generatingImg, setGeneratingImg] = useState(false);
  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  });
  // while (generatingImg) {
  //   toast.loading("Generating img...");
  // }
  const handelSubmit = async (type) => {
    if (!prompt) return toast.error("Please enter a prompt");
    try {
      setGeneratingImg(true);
      const response = await fetch(config.development.backendUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      // const response = await fetch(
      //   "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
      //   {
      //     method: "POST",
      //     headers: {
      //       "content-type": "application/json",
      //     },
      //     body: JSON.stringify({ inputs: "a flying Cat" }),
      //   }
      // )
      // .then((res) => res.blob())
      // .then((blob) => {
      //   const tab = window.open((target = "_blank"));
      //   tab.location.href = window.URL.createObjectURL(blob);
      // });
      // const response = await fetch(
      //   "https://stablediffusionapi.com/api/v3/text2img",
      //   {
      //     method: "POST",
      //     mode:"no-cors",
      //     headers: {
      //       "Content-Type": "application/json",
      //       "Access-Control-Allow-Headers": "Content-Type",
      //     },
      //     body: JSON.stringify({
      //       key: "MvacquO8yYysljF05xxdW3WvRQVI8Ah7abvbFVcljYaFFN1X9bAdQDAf2v3L",
      //       prompt: "cat on the moon",
      //       negative_prompt: "",
      //       width: "512",
      //       height: "512",
      //       samples: "1",
      //       num_inference_steps: "20",
      //       safety_checker: "no",
      //       enhance_prompt: "yes",
      //       seed: null,
      //       guidance_scale: 7.5,
      //       webhook: null,
      //       track_id: null,
      //     }),
      //   }
      // );

      console.log(response);
      // handelDecals(type, `data:image/png;base64,${data.photo}`);
      // const response = await deepai.callStandardApi("logo-generator", {
      //   text: `${prompt}`,
      // });
      // console.log(response);
    } catch (error) {
      toast.error(error);
      setGeneratingImg(false);
    } finally {
      setGeneratingImg(false);
      setActiveEditorTab("");
    }
  };
  // show tob content
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker />;
      case "filepicker":
        return <FilePicker file={file} setFile={setFile} readFile={readFile} />;
      case "aipicker":
        return (
          <AIpicker
            prompt={prompt}
            setPrompt={setPrompt}
            generatingImg={generatingImg}
            handelSubmit={handelSubmit}
          />
        );

      default:
        return null;
    }
  };

  const handelActiveFilterTab = (tabName) => {
    // set state

    switch (tabName) {
      case "logoShirt":
        state.isLogoTexture = !activeFilterTab[tabName];
        break;
      case "stylishShirt":
        state.isFullTexture = !activeFilterTab[tabName];
        break;

      default:
        state.isLogoTexture = true;
        state.isFullTexture = false;
    }
    // after setting the state

    setActiveFilterTab((prevState) => {
      return {
        ...prevState,
        [tabName]: !prevState[tabName],
      };
    });
  };

  const handelDecals = (type, result) => {
    const decalType = DecalTypes[type];
    state[decalType.stateProperty] = result;
    if (!activeFilterTab[decalType.filterTab]) {
      handelActiveFilterTab(decalType.filterTab);
    }
  };

  const readFile = (type) => {
    reader(file).then((result) => {
      handelDecals(type, result);
      setActiveEditorTab("");
    });
  };
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
                {EditorTabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    tab={tab}
                    handelClick={() => setActiveEditorTab(tab.name)}
                  />
                ))}
                {generateTabContent()}
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
            {FilterTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab={activeFilterTab[tab.name]}
                handelClick={() => handelActiveFilterTab(tab.name)}
              />
            ))}
            <button
              className="download-btn"
              title="Download the Shirt design as an image"
              onClick={downloadCanvasToImage}
            >
              <img
                src={download}
                alt="download_image"
                className="w-3/5 h-3/5 object-contain"
              />
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Customizer;
