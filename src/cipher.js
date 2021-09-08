const cipher = {

    codificar: function(mensaje1,desplazamiento) {

    //console.log(mensaje1,desplazamiento);
    let mensEncod = "";

    for(let i=0; i<mensaje1.length; i++) {
      
        let numAcsii = mensaje1.charCodeAt(i); //letras transformadas a código Ascii
        
        //console.log("numAcsii: " + numAcsii);
        //console.log(desplazamiento);
        let newPosition = (numAcsii - 65 + desplazamiento)%26 + 65; //posición de las nuevas letras ya codificadas
        //console.log("nueva posición: "+ nuevPosicion);
        mensEncod += String.fromCharCode(newPosition);
        //console.log(mensCodif);
        }
      return mensEncod;
      },

  
    decodificar: function(mensaje1,desplazamiento){

        let mensDecod = "";
        
      for(let i=0; i<mensaje1.length; i++) {
          
        let numAcsii = mensaje1.charCodeAt(i); //letras transformadas a código Ascii
        //console.log("numAcsii: " + numAcsii);
        //console.log(-desplazamiento + 0);
        let parenthesis = numAcsii-65-desplazamiento;

        while(parenthesis<0){//while que obliga a que el valor del () sea siempre positivo
        parenthesis=parenthesis+26;
            }
        let newPosition = parenthesis%26 + 65; //posición de las nuevas letras ya codificadas
        //console.log("nueva posición: "+ newPosition);
        mensDecod += String.fromCharCode(newPosition);
        //console.log(mensCodif);
          }
      return mensDecod;
      }
};
export default cipher;
