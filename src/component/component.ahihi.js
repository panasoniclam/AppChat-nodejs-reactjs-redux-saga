import React from 'react'
class Test extends React.Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){
        console.log("ahihih")
    }
     render(){
         
         return (
             <div>
                 <button>click</button>
             </div>
         )
     }
    
}
export default Test