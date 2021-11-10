import React, { useState, useEffect, useMemo } from "react";

const css: {[key: string]: React.CSSProperties} = {
  input: {
    cursor: 'pointer',
    width: '35px',
    height: '35px',
  }
}

const ToggleDarkmode: React.FC = () => {
  const [theme, setTheme] = useState("light dark");
  const [isDark, setIsDark] = useState(false);
  const handleCheckboxClick = useMemo(() => {
    setTheme(isDark? "dark" : "light")
    return () => {
      setIsDark(!isDark);
    }
  }, [isDark]);

  useEffect(() => {
    const colorScheme = document.head.querySelector('[name="color-scheme"]') as HTMLMetaElement | null;
    if (colorScheme?.content) {
      colorScheme.content = theme;
    }
  });

  return (<input type="checkbox" style={css.input} checked={isDark} onChange={handleCheckboxClick}/>)
}

export default ToggleDarkmode;