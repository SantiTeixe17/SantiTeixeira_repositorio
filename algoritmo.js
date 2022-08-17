let votacion_persona = "";
let cont_voto_macri = 0;
let cont_voto_alberto = 0;

while (votacion_persona != "SALIR"){
    votacion_persona = prompt ("Voto Macri o Alberto");
    
    if (votacion_persona == "Macri"){
        console.log ("Voto Macri")
        cont_voto_macri = cont_voto_macri +1;
    }

    else if ( votacion_persona == "Alberto"){
        console.log ("Voto Alberto")
        cont_voto_alberto = cont_voto_alberto +1;
    }

    else{
        console.log ("VOTO NULO");
    }

}

if (cont_voto_macri > cont_voto_alberto){
        console.log ("GANA Macri");
    }

    else if (cont_voto_alberto > cont_voto_macri){
        console.log ("GANA Alberto");
    }

    else {
        console.log ("EMPATE");
    }
    

console.log ( cont_voto_macri);
console.log ( cont_voto_alberto); 