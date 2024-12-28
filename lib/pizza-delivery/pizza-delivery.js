const COW_OPEN_EYE = String.raw` 
  ______________
< pizza delivery >
  --------------
        \   ^__^
         \  (oo)\_______
            (__)\ 🍕🍕🍕 )\/\
                ||----w |
                ||     ||`;
const COW_CLOSE_EYE = String.raw` 
  ______________
< pizza delivery >
  --------------
        \   ^__^
         \  (--)\_______
            (__)\ 🍕🍕🍕 )\/\
                ||----w |
                ||     ||`;

function cowOpenEye() {
  document.getElementById("pizza-delivery").getElementsByClassName("cow")[0].innerText = COW_OPEN_EYE;
}
function cowCloseEye() {
  document.getElementById("pizza-delivery").getElementsByClassName("cow")[0].innerText = COW_CLOSE_EYE;
}

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function cowBlinkEyeTask() {
  while(true) {
    await delay(200);
    cowCloseEye();
    await delay(200);
    cowOpenEye();

    await delay(5000);

    await delay(200);
    cowCloseEye();
    await delay(200);
    cowOpenEye();

    await delay(200);
    cowCloseEye();
    await delay(200);
    cowOpenEye();

    await delay(5000);
  }
}

function random(min, max) {
  return Math.random() * (max - min + 1) + min;
}

function newPizza() {
    let pizza = document.createElement("a");
    // pizza.href = "";
    pizza.className = "pizza rotate-shrink-disappear";
    pizza.innerText = "🍕";
    let maxPizzaX = document.getElementById("pizza-delivery").clientWidth;
    let maxPizzaY = document.getElementById("pizza-delivery").clientHeight;
    let pizzaX = random(0, maxPizzaX);
    let pizzaY = random(0, maxPizzaY);
    pizza.style.left = `${pizzaX}px`;
    pizza.style.top = `${pizzaY}px`;
    pizza.style.filter = `hue-rotate(${random(0, 359)}deg)`;
    return pizza;
}

let pizzas = [];
function handleSpawnPizza() {
  document.addEventListener("click", function(_event) {
    let pizza1 = newPizza();
    let pizza2 = newPizza();
    let pizza3 = newPizza();
    document.getElementById("pizza-delivery").appendChild(pizza1);
    document.getElementById("pizza-delivery").appendChild(pizza2);
    document.getElementById("pizza-delivery").appendChild(pizza3);

    // Recycle rotten pizza
    pizzas = pizzas.filter(pizza => {
      if (getComputedStyle(pizza).opacity === "0") {
        pizza.remove();
        return false;
      }
      return true;
    });

    pizzas.push(pizza1);
    pizzas.push(pizza2);
    pizzas.push(pizza3);
  });
}

function main() {
  cowOpenEye();
  cowBlinkEyeTask();
  handleSpawnPizza();
}

document.addEventListener("DOMContentLoaded", main);
