// Write your tests here!
const expect = require("chai").expect;
const polybiusModule = require("../src/polybius");
const polybius = require("../src/polybius");

describe("should tell if polybius is a function",()=>{
    it("should return true if polybius is a function",()=>{
        const actual=(typeof polybiusModule.polybius === "function");//true
      //  const expected=true;
        expect(actual).to.be.true;
    })

 })

describe("should tell if polybius codes a message by using a pair grid coordinates for each alphabet", ()=>{
    it("should return a string output when encoding",()=>{
        //polybius("thinkful"); //> "4432423352125413"
        const actual=polybiusModule.polybius("thinkful"); //> "4432423352125413"
        expect(actual).to.be.a.string;
    })

     it("should maintain spaces throughout",() =>{
        //polybius("3251131343 2543241341", false); //> "hello world"
        const actual=polybiusModule.polybius("3251131343 2543241341", false); //> "hello world"
        const expected="hello world"
        expect(actual).to.eql(expected); 
    })

    it("should ignore capital letters",()=>{
         //polybius("Hello world"); //> '3251131343 2543241341'
        const actual= polybiusModule.polybius("Hello world"); //> '3251131343 2543241341'
        const expected ='3251131343 2543241341'
    expect(actual).to.eql(expected);
    })

    it("should show both i and j when decoding either one",()=>{
       // polybius("4432423352125413", false); //> "th(i/j)nkful"
       const actual=polybiusModule.polybius("4432423352125413", false); //> "th(i/j)nkful"
       const expected ="th(i/j)nkful"
       expect(actual).to.eql(expected);
    })

   it("should,when decoding, have an even number ofcharacers in the string,excluding spaces,otherwise return flase",()=>{
    //polybius("44324233521254134", false); //> false
    const actual=polybiusModule.polybius("44324233521254134", false); //> false
       const expected =false
       expect(actual).to.be.false
   })
    
 })