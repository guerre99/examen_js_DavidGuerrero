// EJERCICIO 1

function numLetra (frase,letra){
    let contador = 0;
    for(i=0;i<frase.length;i++){
        if(arr[i] == letra){
            contador++
        }
    }
    return contador;
}

let frase = "hola mundo";
let letra ="o";

console.log(numLetra(frase,letra));