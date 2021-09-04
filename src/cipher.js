const cipher = {

    codificar: function(mensaje1,desplazamiento) {

    let mensCodif = "";

    for(i=0; i<mensaje1.lenght; i++) {

        let numSecret = (mensaje1.charCodeAt(i) - 65 + desplazamiento)%26 +65;
        let mensScret = String.fromCharCode(numSecret);
        mensCodif = numSecret + mensScret;

        }

      console.log(mensCodif);
      return mensCodif;

    },
  
    decodificar: function(mensaje1,desplazamiento){

      console.log("función decodificar");

      return "PROBANDO2";

    }
};

export default cipher;
