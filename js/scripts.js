//elementos del primero
const divinputElement = document.getElementById("input-div");
const fillInputElement = document.getElementById("name-input");
const inputButtonElement = document.getElementById("greet-btn");

//elementos del segundo
const divRangeElement = document.getElementById("rangeInput-div");
const rangeLabelElement = document.getElementById("range-label");
const rangeElement = document.getElementById('range');
const rangeButtonElement = document.getElementById("generate-button");

//1️⃣Crea un input donde el usuario pueda escribir su nombre y un botón con el texto "Say hello". Al pulsar el botón, se debe crear e insertar un elemento h2 con el texto "Hello, [nombre]".
const greetings = event => {
  const inputMinLength = 3;

  if (fillInputElement.value.length >= inputMinLength) {
    const nameInputElement = document.createElement("h2");

    nameInputElement.textContent = "Hello, " + fillInputElement.value;

    divinputElement.append(nameInputElement);
  } else {
    console.log("corto, tiene que ser 3 de largo");
  }
}

//2️⃣Imagina que tienes un control deslizante que te permite elegir el nivel de poder de un encabezado del 1 al 6.
// Cuanto más alto el número… más pequeño el encabezado.
// Cuando hagas clic en el botón, se generará un encabezado con la etiqueta correspondiente (h1...h6) y el texto "I am an hX", donde X es el número elegido.
const rangeValueInLabel = (event) =>{
  const rangeValue = event.target.value;
  rangeLabelElement.textContent = rangeValue;}

const generateHRange = (event) => {
if (rangeElement.value === '1') {
  const h1Element = document.createElement('h1')
  h1Element.textContent = "I am an h" + rangeElement.value;
  divRangeElement.append(h1Element);
  console.log("h1 :)")
}
else if (rangeElement.value === '2') {
  const h2Element = document.createElement('h2')
  h2Element.textContent = "I am an h" + rangeElement.value;
  divRangeElement.append(h2Element);
  console.log("h2 :)")
}
else if (rangeElement.value === '3') {
  const h3Element = document.createElement('h3')
  h3Element.textContent = "I am an h" + rangeElement.value;
  divRangeElement.append(h3Element);
  console.log("h3 :)")
}
else if (rangeElement.value === '4') {
  const h4Element = document.createElement('h4')
  h4Element.textContent = "I am an h" + rangeElement.value;
  divRangeElement.append(h4Element);
  console.log("h4 :)")
}
else if (rangeElement.value === '5') {
  const h5Element = document.createElement('h5')
  h5Element.textContent = "I am an h" + rangeElement.value;
  divRangeElement.append(h5Element);
  console.log("h5 generado :)")
}
else{
  const h6Element = document.createElement('h6')
  h6Element.textContent = "I am an h" + rangeElement.value;
  divRangeElement.append(h6Element);
  console.log("h6 generado :)")
}
}

//3️⃣ 🎮 Abby y su búsqueda de suministrosDescripción del ejercicio:
// Abby está en su travesía postapocalíptica y cada día sale en busca de suministros. Tienes que:
// Crear un botón con el texto "Find supplies".
// Debajo, un <ul> vacío con id "supply-history".
// Cada vez que se haga clic en el botón:
// Se incrementa un contador de días.
// Se elige aleatoriamente si encuentra algo o no encuentra nada. (Tendrá una probabilidad del 50% de encontrar algo útil)
// Se inserta un li en el historial con un mensaje narrativo personalizado según el resultado.


inputButtonElement.addEventListener("click", greetings);
rangeElement.addEventListener("input",rangeValueInLabel)
rangeButtonElement.addEventListener("click", generateHRange);