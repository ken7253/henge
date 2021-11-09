import React, { useState, useEffect, useMemo } from "react";

const css: {[key: string]: React.CSSProperties} = {
  input: {
    cursor: 'pointer',
    width: '35px',
    height: '35px',
  }
}

const ToggleDarkmode: React.FC = () => {
  const [theme, setTheme] = useState("light");
  const [checked, setChecked] = useState(false);
  const handleCheckboxClick = useMemo(() => {
    setTheme(checked? "light" : "dark")
    return () => {
      setChecked(!checked);
    }
  }, [checked]);

  useEffect(() => {
    const colorScheme = document.head.querySelector('[name="color-scheme"]') as HTMLMetaElement | null;
    if (colorScheme?.content) {
      colorScheme.content = theme;
    }
  });

  return (<input type="checkbox" style={css.input} checked={checked} onChange={handleCheckboxClick}/>)
}

export default ToggleDarkmode;