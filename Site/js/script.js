function calcular(){
    var n1 = document.getElementById("n1")
    var n2 = document.getElementById("n2")
    var n3 = document.getElementById("n3")
    var num1 = Number(n1.value)
    var num2 = Number(n2.value)
    var num3 = Number(n3.value)
    var resultado = (num2*num3)/num1
    var escrever = document.getElementById("resultado")
    escrever.innerText = resultado
}