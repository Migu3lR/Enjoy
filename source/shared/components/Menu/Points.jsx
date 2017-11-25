import React, { Component, PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import reactMixin from 'react-mixin';
import ReactFireMixin from 'reactfire';

import api from '../../../api';

class Points extends Component {
  constructor(props) {
    super(props);

    this.state = {
      balance: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    api.db.bindState(this, 'balance', `/usuarios/${nextProps.user.uid}/balance`);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  updateTimer() {
    this.setState({
      timeLeft: api.acct.timeLeft(this.props.timeUp),
    });
  }

  render() {
    return (
      <span>
        <FormattedMessage id="header.nav.timeleft" />
        {` ${this.state.timeLeft.d} Dias - ${this.state.timeLeft.h}:${this.state.timeLeft.m}:${this.state.timeLeft.s}`}
      </span>

    );
  }
}

TimeLeft.propTypes = {
  timeUp: PropTypes.number.isRequired,
};

export default Points;
