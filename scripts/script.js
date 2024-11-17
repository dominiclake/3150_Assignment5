const usedCars = require("./usedCars");

const productCards = document.getElementById("product_cards");

function displayCars(cars){
    cars.forEach(car => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
        <p>${car.year}</p>
        <p>${car.make} ${car.model}</p>
        <p>${mileage} miles</p?
        <p>$${price}</p>
        <p>${color}</p>
        <p>${gasMileage}</p>
        `;

        productCards.appendChild(card);
    })
}

displayCars(usedCars);