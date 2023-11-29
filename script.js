let display = document.getElementById('display');

function inserir(value){
    display.value += value;
}

function limpar() {
    display.value = '';
}

function apagar() {
    display.value = display.value.substring(0, display.value.length - 1);
}

function calcular(calculo) {
    display.value = eval(display.value)
}