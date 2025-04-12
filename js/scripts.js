//elementos 1
const divinputElement = document.getElementById("input-div");
const fillInputElement = document.getElementById("name-input");
const inputButtonElement = document.getElementById("greet-btn");

//elementos del 2
const divRangeElement = document.getElementById("rangeInput-div");
const rangeLabelElement = document.getElementById("range-label");
const rangeElement = document.getElementById('range');
const rangeButtonElement = document.getElementById("generate-button");

//elementos del 3
const divSupplyList = document.getElementById("abby-list-div");
const findButtonElement = document.getElementById("find-button");
const historyElement = document.getElementById("supply-history")

//elementos 4
const divCarsElement = document.getElementById('div-cars')
const dangerButtonElement = document.getElementById("danger-button")
const trafficZoneElement = document.getElementById("traffic-zone");
const warningTextElement = document.getElementById('warning-text')

const supplies = [
  'a medkit',
  'a flashlight with half battery',
  'some canned food',
  'a rusty knife',
  'a bottle of clean water',
  'a pack of bullets',
  'a piece of cloth (could be used as a bandage)',
  'a lighter',
  'an empty bottle (might be useful)',
  'some herbs (smell weird)',
  'a broken walkie-talkie',
  'a protein bar, still edible',
  'a map with strange markings'
  ];

  const failureTexts = [
    'Nothing but silence and dust. Abby returned empty-handed.',
    'No supplies today. The world remains unforgiving.',
    "She searched everywhere, but luck wasn't on her side."
    ];

    let day = 0;

    const cars = ['🚗', '🚕', '🚙'];

    let carsHistory = [];

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

//3️⃣ 🎮 Abby y su búsqueda de suministros

const abbyFindingSupplies = () =>{
  const dayJourney = document.createElement('li')
  const findingProbability = Math.random();

  day++
      if(findingProbability < 0.5){
        const randomSupply = supplies[Math.floor(Math.random() * supplies.length)];
       dayJourney.textContent = `Day ${day}: Abby found ${randomSupply}`
        console.log(randomSupply)
      } 
      else {
        const randomFailure =failureTexts[Math.floor(Math.random()*failureTexts.length)]
        dayJourney.textContent = `Day ${day}: ${randomFailure}`
         console.log(randomFailure)
         }
         historyElement.append(dayJourney);
}

//4️⃣ 🏃‍♀️💥 Bego Runner: Modo “Esquivar Coches” ON  //no lo he terminado, porque me trabe en el const de repating cars...
const repeatingCars = (car) => {
 if(carsHistory.length === 3 && car === car) /// primero innte hacer una funcion generica para cada coche, pero la advertencia me sale al segundo carro igual
  return warningTextElement.textContent =`Bego, please be careful! This car model ${car} is stalking you! 🚨` //queria que aqui me saliera el modelo del coche que se esta repidiendo pero siempre me sale el azul
  }

  //por los momentos esto genera sin problema los coches, pero como estoy con lo anterior, no he confirmado si el mensaje me da error o no
  const begoWatchOut = () => {
   
    const carsBehindBego = document.createElement('p');
  
    const randomCar = cars[Math.floor(Math.random() * cars.length)];
    carsHistory.push(randomCar)

    repeatingCars(cars[0]);
    repeatingCars(cars[1]);
    repeatingCars(cars[2]);
  
    carsBehindBego.textContent = randomCar;
    trafficZoneElement.append(carsBehindBego);

    //dangerButtonElement.addEventListener('click',() => {
    //warningTextElement.textContent = ""}
  };

inputButtonElement.addEventListener("click", greetings);
rangeElement.addEventListener("input",rangeValueInLabel)
rangeButtonElement.addEventListener("click", generateHRange);
findButtonElement.addEventListener("click",abbyFindingSupplies);
dangerButtonElement.addEventListener('click', begoWatchOut);
