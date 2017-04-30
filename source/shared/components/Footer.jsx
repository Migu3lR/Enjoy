import React from 'react';

import css from './Footer.css';

function Footer() {
  return (
    <footer className="page-footer">
      <div className="footer-copyright">
        <div className="container">
          <p className="center white-text">Enjoy Life ProNET is <i className={`material-icons ${css.material_icons}`}>code</i> by <a href="https://migu3lr.github.io/">Miguel Romero</a></p>
          <p className="center grey-text text-lighten-4">Coaching Alegra © 2017</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
