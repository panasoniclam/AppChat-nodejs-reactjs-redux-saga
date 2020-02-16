import React from 'react'
// import { connect } from 'react-redux';
class Test extends React.Component{
   
    render(){
        return(
            <div>
                <button onClick={this.handle}>Click</button>
                <h1>{this.props.lamnn}</h1>
            </div>
        )
    }
}
// const mapStateToProps = (state)=>{
//     return{
//         lamnn:state.lamnn
//     }
// }
// const mapDispatchToProps = (dispatch,props)=>{
//     return{

//     }
// }
export default  (Test)