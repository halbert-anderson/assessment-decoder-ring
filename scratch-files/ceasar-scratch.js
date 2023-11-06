


//==========================================================================================================================================

  function alphabetChecker(arrayToCheck, charToCheck){
    //const normalAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
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

 letterShifter(":",25, false);
  //========================================================================================================================================
   
function caesar(input, shift, encode = true) {
  // your solution code here
  let changedLetters=[];
  const charactersInInput =input.toLowerCase().split("");

 //console.log(charactersInInput);
  
 for(let numOfCharacter=0; numOfCharacter<charactersInInput.length;numOfCharacter++){
 const changedLetter = letterShifter(charactersInInput[numOfCharacter],shift,encode);
 changedLetters.push(changedLetter)
}

//console.log(changedLetters);
/* 
for(let aCharacter in charactersInInput){
        const changedLetter = letterShifter(`${aCharacter}`,shift,encode);
        changedLetters.push(changedLetter)
    }
    console.log(`${changedLetters}`);
*/
    

     const changedMessage=changedLetters.join("");
      

    return changedMessage; 
    //{
    //  caesar,changedMessage
    //};
  
  } 
//const newMessage= caesar("Look at me now! I'm making paper:.", 25 ,true);
//const nextMessage= caesar("knnj zs ld mnv! h'l lzjhmf ozodq:.", 25 ,false);
const newMessage= caesar("thinkful",3);
const nextMessage= caesar("thinkful" ,-3 );
const thirdMessage=  caesar("wklqnixo" ,3,false );
console.log(newMessage);
console.log(nextMessage);
console.log(thirdMessage);
