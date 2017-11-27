import React, { Component, PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';

import api from '../../../api';

class Points extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      points: 0,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      loading: true,
    });

    if (nextProps.user) {
      this.bind = api.base.bindToState(`/usuarios/${nextProps.user.uid}/balance/points`, {
        context: this,
        state: 'points',

        then: () => {
          this.setState({
            loading: false,
          });
        },
      });
    } else {
      if (this.bind) api.base.removeBinding(this.bind);
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    return (
      !this.state.loading && (
        <span>
          <b><FormattedMessage id="header.nav.mypoints" /></b>
          {` ${this.state.points}`}
        </span>
      )
    );
  }
}

Points.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
  }),
};

Points.defaultProps = {
  user: null,
};

export default Points;
