// Lógica da Programação
// Problema: Obter 3 notas de um aluno, calcular a média;
// Exibir a média e exibir a situação do alno: aprovado, reprovado;

console.log('Início do programa')

// Declaração de variáveis
const n1 = parseInt(prompt("Digite a primeira nota:"));
const n2 = parseInt(prompt("Digite a segunda nota:"));
const n3 = parseInt(prompt("Digite a terceira nota:"));

// Cálculo da média
media = (n1 + n2 + n3) / 3;

console.log("A 1° nota é:", n1);
console.log("A 2° nota é:", n2);
console.log("A 3° nota é:", n3);

console.log("A média do aluno é: " + media);   

if(media >= 5){
    window.alert("Você foi aprovado!")
} else {
    window.alert("Você foi reprovado")
}

console.log("Fim do programa.")
