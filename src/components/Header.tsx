import React from "react";
import ToggleDarkmode from "./ToggleDarkmode";
import MenuBar from "./MenuBar";

const css: {[key: string]: React.CSSProperties} = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    padding: '5px 20px',
    width: '100%',
    height: '55px',
    display: 'flex',
    justifyContent: 'space-between',
    zIndex: 1010,
  },
  h1: {
    width: '70%',
  },
  controller: {
    width: '30%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '1rem',
  }
};

const Header: React.FC = () => {
  return (
    <header style={css.header}>
      <h1 style={css.h1}>HENGE</h1>
      <div style={css.controller}>
        <ToggleDarkmode />
        <MenuBar />
      </div>
    </header>
  );
};

export default Header;