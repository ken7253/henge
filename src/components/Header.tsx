import React from "react";

const css: {[key: string]: React.CSSProperties} = {
  header: {
    width: '100%',
    height: '1.5rem'
  },
  h1: {
    textAlign: 'center',
  }
};

const Header: React.FC = () => {
  return (
    <header style={css.header}>
      <h1 style={css.h1}>HENGE</h1>
    </header>
  );
};

export default Header;