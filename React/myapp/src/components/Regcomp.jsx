import React, { Component } from 'react'

export class Regcomp extends Component {
  render() {
    console.log("regular comp render");
    return (
    <p>Im the regular comp {this.props.name}</p>
    )
  }
}

export default Regcomp;