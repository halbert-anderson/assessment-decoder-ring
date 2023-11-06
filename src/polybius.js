// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
// you can add any code you want within this function scope

     //================================================================================================================================================================================================================================================================
     const codeKey= [{alphabet: "a", gridPosition: {xAxis:1,yAxis:1}},{alphabet:"b", gridPosition: {xAxis:2,yAxis:1}},{alphabet: "c", gridPosition: {xAxis:3,yAxis:1}},{alphabet: "d", gridPosition: {xAxis:4,yAxis:1}},{alphabet: "e", gridPosition: {xAxis:5,yAxis:1}},
     {alphabet: "f", gridPosition: {xAxis:1,yAxis:2}},{alphabet: "g", gridPosition: {xAxis:2,yAxis:2}},{alphabet: "h", gridPosition: {xAxis:3,yAxis:2}},{alphabet: "i", gridPosition: {xAxis:4,yAxis:2}},{alphabet: "j", gridPosition: {xAxis:4,yAxis:2}},{alphabet: "k", gridPosition: {xAxis:5,yAxis:2}},
     {alphabet: "l", gridPosition: {xAxis:1,yAxis:3}},{alphabet: "m", gridPosition: {xAxis:2,yAxis:3}},{alphabet: "n", gridPosition: {xAxis:3,yAxis:3}},{alphabet: "o", gridPosition: {xAxis:4,yAxis:3}},{alphabet: "p", gridPosition: {xAxis:5,yAxis:3}},
     {alphabet: "q", gridPosition: {xAxis:1,yAxis:4}},{alphabet: "r", gridPosition: {xAxis:2,yAxis:4}},{alphabet: "s", gridPosition: {xAxis:3,yAxis:4}},{alphabet: "t", gridPosition: {xAxis:4,yAxis:4}},{alphabet: "u", gridPosition: {xAxis:5,yAxis:4}},
     {alphabet: "v", gridPosition: {xAxis:1,yAxis:5}},{alphabet: "w", gridPosition: {xAxis:2,yAxis:5}},{alphabet: "x", gridPosition: {xAxis:3,yAxis:5}},{alphabet: "y", gridPosition: {xAxis:4,yAxis:5}},{alphabet: "z", gridPosition: {xAxis:5,yAxis:5}}];
     
     
   //======================================================================================================================================================================================================= 
    function itemsToCode(itemToCode, itemsKey, encode=true){
        const codedStringArray=[];
        let codedStringOutput="";
       
        if(encode){
        //encoding a readable string
              characterObject=itemsKey.find(keyObject => (keyObject.alphabet===itemToCode));
              if(characterObject){
                    codedStringArray.push(characterObject.gridPosition.xAxis);
                    codedStringArray.push(characterObject.gridPosition.yAxis); 
                    codedStringOutput=codedStringArray.join("");
                }
              else{  
                    codedStringOutput=itemToCode;
                };
        }
        else{
        //decoding a coded string
              const coordinatesForCharacterArray=itemToCode.split("");
              const desiredKeyObject=itemsKey.find(keyObject=>{;if(`${keyObject.gridPosition.xAxis}`===coordinatesForCharacterArray[0]&&`${keyObject.gridPosition.yAxis}`===coordinatesForCharacterArray[1]){return true;}});
               if(desiredKeyObject){
                  if(desiredKeyObject.alphabet===("i"||"j")){ 
                       codedStringOutput="(i/j)";
                    }
                  else{
                       codedStringOutput=desiredKeyObject.alphabet;
                   }
               }
              else{ 
                   codedStringOutput=itemToCode;;
              };
        }
    //console.log(codedStringOutput);
    return codedStringOutput
}



//================================================================================================================================================================================== 
function polybius(input, encode = true) {
  // your solution code here
  try{
      const inputWithNoSpaces=input.replace(" ", "");
      const isEven=inputWithNoSpaces.length%2;           
      if(!encode&&isEven){
          throw "input needs to be an even number of characters not including spaces";
        }
      else {
            let changedCharacters=[];
            const charactersInInput =input.toLowerCase().split("");    
            if(encode){
                for(let numOfCharacter=0; numOfCharacter<charactersInInput.length;numOfCharacter++){
                    const changedCharacter = itemsToCode(charactersInInput[numOfCharacter],codeKey,encode);
                    changedCharacters.push(changedCharacter)
                 }
              }
            else{
                for(let numOfCharacter=0; numOfCharacter<charactersInInput.length;numOfCharacter+=2){
                  if(charactersInInput[numOfCharacter]===" "){
                      const unChangedCharacter =charactersInInput[numOfCharacter];
                      changedCharacters.push(unChangedCharacter);
                      numOfCharacter-=1;
                    }
                  else{                
                      const gridCharacters =charactersInInput[numOfCharacter]+charactersInInput[numOfCharacter+1];
                      const changedCharacter = itemsToCode(gridCharacters,codeKey,encode);
                      changedCharacters.push(changedCharacter)
                    }
                  } 
              }
          const changedMessage=changedCharacters.join("");
          return changedMessage;
            }
    }
   catch(error){ 
        console.log(`An error occurred ${error}`);
         return false;
    }
}
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
