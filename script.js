function calcularNotas() {
    const valorSaque = parseInt(document.getElementById('valor-saque').value);
    const notasDisponiveis = [100, 50, 20, 10, 5, 2]; 
    let restante = valorSaque;
    let resultado = '';

    if (isNaN(valorSaque) || valorSaque < 10 || valorSaque > 600) {
        document.getElementById('resultado').innerText = 'Por favor, insira um valor válido entre 10 e 600 reais.';
        return;
    }

    notasDisponiveis.forEach(function(nota) {
        const quantidadeNotas = Math.floor(restante / nota);
        if (quantidadeNotas > 0) {
            resultado += `${quantidadeNotas} nota(s) de R$${nota}\n`;
            restante -= quantidadeNotas * nota;
        }
    });

    document.getElementById('resultado').innerText = resultado;
}

document.getElementById('calcular-btn').addEventListener('click', calcularNotas);
