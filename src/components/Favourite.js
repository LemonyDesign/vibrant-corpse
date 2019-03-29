import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import TimerMachine from './TimerMachine';

import '../styles/components/favourite.scss';

class Favourite extends React.Component {
  constructor() {
    super();
    this.state = { active: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      active: !prevState.active,
    }));
  }

  render() {
    const { active } = this.state;
    const { favourite } = this.props;
    const favouriteclasses = cx('workshop__favourite', {
      active,
    });

    return (
      <li className="workshop__listitem">
        <h3>
          <button type="button" className={favouriteclasses} onClick={this.handleClick}>
            {favourite}
          </button>
        </h3>
        {active ? <TimerMachine /> : null}
      </li>
    );
  }
}

Favourite.propTypes = {
  favourite: PropTypes.string.isRequired,
};

export default Favourite;
