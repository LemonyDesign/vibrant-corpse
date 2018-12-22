import React from "react";
import TimerMachine from "./TimerMachine";
import cx from "classnames";

import "../styles/components/favourite.scss";

class Favourite extends React.Component {
  constructor() {
    super();
    this.state = { active: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    const favouriteclasses = cx("workshop__favourite", {
      active: this.state.active
    });

    return (
      <li className="workshop__listitem">
        <h4>
          <a href="#" className={favouriteclasses} onClick={this.handleClick}>
            {this.props.favourite}
          </a>
        </h4>
        {this.state.active ? <TimerMachine /> : null}
      </li>
    );
  }
}

export default Favourite;
