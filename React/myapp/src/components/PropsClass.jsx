
import React, { Component } from 'react'

 class PropsClass extends Component {
  render() {
    return (
        <div>  <h1> {this.props.name} this is props tutorial</h1>
       <h1>{this.props.children}</h1>
     </div>
    )
  }
}

export default PropsClass;