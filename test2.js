const test  = arr =>{
    let am = 0 ,duong =0,zero = 0;
     arr.map((value,index)=>{
         if(value<0){
             am+=1;
         }else if(value>0){
             duong+=1
         }else{
             zero+=1
         }
        
     }) 
     const len = arr.length;
     const result1  = am/len;
     const result2 = duong/len ;
     const result3 = zero/len;
     console.log(result1,result2,result3)
}
 test([-4, 3 ,-9, 0 ,4 ,1])