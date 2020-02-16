import * as TYPE from './../constands/index'
const initState = {
    lamnn:"ahihi"
}
export default (state=initState,action)=>{
    switch(action.type){
        case TYPE.TEST:
            return{
                ...state,
                lamnn:'kskskksk'
            }
        default:break
    }
    return state
}