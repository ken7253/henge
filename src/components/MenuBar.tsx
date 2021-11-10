import React from "react";

const css: {[key: string]: React.CSSProperties} = {
  input: {
    cursor: 'pointer',
    width: '35px',
    height: '35px',
  }
}

const MenuBar: React.FC = () => {
  
  return (
    <input type="checkbox" style={css.input} />
  )
}

export default MenuBar;