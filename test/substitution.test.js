// Write your tests here!
const expect = require("chai").expect;
const substitutionModule = require("../src/substitution");
const substitution = require("../src/substitution");

describe("should tell if substitution is a function",()=>{
    it("should return true if substitution is a function",()=>{
        const actual=(typeof substitutionModule.substitution === "function");//true
        expect(actual).to.be.true;
    })

 })

describe("should tell if the function substitution() codes a message by transposing the alphabet", ()=>{

    it("should return false if the alphabet parameter is not a string of exactly 26 characters", ()=>{
       //substitution("thinkful", "short"); //> false
        const actual=substitutionModule.substitution("thinkful", "short"); //> false
        expect(actual).to.be.false;
    })

    it("should return false if the alphabet parameter string does not have 26 unqiue characters ",()=>{
       //substitution("thinkful", "abcabcabcabcabcabcabcabcyz"); //> false
       const actual=substitutionModule.substitution("thinkful", "abcabcabcabcabcabcabcabcyz"); //> false
       expect(actual).to.be.false;
    })
     it("should include spaces and letters as well as special characters such as #, $, *, etc.,in the input",() =>{
      //  substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false); //> "message"
      //  substitution("message", "$wae&zrdxtfcygvuhbijnokmpl"); //> "y&ii$r&"
        const actual=substitutionModule.substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false); //> "message"
        const expected= "message";
        expect(actual).to.eql(expected); 
    })
    it("should maintain spaces throughout",() =>{
        //substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); //> 'elp xhm xf mbymwwmfj dne'

        const actual=substitutionModule.substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); //> 'elp xhm xf mbymwwmfj dne'

        const expected='elp xhm xf mbymwwmfj dne'
        expect(actual).to.eql(expected); 
    })

    it("should ignore capital letters",()=>{
        //substitution("THinkful", "xoyqmcgrukswaflnthdjpzibev"); //> 'jrufscpw'
        //substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false); //> 'thinkful'
        const actual=substitutionModule.substitution("THinkful", "xoyqmcgrukswaflnthdjpzibev"); //> 'jrufscpw'
        const expected ='jrufscpw';
        expect(actual).to.eql(expected);
      })
   
    
 })
 