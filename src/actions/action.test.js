import * as TYPE from './../constands/index'
const actionTest = data =>({
    type:TYPE.TEST,
    data
})
const checkuser = (email,password)=>{
    const loginInfo = {
        email:email,
        password:password
    }
    return dispatch=>{
        dispatch(biginFetch());
    }
}
export {
    actionTest
}