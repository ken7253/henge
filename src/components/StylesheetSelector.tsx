import React, { useState } from "react";

type fileType = '' | 'text' | 'local' | 'network';

const css: {[key: string]: React.CSSProperties} = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    width: '100%',
    padding: '15px 10px',
  },
  input: {
    cursor: 'pointer',
    width: '35px',
    height: '35px',
  },
  select: {
    cursor: 'pointer',
    height: '35px',
    marginLeft: '10px'
  },
  sourceBox: {
    cursor: 'pointer',
    width: '100%',
    marginTop: '5px',
  },
  sourceInput: {
    fontFamily: 'monospace',
    width: '100%',
    minHeight: '5em',
  }
}

const StylesheetSelector:React.FC = () => {
  const [fileType, setFileType] = useState<fileType>('');
  const [source, setSource] = useState('');

  const [sourceBoxHidden, setSourceBoxHidden] = useState<boolean>(true);
  const [fileInputHidden, setFileInputHidden] = useState<boolean>(true);
  const [networkPathHidden, setNetworkPathHidden] = useState<boolean>(true);

  const handleFileType = (event:React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.selectedOptions[0].value;
    setFileType(selectedValue as fileType);

    switch (selectedValue) {
      case 'text':
        setSourceBoxHidden(false);
        setFileInputHidden(true);
        setNetworkPathHidden(true);
        break;
      case 'local':
        setSourceBoxHidden(true);
        setFileInputHidden(false);
        setNetworkPathHidden(true);
        break;
      case 'network':
        setSourceBoxHidden(true);
        setFileInputHidden(true);
        setNetworkPathHidden(false);
        break;
      default:
        setSourceBoxHidden(true);
        setFileInputHidden(true);
        setNetworkPathHidden(true);
        break;
    }
  }

  return(
    <li style={css.container}>
      <input style={css.input} type="checkbox" />
      <select style={css.select} onChange={handleFileType}>
        <option hidden>FILE TYPE</option>
        <option value="text">text</option>
        <option value="local">local</option>
        <option value="network">network</option>
      </select>
      <input type="text" hidden={networkPathHidden}/>
      <input type="file" hidden={fileInputHidden}/>
      <input type="button" value="+" />
      <summary style={css.sourceBox} hidden={sourceBoxHidden}>
        <details>
          <textarea style={css.sourceInput}></textarea>
        </details>
      </summary>
    </li>
  );
};

export default StylesheetSelector;