// let square = (a,b,h)=> (a+b)*h/2

// let add = (a,b,cb)=>{
//     setTimeout(()=>{
//         let err,result;
//         if(typeof a!= 'number' || typeof b!='number'){
//             err = 'tham so phai co kieu number'
//             return cb(err,result);
//         }
//        result= a+b
//       return    cb(err,result)
//     },1000)

// }
// console.log('dien tich'+square(2,3,2));
// add(4,5,(err,result)=>{
//     if(err) return console.log('loi'+err);
//     console.log('ket qua'+result)
// })
// let square = (a,b,h)=>(a+b)*h/2;
// let add = (a,b,cb)=>{
//     setTimeout(()=>{
//         let err,result
//         if(typeof a!= 'number' || typeof b!='number'){
//             err = 'phai la so'
//             return cb(err,result)
//         }
//         else{
//             result = a+b
//             return cb(err,result)
//         }
//     },1000)
// }
// add(2,"k",(err,result)=>{
//     if(err){
//         return  console.log(err)
//     }else{
//         return console.log(result)
//     }
// })

// let apromise = new Promise((resolve,reject)=>{
//     reject('khong thanh cong')
// })
// apromise.then((msg)=>console.log('thuc thi'+msg),msg=>console.log(msg))


let add = (a,b) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof a!= 'number' || typeof b!= 'number'){
                return reject('loi cong')
            } else{
                return resolve(a+b)
            }
        },2000)
    })
}
let mul = (a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
             if(typeof a!= 'number' || typeof b!= 'number'){
            return reject('moi nhan')
            }else{
            return resolve(a*b)
          }
        },2000)
    })
}
let dev = (a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof a!= 'number' || typeof b!='number'){
                return reject('loi chia')
            }else{
                return resolve(a/b)
            }
        },2000)
    })
}
let display = (A)=>{
    return new Promise(()=>console.log("ket qua"+ A))
}

let promise = async (a,b,h)=>{
         try{
            let A = await add(a,b);
            let B = await mul(A,h);
            let C = await dev(B,2);
            return   Promise.resolve(C)
            }catch(err){
            return    Promise.reject(err)
    }
}
promise("2",3,4)
.then(result=>console.log(result),err=>console.log(err))