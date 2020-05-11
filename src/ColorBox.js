import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  conditionalRender = () => {
    console.log(this.props.opacity);
    if (this.props.opacity >= 0.2){
      return <ColorBox opacity={this.props.opacity - 0.1}/>
    } else {
      return null
    };
  }

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity /*replace null with the value*/}}>
        {this.conditionalRender()}
      </div>
    )
  }

}

