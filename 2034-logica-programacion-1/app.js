alert("¡Bienvenida y bievenido a nuestro sitio web!");//Función para mensajes

//let numSecreto=45;
alert("A continuación me darás un número límite para poner un número secreto: ");
let numLimite=prompt("Ingresa el numero por favor: ");

let numSecreto=Math.floor(Math.random()*numLimite)+1;//Para obtener randoms en entero
console.log(typeof(numSecreto));
//console.log(numeroUsuario);//Para mostrar en al consola de F12
let numUsuario;
let flag=false;
let cont=0;
let intentos=5;
while (cont!=5) {

    numUsuario=prompt(`Indicame un número entre 1 y ${numLimite}: `);
    cont++;
    if (numSecreto==numUsuario) {
        console.log(`Felicidades, lo adivinaste, el número secreto es: ${numSecreto} y tuviste: ${cont} ${cont==1 ? "intento" : "intentos"}`);//CON USO DE PLANTILLA
        break;
    }
    else if (numUsuario>numSecreto)
    {
        console.log("Lo siento, pero no lo lograste, el numsero secreto es MENOR");
    }
    else if (numUsuario<numSecreto)
    {
        console.log("Lo siento, pero no lo lograste, el numsero secreto es MAYOR");
    }
}

console.log("Se te acabron tus intentos y/o el juego");//CON USO DE PLANTILLA



let diaSemana=prompt("Ingrese un día de la semana: ");
if (diaSemana=="Sábado"||diaSemana=="Domingo") 
{
    console.log("Buen finde semana");
}
else
{
    console.log("Buena semana!");
}

if (numUsuario>=0) {
    console.log(`El numero de usuario: ${numUsuario} es positivo`);
}
else
{
    console.log(`El numero de usuario: ${numUsuario} es NEGATIVO`);
}

console.log("Ahora veremos disminuir el numero secreto:");
while (numSecreto!=0) {
    console.log(`${numSecreto}`);
    numSecreto--;
}
