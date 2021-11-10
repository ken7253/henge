import React from "react";

const css: {[key: string]: React.CSSProperties} = {
  input: {
    cursor: 'pointer',
    width: '35px',
    height: '35px',
  }
}

const MenuBar: React.FC<{visible:any}> = ({visible}) => {
  
  return (
    <input type="checkbox" style={css.input} onChange={visible}/>
  )
}

export default MenuBar;