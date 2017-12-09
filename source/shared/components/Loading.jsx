import React from 'react';

import css from './Loading.css';

function Loading() {
  return (
    <section className={`${css.loading} valign-wrapper`}>
      <div className={`center-align ${css.spinner}`}>
        <div className={css.cube1} />
        <div className={css.cube2} />
      </div>
    </section>
  );
}

export default Loading;
