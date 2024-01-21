
let titulo=document.querySelector('h1');
titulo.innerHTML="Hora del Desafío";

function consoleClickeado()
{
    console.log("El botón fue clickeado");
}

function promptClickeado()
{
    let ciudad=prompt("Ingrese una ciudad de Brasil: ");
    alert(`Estuve en ${ciudad} y me acordé de ti`);
}

function alertClickeado()
{
    alert("Yo amo JS");
}

function sumClickeado()
{
    let num1=Number(prompt("Ingrese el primer número: "));
    let num2=Number(prompt("Ingrese el segundo número: "));
    let resultado=num1+num2;
    alert(`La suma de sus números es: ${resultado}`);
}