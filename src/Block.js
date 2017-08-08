/*
 * Copyright (c) 2017, Jon McClure <jmcclure@politico.com>
 *
 * License: MIT
 */

import React, {Component} from "react";

import {MegadraftPlugin, MegadraftIcons} from "megadraft";

import BlockInput from "./BlockInput";

const {BlockData, CommonBlock} = MegadraftPlugin;



export default class Block extends Component {
  constructor(props) {
    super(props);

    this.handleCaptionChange = ::this.handleCaptionChange;

    this.actions = [
      {"key": "delete", "icon": MegadraftIcons.DeleteIcon, "action": this.props.container.remove}
    ];
  }

  handleCaptionChange(event) {
    this.props.container.updateData({unit: event.target.value});
  }

  render(){
    return (
      <div className="ad-unit-figure">
      <CommonBlock {...this.props} actions={this.actions}>
        <BlockData>
          <BlockInput
            placeholder="Ad unit ID"
            value={this.props.data.unit}
            onChange={this.handleCaptionChange} />
        </BlockData>
      </CommonBlock>
      </div>
    );
  }
}
