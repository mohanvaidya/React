
import React, { Component } from 'react'

 class StateTutorial extends Component {
    constructor(props) {
      super(props)
    
      this.state = { 
       message:'subscribe to my channel',
         sub:'Subscribe'
      };
    };
    Buttonchange=()=>{
        this.setState({

            message:'thank you for subscribing please hit the bell icon',
            sub:'subscribed'
        });
    }

  render() {
    return (
      <div><h1>stateTutorial</h1>

      <p>{this.state.message} </p>

      <button onClick={this.Buttonchange}>{this.state.sub}</button><br />
      
      </div>
    )
  }
}

export default StateTutorial;
