const $textoValue = document.querySelector('.textovalue')
const $buttonverify = document.querySelector('.buttonverify')
const $resetbuttonverify = document.querySelector('.reset-buttonverify')

let contadorDeVogais = 0;
console.log($textoValue)

$buttonverify.addEventListener('click', function() {
    contaVogais($textoValue.value)
})

$resetbuttonverify.addEventListener('click', function() {
    $textoValue.value = ''
    contadorDeVogais = 0
})


function contaVogais(frase) {
    console.log(frase)
    for (let l = 0; l < frase.length; l++) {

        if (frase[l] == 'a' || frase[l] == 'A') {
            contadorDeVogais++;

        } else if (frase[l] == 'e' || frase[l] == 'E') {
            contadorDeVogais++;
        } else if (frase[l] == 'i' || frase[l] == 'I') {
            contadorDeVogais++;
        } else if (frase[l] == 'o' || frase[l] == 'O') {
            contadorDeVogais++;
        } else if (frase[l] == 'u' || frase[l] == 'U') {
            contadorDeVogais++;
        }

    }
    alert(contadorDeVogais)
}
// contaVogais("gabrielly")