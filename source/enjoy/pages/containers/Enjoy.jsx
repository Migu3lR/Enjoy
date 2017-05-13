import React from 'react';

function Home() {
  const v_id = '10148061';
  return (
    <section name="Home">
      <div className="container">
        <div className="row">
          <div className="col s12 center">
            <iframe 
              id={`vzvd-${v_id}`} 
              name={`vzvd-${v_id}`}
              title="vzaar video player" 
              className="vzaar-video-player" 
              type="text/html" 
              frameBorder="0" 
              allowFullScreen 
              allowTransparency="true" 
              mozallowfullscreen 
              webkitAllowFullScreen 
              src={`//view.vzaar.com/${v_id}/player`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
