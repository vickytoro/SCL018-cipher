import cipher from './cipher.js';

    document.getElementById("cifrar").addEventListener("click", function(){


        let mensaje1 = document.getElementById("boxText1").value;
        let desplazamiento= parseInt(document.getElementById("offset").value,10);
        console.log(mensaje1,desplazamiento);
        document.getElementById("boxText2").value = cipher.codificar(mensaje1.toUpperCase(),desplazamiento);

    });

    document.getElementById("descifrar").addEventListener("click", function(){

        let mensaje1 = document.getElementById("boxText1").value;
        let desplazamiento= parseInt(document.getElementById("offset").value,10);
        document.getElementById("boxText2").value = cipher.decodificar(mensaje1.toUpperCase(),desplazamiento);

    });  


console.log(cipher);
