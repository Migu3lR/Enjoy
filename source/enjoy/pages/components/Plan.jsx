import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import css from './Plan.css';

function Plan(props) {
  return (
    <div className={props.important ? 'z-depth-5' : null}>
      <div className={`${css.pricing} ${props.color} lighten-1`}>
        <div className={`${css.thumbnail} animated pulse infinite`}>
          <div className={'css.fa css.fa_paper_plane'} />
        </div>
        <div className={`${css.title} ${props.color} darken-2`}>
          {props.title}
        </div>
        <div className={css.content}>
          <div className={css.sub_title}>
            {`$${props.price} `}
            <i>por mes</i>
          </div>
          <ul>
            {props.desc.map(desc => (
              <li>
                <div className={'css.fa'} />
                {desc}
              </li>
            ))}
          </ul>
          <Link to="/enjoy" className={`${props.color} darken-2`}>
            Comprar
          </Link>
        </div>
      </div>
    </div>
  );
}

Plan.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  desc: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  important: PropTypes.bool,
};

Plan.defaultProps = {
  important: false,
};

export default Plan;
