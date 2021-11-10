import React from "react";

const css: {[key: string]: React.CSSProperties} = {
  tab: {
    position: 'fixed',
    top: 0,
    left: 0,
    padding: '55px 20px 5px 20px',
    width: '100vw',
    height: '100vh',
    zIndex: -1,
  }
}

const ConfigurationTab: React.FC<{visible: any}> = ({visible}) => {
  return (
    <div style={css.tab} hidden={!visible}></div>
  )
}

export default ConfigurationTab;