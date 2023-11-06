// Write your tests here!
const expect = require("chai").expect;
const caesarModule = require("../src/caesar");
const caesar = require("../src/caesar");





 describe("should tell if caesar is a function",()=>{
    it("should return true if caesar is a function",()=>{
        const actual=(typeof caesarModule.caesar === "function");//true
      //  const expected=true;
        expect(actual).to.be.true;
    })

 })

 describe("should tell if ceasar codes a message by shifting the alphabet", ()=>{
    it("should return false if the shift value isn't present, equal to 0, less than -25, or greater than 25", ()=>{
       // caesar("thinkful"); //> false
       // caesar("thinkful", 99); //> false
       // caesar("thinkful", -26); //> false   
const actual=caesarModule.caesar("thinkful",-26); //> false
//const expected= false;
expect(actual).to.be.false;
    })

     it("should ignore nonalpahabet characters",() =>{
      //  caesar("This is a secret message!", 8); //> 'bpqa qa i amkzmb umaaiom!'
        const actual=caesarModule.caesar("#This is a secret message!", 8); //> '#bpqa qa i amkzmb umaaiom!')
        const expected="#bpqa qa i amkzmb umaaiom!"
    expect(actual).to.eql(expected);
    
    })

    it("should ignore capital letters",()=>{
         //caesar("BPQA qa I amkzmb umaaiom!", 8, false); //> 'this is a secret message!'
    const actual=caesarModule.caesar("BPQA qa I amkzmb umaaiom!", 8, false); //> 'this is a secret message!'
    const expected ='this is a secret message!'
    expect(actual).to.eql(expected);
    })
    it("should wrap around to the front of the alphabet if a letter is shifted so that it goes off the alphabet (e.g., a shift of 3 on the letter z becomes c",()=>{
    const actual=caesarModule.caesar("z",3)//> c
    const expected ="c";
    expect(actual).to.eql(expected);
    })
    
 })
 
 