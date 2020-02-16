import React from 'react'
// import Test from './component.test'
// import { Provider } from 'react-redux'
// import{createStore} from 'redux'
// import myReducer from './../reducers/reducer.test'
// const store = createStore(myReducer)
class App extends React.Component{
    render(){
        return(
            <div>
               {/* <Provider store={store}>  */}
                       <Test/>
                {/* </Provider>   */}
            </div>
        )
    }
}
export default App