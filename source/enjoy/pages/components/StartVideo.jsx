import React from 'react';

import css from './StartVideo.css';

function StartVideo() {
  return (
    <div className={css.videoForeground}>
      <iframe src="https://www.youtube.com/embed/fT_CXOpjaHw?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&disablekb=1&modestbranding=1&playlist=fT_CXOpjaHw" frameBorder="0" allowFullScreen />
    </div>
  );
}

export default StartVideo;
