import React from 'react';
import cx from 'classnames';

import '../styles/components/timer.scss';

class TimerMachine extends React.Component {
  constructor() {
    super();
    this.state = { timeleft: 10000 };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.start = new Date();
    this.interval = setInterval(this.tick, 200);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    const now = new Date();
    const diff = now - this.start;
    if (diff < 10000) {
      this.setState({ timeleft: 10000 - diff });
    } else {
      clearInterval(this.interval);
      this.setState({ timeleft: 0 });
    }
  }

  render() {
    const { timeleft } = this.state;
    const remaining = timeleft;
    const timer = Math.round(remaining / 1000);
    const timerclasses = cx('workshop__timer', {
      'workshop--timeout': remaining < 5000,
      'workshop--timeend': remaining === 0,
    });

    return <p className={timerclasses}>{timer}</p>;
  }
}

export default TimerMachine;
