/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React, {Component} from "react";
import classNames from "classnames";


export default class BlockInput extends Component {
  renderError(error) {
    if (!error) {
      return;
    }
    return (
      <div className="block__input__error-text">{error}</div>
    );
  }

  _handleDrop(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  render(){
    let {value, error, styles, ...props} = this.props;
    styles = styles || {};

    let className = classNames({
      "block__input": true,
      "block__input--empty": !value,
      "block__input--error": error,
      [`block__input--${styles.padding}-padding`]: styles.padding,
      [`block__input--${styles.text}-text`]: styles.text
    });

    return (
      <div className="block__input__row">
        <div className="block__input__wrapper">
          <input {...props} value={value} type="text" className={className} onDrop={this._handleDrop}/>
        </div>
        {this.renderError(error)}
      </div>
    );
  }
}
