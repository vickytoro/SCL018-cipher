const cipher = {

    encode: function(desplazamiento,message1) {
      if (desplazamiento === null || desplazamiento === 0 ) {
        throw new TypeError();
        }

    let mensEncod = "";

      for(let i=0; i<message1.length; i++) {
      
        let numAcsii = message1.charCodeAt(i);
        if(numAcsii>=65 && numAcsii<=90){
          let newPosition = (numAcsii - 65 + desplazamiento)%26 + 65; //posición de las nuevas letras ya codificadas
          mensEncod += String.fromCharCode(newPosition);
        }

        else if (numAcsii===209){
          mensEncod += String.fromCharCode(numAcsii);
        }

        else {
          mensEncod += String.fromCharCode(numAcsii);
        }
        }
        return mensEncod;
        },

  decode: function(desplazamiento,message1){

    if (desplazamiento === null || desplazamiento === 0 ) {
      throw new TypeError();
      }

        let mensDecod = "";
        
    for(let i=0; i<message1.length; i++) {
          
        let numAcsii = message1.charCodeAt(i); 
        if(numAcsii>=65 && numAcsii<=90){
          
          let parenthesis = numAcsii-65-desplazamiento;

        while(parenthesis<0){
        parenthesis=parenthesis%26 +26;
            }
        let newPosition = parenthesis%26 + 65; 
        mensDecod += String.fromCharCode(newPosition);
        }
        else if (numAcsii===209){

          mensDecod += String.fromCharCode(numAcsii);
        }

        else{
          mensDecod += String.fromCharCode(numAcsii);
        }
        
        }
      return mensDecod;
      }
};
export default cipher;
