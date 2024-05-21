// Crear el elemento input
var inputNum1 = document.getElementById("inputNum1");
var inputNum2 = document.getElementById("inputNum2");

// Crear el elemento botón
var buttonSumar = document.getElementById("btnSumar");
var buttonRestar = document.getElementById("btnRestar");
var buttonMulti = document.getElementById("btnMulti");
var buttonDivi = document.getElementById("btnDivi");
var resultado = document.getElementById("resultado");

// Agregar un evento clic al botón
buttonSumar.addEventListener("click", function () {
  var valor = inputNum1.value;
  var valor2 = inputNum2.value;
  var result = Sumar(+valor, +valor2);
  resultado.textContent = "resultado: " + result
});
buttonRestar.addEventListener("click", function () {
    var valor = inputNum1.value;
    var valor2 = inputNum2.value;
    var result = Restar(+valor, +valor2);
    resultado.textContent = "resultado: " + result
});
buttonMulti.addEventListener("click", function () {
    var valor = inputNum1.value;
    var valor2 = inputNum2.value;
    var result = Multiplicar(+valor, +valor2);
    resultado.textContent = "resultado: " + result
});
buttonDivi.addEventListener("click", function () {
    var valor = inputNum1.value;
    var valor2 = inputNum2.value;
    var result = Dividir(+valor, +valor2);
    resultado.textContent = "resultado: " + result
});

function Sumar(Num1, Num2) {
  var Sumita = Num1 + Num2;
    return Sumita;
}

function Restar(Num1, Num2) {
    var restar = Num1 - Num2;
      return restar;
  }

  function Multiplicar(Num1, Num2) {
    var multi = Num1 * Num2;
      return multi;
  }

  function Dividir(Num1, Num2) {
    var divi = Num1 / Num2;
      return divi;
  }
