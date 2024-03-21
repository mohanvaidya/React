import React, { Component } from 'react'
import UpdatedComp from './higherOrderComp';
export class Click extends Component {
    constructor(props) {
      super(props)
    //vaidyamohan
      this.state = {
         count:0
      };
    }
    upClick=()=>{
        this.setState({ count:this.state.count +1

        });

    }

     
  render() {
    const {count}=this.state;
    return (
      <div><button onClick={this.upClick}>{this.props.name} Clicked {count} times</button></div>
    )
  }
}

export default UpdatedComp(Click);
