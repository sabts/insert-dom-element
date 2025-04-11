const divinputElement = document.getElementById("input-div");
const fillInputElement = document.getElementById("name-input");
const inputButtonElement = document.getElementById("greet-btn");

const greetings = event => {
  const nameInputElement = document.createElement("h3");
  nameInputElement.textContent = "Hello, " + fillInputElement.value;

  divinputElement.append(nameInputElement.textContent);
};

inputButtonElement.addEventListener("click", greetings);
