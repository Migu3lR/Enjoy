import React from 'react';

import css from './Loading.css';

function Loading() {
  return (
    <div className={`center-align ${css.spinner}`}>
      <div className={css.cube1} />
      <div className={css.cube2} />
    </div>
  );
}

export default Loading;
