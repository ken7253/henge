import React from "react";
import StylesheetSelector from "./StylesheetSelector";

const css: {[key: string]: React.CSSProperties} = {

}

const StylesheetList:React.FC = () => {

  return (
    <ul>
      <StylesheetSelector />
    </ul>
  );
}

export default StylesheetList;