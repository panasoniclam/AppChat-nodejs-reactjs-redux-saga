method1 =  (req,res,next)=>{
    res.status(200).json({
         message:'you requested index project page'
    })
   
}
method2 =  (req,res,next)=>{
    res.status(200).json({
         message:'you requested index project page'
    })
   
}
method3 =  (req,res,next)=>{
    res.status(200).json({
         message:'you requested index project page'
    })
   
}
module.exports = {
    method1:this.method1,
    method2:this.method2,

    method3:this.method3
}