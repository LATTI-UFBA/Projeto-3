// Função que inserirá os números na caixa de resultado quando os botões forem clicados
function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
};


// Função que limpará a caixa de resultado quando o botão "C" for clicado
function clean()
{
    document.getElementById('resultado').innerHTML = "";
};


// Função que apagará o último caracter inserido na caixa de resultado quando o botão "del" for clicado
function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
};


// Função que de fato realizará os cálculos descritos na caixa de resultado quando o botão "=" for clicado
function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    } else {
        document.getElementById('resultado').innerHTML = "Nada..."
    }
};