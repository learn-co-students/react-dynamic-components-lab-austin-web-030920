import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.Opacity}}>
        {/* your conditional code here! */}
      </div>
    )
  }

}

