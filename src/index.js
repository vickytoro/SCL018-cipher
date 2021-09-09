import cipher from './cipher.js';

    document.getElementById("cifrar").addEventListener("click", function(){

    let message1 = document.getElementById("boxText1").value;
    let desplazamiento= parseInt(document.getElementById("offset").value,10);
    let empty = cipher.encode(desplazamiento,message1.toUpperCase());
    if(empty===null){
        alert("Ingrese un diágnostico por favor");
        }
    else{
        document.getElementById("boxText2").value = cipher.encode(desplazamiento,message1.toUpperCase());
        }
    });

    document.getElementById("descifrar").addEventListener("click", function(){

    let message1 = document.getElementById("boxText1").value;
    let desplazamiento= parseInt(document.getElementById("offset").value,10);
    
    let empty=cipher.decode(desplazamiento,message1.toUpperCase());
    if(empty===null){
        alert("Ingrese un diágnostico por favor");
    }
    else{
        document.getElementById("boxText2").value = cipher.decode(desplazamiento,message1.toUpperCase());
    }

    });  


console.log(cipher);


