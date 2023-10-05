function mediaAluno() {

    console.log('Início do programa');

    // Declaração de variáveis
    const n1 = parseInt(document.getElementById('n1').value);
    const n2 = parseInt(document.getElementById('n2').value);
    const n3 = parseInt(document.getElementById('n3').value);

    // Cálculo da média
    media = (n1 + n2 + n3) / 3;

    document.getElementById('resultado').innerHTML = `A média do aluno é: ${media.toFixed(2)}`

    if(media < 7 && media >= 5){
        document.getElementById('resultado').innerHTML += "<br> E sua situação é: EXAME";
    } else if(media < 5){
        document.getElementById('resultado').innerHTML += "<br> E sua situação é: REPROVADO";
    } else {
        document.getElementById('resultado').innerHTML += "<br> E sua situação é: APROVADO";
    }


    console.log("Fim do programa.");
}