//let titulo=document.querySelector('h1');
/*
* Document es un puente, entre html y jAVAsCRIPT
* query selector, selecciona una etiqueta de elemento
*/

//titulo.innerHTML='Juego del número secreto';


// let parrafo=document.querySelector('p');

// parrafo.innerHTML="Indica un número del 1 al limiteAleatorio: ";

let numSecreto;
let intentos;
let limiteAleatorio=10;

let listaNumerosGenerados=[];

function asignarTextoElemento(elemento,texto)
{
    let objetoHtml=document.querySelector(elemento);
    objetoHtml.innerHTML=texto;
    return;
}

function limpiarCaja()
{
    //Otra form a de seleccionar el id:
    document.querySelector('#valorUsuario').value='';
    return;
}

function verificarIntento()
{
    /*
    * Get element by id:
    */
    let numUsuario=parseInt(document.getElementById('valorUsuario').value);
    
    // console.log(numSecreto);
    // console.log(typeof(numSecreto));
    // console.log(numUsuario);
    // console.log(typeof(numUsuario));

    // === nos indica que la comparación SI O SI se debe hacer entre 2 elementos del mismo TIPO
    console.log(numSecreto===numUsuario);
    if (numSecreto===numUsuario) {
        asignarTextoElemento('p',`Usted acertó el número 🥳 con ${intentos} ${(intentos===1) ? "intento": "intentos"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        if (numSecreto>numUsuario) {
            asignarTextoElemento('p',"El número secreto es mayor a su número 🙄");
        }
        else if (numSecreto<numUsuario) {
            asignarTextoElemento('p',"El número secreto es menor a su número 🙄");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function generarNumeroSecreto()
{
    let numGenerado=Math.floor(Math.random()*limiteAleatorio)+1;//del 1 al limiteAleatorio
    console.log(listaNumerosGenerados);
    if (listaNumerosGenerados.length==limiteAleatorio) {
        console.log("Array is full!");
        asignarTextoElemento('p',"Ya se usaron todos los numeros aleatorios posibles 😪");
    }
    else{
        if (listaNumerosGenerados.includes(numGenerado)) 
        {
            return generarNumeroSecreto();
        }
        else
        {
            listaNumerosGenerados.push(numGenerado);
            console.log("returned");
            return numGenerado;
        }
    }
    
}


/*
EXTRA: 
* Função anônima	let saludo = function() { ... };
* Arrow function	let cuadrado = x => x * x;

*/

function condicionesIniciales()
{
    /**
     * Limpiar caja
     * Indicar el mensaje del intervalo
     * Generar el numero aleatorio
     * los intentos desde 0
     * y desactivar el boton de NuevoJuego
    */
    limpiarCaja();
    asignarTextoElemento('h1',"¡Juego del Numero Secreto!");
    asignarTextoElemento('p',`Indica un numero del 1 - ${limiteAleatorio}: `);
    numSecreto=generarNumeroSecreto();
    intentos=1;
    console.log(numSecreto);
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

function reiniciarJuego()
{    
    condicionesIniciales();
}


condicionesIniciales();