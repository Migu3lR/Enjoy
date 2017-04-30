import React from 'react';

function Footer() {
  return (
    <footer className="page-footer orange">
      <div className="container">
        <div className="row">
          <div className="col m8 offset-m2 s12">
            <p className="center white-text">Enjoy Life ProNET is &lt;/&gt; by <a href="https://migu3lr.github.io/">Miguel Romero</a></p>
            <p className="grey-text text-lighten-4">Coaching Alegra © 2017</p>


          </div>
          <div className="col l3 s12">
            <h5 className="white-text">Settings</h5>
            <ul>
              <li><a className="white-text" href="#!">a 1</a></li>
              <li><a className="white-text" href="#!">a 2</a></li>
              <li><a className="white-text" href="#!">a 3</a></li>
              <li><a className="white-text" href="#!">a 4</a></li>
            </ul>
          </div>
          <div className="col l3 s12">
            <h5 className="white-text">Connect</h5>
            <ul>
              <li><a className="white-text" href="#!">a 1</a></li>
              <li><a className="white-text" href="#!">a 2</a></li>
              <li><a className="white-text" href="#!">a 3</a></li>
              <li><a className="white-text" href="#!">a 4</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          Made by <a className="orange-text text-lighten-3" href="http://materializecss.com">Materialize</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
