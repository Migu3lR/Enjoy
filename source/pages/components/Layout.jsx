import React, { PropTypes } from 'react';

function Layout(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>{props.title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
        />
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />
        <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link type="text/css" rel="stylesheet" href={`${props.domain}/materialize.css`} media="screen,projection" />
        <link rel="stylesheet" href={`${props.domain}/styles.css`} />
      </head>
      <body>
        <div
          id="render-target"
          dangerouslySetInnerHTML={{
            __html: props.content,
          }}
        />
        <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js" />
        <script type="text/javascript" src={`${props.domain}/materialize.js`} />
        <script src={`${props.domain}/app.js`} />
        <script type="text/javascript">
          (function($){
            $(function () {

              $('.button-collapse').sideNav();
              $('.parallax').parallax();

            })
          })(jQuery);
        </script>
      </body>
    </html>
  );
}


Layout.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  domain: PropTypes.string,
};

Layout.defaultProps = {
  title: '',
  content: '',
  domain: '',
};

export default Layout;
