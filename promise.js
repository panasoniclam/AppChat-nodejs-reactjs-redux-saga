// const add =(a,b,cb)=>{
//     let err,result
//     setTimeout(() => {
//         if(typeof a!='number' || typeof b!= 'number'){
//             err = 'loi roi nhe ku'
//             return cb(result,err)
//         }else{
//             result = a+b
//             return cb(result,err)
//         }
//     },2000);
// }
// add("3",4,(err,result)=>{
//     if(err){
//         console.log("loi"+err)
//     }else{
//         console.log(result)
//     }
// })

const add = (a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof a!='number' || typeof b!= 'number'){
                return reject('loi roi nhe')
            }
            return resolve(a+b)
        },2000)
    })
}

add(5,8).then(result=>add(result,99).then(a=>add(a,78).then(c=>console.log(c)),b=>console.log(b))

,result=>console.log(result))