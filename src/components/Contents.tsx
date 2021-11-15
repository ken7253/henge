import React from "react";

const css: {[key: string]: React.CSSProperties} = {
  main: {
    minHeight: '400px'
  }
}

const Contents: React.FC = () => {
  return (
    <main style={css.main}>
    </main>
  )
}

export default Contents;