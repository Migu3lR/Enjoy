import React, { PropTypes } from 'react';
import { FormattedHTMLMessage } from 'react-intl';

import styles from './Comment.css';

function Comment(props) {
  return (
    <article id={`comment-${props.id}`} className={styles.comment}>
      <div className={styles.meta}>
        <FormattedHTMLMessage
          id="comment.meta.author"
          values={{
            email: props.email,
            name: props.name,
          }}
        />
      </div>
      <p className={styles.meta}>
        {props.body}
      </p>
    </article>
  );
}

Comment.propTypes = {
  id: PropTypes.number,
  email: PropTypes.string,
  name: PropTypes.string,
  body: PropTypes.string,
};

Comment.defaultProps = {
  id: -1,
  email: '',
  name: '',
  body: '',
};


export default Comment;

