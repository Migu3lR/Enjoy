import React from 'react';

import OauthButton from '../components/OauthButton';

import api from '../../../api';

function handleOauthG(e) {
  e.preventDefault();
  api.auth.Login_oAuth('Google');
}

function handleOauthF(e) {
  e.preventDefault();
  api.auth.Login_oAuth('Facebook');
}

function handleOauthT(e) {
  e.preventDefault();
  api.auth.Login_oAuth('Twitter');
}

function OauthAll() {
  return (
    <div className="card">
      <div className="card-content">
        Tambien puedes iniciar sesion con:
        <OauthButton
          btOauth={'Google'}
          doOauth={handleOauthG}
        />
        <OauthButton
          btOauth={'Facebook'}
          doOauth={handleOauthF}
        />
        <OauthButton
          btOauth={'Twitter'}
          doOauth={handleOauthT}
        />
      </div>
    </div>
  );
}

export default OauthAll;
