// const squace = (a,b,h)=>(a+b)*h/2 ;
// const add =(a,b,cb)=>{
//     return setTimeout(()=>{
//         let err,result;
//         if(typeof a != 'number' || typeof b!= 'number'){
//             err = 'loi roi nhe'
//             return cb(err,undefined)
//         }
//         else{
//             result = a+b;
//             return cb(undefined,result)
//         }
//     },2000)
// }
// add(3,4,(err,result)=>{
//     if(err){
//         return console.log(err)
//     }else{
//         add(result,3,(e,res)=>{
//             if(err){
//                 return console.log(e)
//             }else{
//                 return console.log(res)
//             }
//         })
//     }
// })
// console.log("ahihii")

const add = (a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
             if(typeof a != 'number' || typeof b!= 'number'){
                 return reject('that bai')
             }
             else{
                 return resolve(a+b)
             }
        },2000)
    })
}

const mul = (a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof a!= 'number' || typeof b!= 'number'){
                return reject('loi nhan')
            }
            else{
                return resolve(a*b);
            }
        },2000)
    })
}
const dev  =(a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof a!='number' || typeof b!= 'number'){
                return reject('loi chia')
            }else{
                return resolve(a/b)
            }
        },2000)
    })
}

const promise = async (a,b,h)=>{
    try{
        let A = await add(a,b) ;
    let B = await mul(A,h);
    let C = await dev(B,2)
    return Promise.resolve(C)
    }
    catch(err){
        return Promise.reject(err)
    }
}

