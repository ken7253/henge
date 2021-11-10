import React from "react";

const css: {[key: string]: React.CSSProperties} = {
  tab: {
    position: 'fixed',
    top: 0,
    left: 0,
    padding: '55px 0 0 0',
    width: '100vw',
    height: '100vh',
    zIndex: 1000,
  }
}

const ConfigurationTab: React.FC = () => {
  return (
    <div style={css.tab}>

    </div>
  )
}

export default ConfigurationTab;