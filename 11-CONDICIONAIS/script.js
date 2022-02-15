var nota1 = 5.0; 
var nota2 = 5.8;

var media = (nota1 + nota2) / 2;

var conceito =""

if (media >= 8){
    
    conceito = "Ótimo";

}
else if(media >= 6.5){

    conceito = "regular";

}
else (media < 6.5)

    conceito = "mau";

console.log(media);
console.log(conceito);

switch (conceito) {
    case "Ótimo":
        console.log("parabéns");
        break;
    case "regular": 
        console.log("Muito bem!")
        break;
    case "mau":
        console.log("Estude mais um pouco")
        break;

    default:
        console.log("Houve algum erro")
        break;
}