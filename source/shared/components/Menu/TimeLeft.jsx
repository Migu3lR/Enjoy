import React, { Component, PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';

import api from '../../../api';

class TimeLeft extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeLeft: {
        d: 0,
        h: '00',
        m: '00',
        s: '00',
      },
    };

    this.updateTimer = this.updateTimer.bind(this);
  }

  componentDidMount() {
    this.updateTimer();
    this.timer = setInterval(this.updateTimer, 500);
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

export default TimeLeft;
