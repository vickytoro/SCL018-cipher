import cipher from './cipher.js';

    document.getElementById("cifrar").addEventListener("click", function(){

        let mensaje1 = document.getElementById("boxText1").innerHTML.toUpperCase();
        let desplazamiento= document.getElementById("offset").value;
        document.getElementById("boxText2").value = cipher.codificar(mensaje1,desplazamiento);
    });

    document.getElementById("descifrar").addEventListener("click", function(){

        let mensaje1 = document.getElementById("boxText1").innerHTML;
        let desplazamiento= document.getElementById("offset").value;
        document.getElementById("boxText2").value = cipher.decodificar(mensaje1,desplazamiento);

    });  


console.log(cipher);
