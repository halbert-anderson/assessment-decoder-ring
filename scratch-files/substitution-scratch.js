function allUniqueCharacters(charactersString){
    const charactersArray=charactersString.split("");
   //console.log(charactersArray);
    let isUnique=true;
    for(let characterIndex=0;characterIndex< charactersArray.length;characterIndex++){
        let otherCharactersIndex=characterIndex+1;
       // console.log(characterIndex);
       // console.log(otherCharactersIndex);
        let remainingArrayLength=charactersArray.length-characterIndex;
        for(otherCharactersIndex;otherCharactersIndex<charactersArray.length;otherCharactersIndex++){
           // console.log(`arr[${characterIndex}]: ${charactersArray[characterIndex]} and arr[${otherCharactersIndex}]: ${charactersArray[otherCharactersIndex]}`);
            if(charactersArray[characterIndex]===charactersArray[otherCharactersIndex]){
             isUnique=false;
            }
            }
    }
return isUnique;
  }
//console.log(allUniqueCharacters("abcdefgg"));//false
//console.log(allUniqueCharacters("abcabcabcabcabcabcabcabcyz"));//false


//==========================================================================================================================
//the codeKey function takes a string of length 26 and does a 1 for 1 transpositon with the alphabet(lower cased) and returns 
//and array of 26 objects. Each object containing a letter of the alphabet and the character it is transposed to.

function codeKey(keyString){
    const codeKeyArray=[];
    const normalAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const keyCharactersArray=keyString.split("");
    //console.log(keyCharactersArray);
    for(let keyIndex=0;keyIndex<normalAlphabet.length;keyIndex++){
        const keyObject={}; 
        keyObject["alphabet"]=normalAlphabet[keyIndex];
        keyObject["keyCharacter"]=keyCharactersArray[keyIndex];
        codeKeyArray.push(keyObject)
    }
  //  console.log(codeKeyArray);
return codeKeyArray;
}
//const inputArr =codeKey("$wae&zrdxtfcygvuhbijnokmpl"); 

//console.log(inputArr);

//==================================================================================================================
//

function stringCoder(input,codedObjectArray,encode=true){
    const inputStringArray=input.split("");
    const outputArray=[]

//  substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false); //> "message"
if(encode){
    for(objectIndex=0;objectIndex<input.length;objectIndex++){
        const matchedObject=codedObjectArray.find(codedObject => (codedObject.alphabet===inputStringArray[objectIndex]));
     //console.log(matchedObject);
     const {keyCharacter} = matchedObject;//used object destructuring here
     //console.log(keyCharacter);
         const translatedCharacter = keyCharacter;
      //console.log(translatedCharacter);
          outputArray.push(`${translatedCharacter}`);
       //  console.log(outputArray);
    }
//console.log(outputArray);
//console.log(outputArray.join(""));
const tranformedString = outputArray.join("");
//console.log(tranformedString)}
}
else{
    for(objectIndex=0;objectIndex<input.length;objectIndex++){
   const matchedObject=codedObjectArray.find(codedObject => (codedObject.keyCharacter===inputStringArray[objectIndex]));
   //console.log(matchedObject);
   const {alphabet} = matchedObject;
   //console.log(keyCharacter);
       const translatedCharacter = alphabet;
    //console.log(translatedCharacter);
        outputArray.push(`${translatedCharacter}`);
     //  console.log(outputArray);

};}

//console.log(outputArray);
//console.log(outputArray.join(""));
const tranformedString = outputArray.join("");
//console.log(tranformedString)}
return tranformedString;
}
//stringCoder("message", inputArr);


//===================================================================================================================

function substitution(input, alphabet, encode = true) {
      // your solution code here
  
      try{
            if(!allUniqueCharacters(alphabet)){
                throw `The string input alphabet:${alphabet} is not composed of unique characters`; 
            }
            else if(!(alphabet.length===26)){
                throw `The length of the string input alphabet:${alphabet} is not exactly 26 characters long.`
            }
            else{

           const codeKeyObjectArray= codeKey(alphabet);
           const transformedString= stringCoder(input,codeKeyObjectArray,encode)
          // console.log(transformedString);
           return transformedString;
            }
        }
      catch(error){ 
            console.log(`An error occurred ${error}`);
            return false;
        } 
  
    } 

    console.log(substitution("message","$wae&zrdxtfcygvuhbijnokmpl"));
    console.log(substitution("y&ii$r&","$wae&zrdxtfcygvuhbijnokmpl",false));