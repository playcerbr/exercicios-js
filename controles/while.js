function getInteiroAleatorio(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 1

while (opcao != -1) {
    opcao = getInteiroAleatorio(0, 10)
   console.log(`Opção Escolhida foi ${opcao}`)
}
console.log('Até a Proxima')