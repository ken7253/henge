import React from "react";
import project from '../lib/package';

const css: {[key: string]: React.CSSProperties} = {
  footer: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
  }
}

const Footer: React.FC = () => {

  return(
    <footer style={css.footer}>
      <p>v{project.version}</p>
      <small>&copy; 2021- ken7253</small>
    </footer>
  );
}

export default Footer;