/*
let opcao = parseInt(prompt("digite uma opçao"))//convertendo para int uma valor
                                                // que estava previamente em string

switch(opcao){
    case 1:
        document.write("primeira opçao");
        break;
    case 2:
        document.write("Segunda opçao");
        break;
    case 3:
        document.write("Terceira opçao");
    default:
        document.write("Nenhuma das opçoes validas");
        break;
}

*/
// incremento e decremento

let valor = 7

document.write(valor);
document.write("<br><br>");
valor ++

document.write(valor);

document.write("<br><br>");

let valor2 = 7

document.write(valor2);
valor2 = valor2 - 2

document.write("<br><br>");
document.write(valor2);
document.write("<br><br>")

//usando or

for(let i = 0; i<10; i++){
    document.write("o valor é ", i)
    document.write("<br><br>");
}

//usando for com array

let carros=["Gol", "Fusca", "HB20", "Corsa"];

for(let i = 0; i < carros.length; i++){
    document.write(carros[i]);// utilizamos o [] paratrazer o array
    document.write("<br><br>")
}
