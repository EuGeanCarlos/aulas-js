/* var a = true;
var b = false;

var c = a && b;
*/

// EXEMPLO &&:

var idade = 35;

var maior20 = idade >= 20;
var menor30 = idade <= 30;
var entre = maior20 && menor30;

console.log('idade')

console.log("Maior que vinte", maior20);

console.log("Menor que trinta", menor30);

console.log("Entre 20 e 30", entre);

// EXEMPLO || OU: Um sistema de cinema que tenha os seguintes criterios:
// até 10 anos a pessoa entrará de graça OU se tiver mais que 65 anos.

var idade = 9;
var menor10 = idade <= 10;
var  maior65= idade >= 65; 

var gratuidade = menor10 || maior65;

console.log('idade', idade);

console.log("Maior que 65", maior65);

console.log("Menor que 10", menor10);

console.log("Tem direito a gratuidade", gratuidade);