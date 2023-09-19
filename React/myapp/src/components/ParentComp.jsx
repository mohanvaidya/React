import React, { Component } from 'react'
import PureComp from './PureComp';
import Regcomp from './Regcomp';
export class ParentComp extends Component {
    constructor(props)  {
      super(props)
    
      this.state = {
         name:"mohan"
      }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name:"mohan"
            });
            
        }, 3000); 
    }
    
    
  render() {
    console.log("parent comp render");
    return (
      <div>iam the parent comp  
         <Regcomp name={this.state.name}/>
         <PureComp name={this.state.name}/>
      </div>
     
    )
  }
}

export default ParentComp;