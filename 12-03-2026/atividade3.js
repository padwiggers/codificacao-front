let preco = parseFloat(prompt("Digite o preço do produto:"));
let idade = parseInt(prompt("Digite a idade do cliente:"));

let precoFinal = preco;

if (idade > 60 && preco > 100) {
    let desconto = preco * 0.20;
    precoFinal = preco - desconto;
}

alert("Preço final: R$ " + precoFinal.toFixed(2));