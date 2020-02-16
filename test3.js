// const staircase = n => {
//     const line = Array(n + 1).fill(' ');
    //line[n] = ''; 
    // for (let i = n - 1; i >= 0; i--) {
    //   line[i] = '#';
    //   console.log(line.join(''));
    // }
    // console.log(line)
//   }
const test = n=>{
    const arr = Array(n+1).fill('')
    console.log(arr.join(''))
}
test(4)