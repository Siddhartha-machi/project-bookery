import { strFormatArgsType } from "../Types/helperTypes";

const strFormat = (options: strFormatArgsType) => {
  const { str, replace, replacement } = options;
  return str.replaceAll(replace, replacement);
};

export default strFormat;
