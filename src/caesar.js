// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
// you can add any code you want within this function scope


//==========================================================================================================================================
//alphabetChecker takes in an array of of characters and a string character and checks to see if that string chracter is in the array
//it returns and object with a two key/values: isALetter is a boolean that is true if the string character is in the array  and
//alphabetPosition is a number that tells  what array index that the character was located at.
function alphabetChecker(arrayToCheck, charToCheck){
  let itemPosition=0; 
  const isAnAlphabet = arrayToCheck.find((arrayItemToCheck, itemPosInArray)=>{ if(arrayItemToCheck===charToCheck){itemPosition=itemPosInArray; return true;}})
  if(isAnAlphabet){
        return ({isALetter:true, alphabetPosition:itemPosition});
    }
  else{
        return ({isALetter:false, alphabetPosition:itemPosition});
   }
}
//const normalAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//const checkedItem=alphabetChecker(normalAlphabet,"z");
//console.log(checkedItem);


//======================================================================================================================================
//codeKey is a funciton that takes in an array and a shift number value and returns an array that is equal to the original array offset by the shift number
function codeKey(arrayToShift,shift){          
 const codedAlphabet =[];
 if(shift>0){
         for(let ltrPosit=0;ltrPosit<arrayToShift.length;ltrPosit++){
            if(ltrPosit+shift<arrayToShift.length){ 
                 codedAlphabet.push(arrayToShift[ltrPosit+shift]);
               } 
             else{
                 codedAlphabet.push(arrayToShift[ltrPosit+shift-arrayToShift.length])
              }      
          };
   }
 else if(shift<0){ 
         for(let ltrPosit=0;ltrPosit<arrayToShift.length;ltrPosit++){
              if(ltrPosit < -shift ){
                  codedAlphabet.push(arrayToShift[arrayToShift.length+ltrPosit+shift]);
             } 
             else{
                 codedAlphabet.push(arrayToShift[ltrPosit+shift]);
              }     
         };          
     
     }
return codedAlphabet;
}
//const normalAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//const heresTheKey=codeKey(normalAlphabet,25);
//console.log(heresTheKey);


//===================================================================================================================================
//letterCoder is a function that takes in two arrays for input, a starting arrays and an array that has been transformed(coded) from the orignial array,
// and it takes in an item, if the item is in the original array it is coded using the transformed Array as the key to the transformation.
function letterCoder(originalArray,changedArray,itemToCode){
  let letterPosition=0;
  let codedLetter=""; 
  const charToCheck= alphabetChecker(originalArray, itemToCode);        
      if(charToCheck.isALetter){     
          codedLetter= changedArray.find((alphabet,alphabetPosition)=>(alphabetPosition===charToCheck.alphabetPosition));
      }
      else{
           codedLetter=itemToCode;     
      }
//  console.log(codedLetter);
  return codedLetter;
} 


//========================================================================================================================
//letterShifter takes in a string character, a lowercase alphabet, it will shift it by shift amount and return the shifted value
function letterShifter(letterToShift,shift,encode=true){
   
 const normalAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
 const codedAlphabet = codeKey(normalAlphabet,shift);
 let letterPosition=0;
 let shiftedLetter="";
    if(encode){
        const encodedLetter= letterCoder(normalAlphabet,codedAlphabet,letterToShift);
        shiftedLetter= encodedLetter;  
      }
    else{
       const decodedLetter= letterCoder(codedAlphabet, normalAlphabet,letterToShift);
       shiftedLetter= decodedLetter;  
     }
    // console.log(shiftedLetter);
     return shiftedLetter;
}
//letterShifter(":",25, false);


//========================================================================================================================================
 function caesar(input, shift, encode = true) {
// your solution code here
try{
if(shift===0||shift>25||shift<-25||!shift){
  throw "shift value is invalid shift cannot equal 0, or be greater than 25, or be less than -25. ";
} else{
let changedLetters=[];
const charactersInInput =input.toLowerCase().split("");

//console.log(charactersInInput);

for(let numOfCharacter=0; numOfCharacter<charactersInInput.length;numOfCharacter++){
const changedLetter = letterShifter(charactersInInput[numOfCharacter],shift,encode);
changedLetters.push(changedLetter)
}

/* 
//couldn't figure out why this wouldn't work so I moved on with my life
//but I would like to know why something like this doesn't work at some point.
for(let aCharacter in charactersInInput){
      const changedLetter = letterShifter(`${aCharacter}`,shift,encode);
      changedLetters.push(changedLetter)
  }
*/
  
  const changedMessage=changedLetters.join("");
  return changedMessage; 
}
}
catch(error){

  console.log(`An error occurred ${error}`);
  return false;
}
 }
return { caesar, };

})();


module.exports = { caesar: caesarModule.caesar };