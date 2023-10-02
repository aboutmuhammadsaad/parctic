// const arr=[2,45,2,53]
// console.log(arr.map((x)=> x.toString(2)));
// console.log(arr.map((x)=> x.toString(16)));

// async function getdata(){
//     return "Saad"
// }
// getdata().then((res) => console.log(res));

// const p1= new Promise ((resolve , reject) => {
//     setTimeout(()=>{
//         resolve("Hello from promise 1");
//     }, 5000);
// });

// const p2= new Promise ((resolve , reject) => {
//     setTimeout(()=>{
//         resolve("Hello from promise 2");
//     }, 10000);
// });

// async function handlePromise(){
//     console.log("Hello world");
//     const v1 =await p1;
//     console.log("from function 1st time ");
//     console.log(v1)
//     console.log("to function 2nd time ");

//     const v2 =await p2;
//     console.log("from function 3nd time ");
//     console.log(v2);

// }
// handlePromise();

for (var i = 0; i < 10; i++) {
    
    (function(i){
        setTimeout(function () {
        console.log(i);
        }, 100 * i);
   })(i)
}
  