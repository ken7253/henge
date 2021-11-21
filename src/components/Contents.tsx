import React from "react";
import StylesheetList from './StylesheetList';

const css: {[key: string]: React.CSSProperties} = {
  main: {
    minHeight: '400px',
    marginTop: '55px',
  }
}

const Contents: React.FC = () => {

  return (
    <main style={css.main}>
      <StylesheetList />
    </main>
  )
}

export default Contents;