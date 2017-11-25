import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';

import css from './OauthButton.css';

function OauthButton(props) {
  const oauthImg = {
    Facebook: 'https://www.gstatic.com/mobilesdk/160409_mobilesdk/images/auth_service_facebook.svg',
    Google: 'https://www.gstatic.com/mobilesdk/160512_mobilesdk/auth_service_google.svg',
    Twitter: 'https://www.gstatic.com/mobilesdk/160409_mobilesdk/images/auth_service_twitter.svg',
  };

  return (
    <div className={css.btn} onClick={props.doOauth}>
      <div className={css.icon_wrapper}>
        <img className={css.icon} alt="oAuth" src={oauthImg[props.btOauth]} />
      </div>
      <span className={css.btn_text}><b><FormattedMessage id="login.oauth" />{props.btOauth}</b></span>
    </div>
  );
}

OauthButton.propTypes = {
  btOauth: PropTypes.string.isRequired,
  doOauth: PropTypes.func.isRequired,
};

export default OauthButton;
