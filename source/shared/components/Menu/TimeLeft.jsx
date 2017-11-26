import React, { Component, PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';

class TimeLeft extends Component {
  constructor(props) {
    super(props);

    this.updateTimer = this.updateTimer.bind(this);
    this.calcTime = this.calcTime.bind(this);

    if (this.props.timeUp) {
      this.state = {
        timeLeft: this.calcTime(this.props.timeUp),
      };
    } else {
      this.state = {
        timeLeft: {
          d: 0,
          h: '00',
          m: '00',
          s: '00',
        },
      };
    }
  }

  componentDidMount() {
    this.updateTimer();
    this.timer = setInterval(this.updateTimer, 500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  calcTime(timeUp) {
    const now = Math.trunc((new Date()).getTime() / 1000);
    const left = timeUp - now;

    if (left === 0) clearInterval(this.timer);

    const d = left > 0 ? Math.trunc(left / 86400) : 0;
    const h = left > 0 ? Math.trunc((left / 3600) % 24) : 0;
    const m = left > 0 ? Math.trunc((left / 60) % 60) : 0;
    const s = left > 0 ? Math.trunc(left % 60) : 0;

    return {
      d,
      h: h > 9 ? h : `0${h}`,
      m: m > 9 ? m : `0${m}`,
      s: s > 9 ? s : `0${s}`,
    };
  }

  updateTimer() {
    this.setState({
      timeLeft: this.calcTime(this.props.timeUp),
    });
  }

  render() {
    return (
      <span>
        <b><FormattedMessage id="header.nav.timeleft" /></b>
        {` ${this.state.timeLeft.d} Dias - ${this.state.timeLeft.h}:${this.state.timeLeft.m}:${this.state.timeLeft.s}`}
      </span>

    );
  }
}

TimeLeft.propTypes = {
  timeUp: PropTypes.number,
};

TimeLeft.defaultProps = {
  timeUp: null,
};

export default TimeLeft;
