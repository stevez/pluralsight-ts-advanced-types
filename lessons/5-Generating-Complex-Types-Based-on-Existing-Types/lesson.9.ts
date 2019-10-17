import { Project, TextLayer, ImageLayer, LayerType, Size } from "./types";

type FieldDescriptions = {
  [key in keyof (TextLayer & ImageLayer)]: string;
};

const fieldDescriptions: FieldDescriptions = {
  text: "This is the default text",
  color: "The color of the text",
  fontSize: "The size of the font",
  maxWidth: "The max width of the text layer",
  rotation: "The rotation angle of the layer between 0 and 360",
  type: "The type of the layer",
  src: "The relative location to the image file"
};

Object.entries(fieldDescriptions).forEach(([field, description]) => {
  console.log(`${field}: ${description}`);
});