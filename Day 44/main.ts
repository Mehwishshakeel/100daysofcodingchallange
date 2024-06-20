// Day 44
// Question 130: Explain how to export a function from one JavaScript file and import it into another file.
// in file main.ts
export const add = (a:number,b:number):number =>a+b;
// This line exports an add function from main.ts

// Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.
export class person {
    name:string;
    constructor(name:string){
        this.name=name
    }
greet(){
    console.log(`Hello!! my name is ${this.name}`);
}
};


// Question 132: Discuss the difference between default and named exports in JavaScript modules.
export const utilone =()=>{
    /*....*/
}

export const utiltwo = () =>{
    /*.....*/
};

export default class calculator {
    // class definition
}
