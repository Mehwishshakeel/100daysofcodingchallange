// day 48
//Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds.
const helloWorld=()=>{
    return new Promise((resolve,reject)=>{
 setTimeout(()=>{
resolve("Hello,World!!")
 },2000)
    })
}
helloWorld()
.then((response)=>{
    console.log(response);
})

// Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
let isVictory = false;
const Cricket=()=>{
    return new Promise((resolve,reject)=>{
        if(isVictory){
            setTimeout(()=>{
resolve("We Won");},1500);
        }
        else{
            setTimeout(()=>{
            reject("We LOst")},1500)
        }
    });
};
Cricket()
.then((response)=>{
    console.log(response);
})
.catch((err)=>{
    console.log(err);
})

// Question 144: Explain the use of the Promise.all() method with an example.
const promise1= Promise.resolve(3);
const promise2=  Promise.resolve(78);
const promise3 = new Promise((resolve,rejection)=>{
setTimeout(()=>{
    resolve("mee")
},2000)
})
Promise.all([promise1,promise2,promise3]).then((resolvedValue) => {
    console.log(resolvedValue)
});