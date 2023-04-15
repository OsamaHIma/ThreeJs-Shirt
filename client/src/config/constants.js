import { swatch, fileIcon, ai, logoShirt, stylishShirt } from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
    title:"Color Picker"
  },
  {
    name: "filepicker",
    icon: fileIcon,
    title:"Choose an image"
  },
  {
    name: "aipicker",
    icon: ai,
    title:"Generate an image using AI"
  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt,
    title: "Set the image as a logo on the shirt"
  },
  {
    name: "stylishShirt",
    icon: stylishShirt,
    title: 'Set the image as a full deign on the shirt'
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
