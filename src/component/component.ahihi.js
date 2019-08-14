import React from 'react'
import Lam from './component.lam'
class Test extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            lamnn:"ahehe"
        }
    }
  
    handleState(){
        this.setState({
            lamnn:"sss"
        })
    }
   
     render(){
        console.log(this.props.location)
         return (
             <div>
                 <button onClick={this.handleState} >click</button>
                  <h1>{this.state.lamnn} </h1>
             </div>
         )
     }
    
}
export default Test