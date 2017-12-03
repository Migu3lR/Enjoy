import React from 'react';

import css from './Footer.css';

function Footer() {
  return (
    <footer className={`page-footer ${css.page_footer}`}>
      <div className={`footer-copyright ${css.footer_copyright}`}>
        <div className="container">
          <p className="center grey-text text-lighten-4">Coaching Alegra © 2017</p>
          <p className="center white-text">Enjoy Life ProNET was <b>&lt;/&gt;</b> by <a href="https://migu3lr.github.io/">Miguel Romero</a> with ❤</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
