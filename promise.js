// const add =(a,b,cb)=>{
//     setTimeout(()=>{

//         let err ,result;
//         if(typeof a!= 'number' || typeof b!= 'number'){
//             err = 'loi '
//             return cb(err,result)
//         }else{
//             result =a+b
//             return cb(err,result)
//         }
//     },2000)
     
// }
// add(1,2,(err,result)=>{
//     if(err){
//         return console.log(err)
//     }else{
//         add(result,4,(e,res)=>{
//             if(e){
//                 return console.log(e)
//             }else{
//                 return console.log(res)
//             }
//         })
//     }
// })
// const apromse = new Promise(()=>console.log(apromse))
// console.log("kddkkd")
// const apromise = new Promise((resolve,reject)=>{
//     // resolve('thanh cong')
//     reject('thanh bai')
// })
// apromise.then(result=>console.log(result),err=>console.log(err))

// let add = (a,b)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(typeof a!= 'number' || typeof b!='number'){
//                 return reject('loi')
//             }
//             else{
//                 return resolve(a+b)
//             }
//         },2000)
//     })
// }
// add(2,3)
// .then(result=>add(result,4))
// .then(result=>add(result,8))
// .then(result=>console.log(result))
// .catch(err=>console.log(err))

let add = (a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof a!= 'number' || typeof b!='number'){
                return reject('loi cong')
            }else{
                return resolve(a+b)
            }
        },2000)
    })
}
let mul = (a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof a!= 'number' || typeof b!='number'){
                return reject('loi nhan')
            }else{
                return resolve(a*b)
            }
        },2000)
    })
}
let div =(a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof a!= 'number' || typeof b!='number'){
                return reject('loi nhan')
            }else{
                return resolve(a/b)
            }
        },2000)
    })
}

let test = async(a,b,h)  =>{
   try{
    let A =  await add(a,b) ;
    let B =await mul(A,h);
    let C = await div(B,2);
    return Promise.resolve(C)
   }catch(err){
        return Promise.reject(err)
   }
}
test("2","3","4")
.then(result=>console.log(result),err=>console.log(err))