const productCards = document.getElementById("product_cards");
const makeSelect = document.getElementById("make");
const colorSelect = document.getElementById("color");

function displayCars(cars){
    cars.forEach(car => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
        <p>${car.year} ${car.make} ${car.model}</p>
        <p>${car.mileage} miles</p>
        <p>$${car.price}</p>
        <p>${car.color}</p>
        <p>${car.gasMileage}</p>
        `;

        productCards.appendChild(card);
    })
}

function displayMakes(cars){
    cars.forEach(car =>{
        const option = document.createElement("option");
        option.value = car.make;

        option.innerHTML = `${car.make}`;

        makeSelect.appendChild(option);
    })
}

function displayColors(cars){
    let colors = [];
    cars.forEach(car =>{
        if(!colors.includes(car.color))
        {
            colors.push(car.color);
        }
    })
    colors.forEach(color =>{
        const option = document.createElement("option");
        option.value = color;

        option.innerHTML = color;
        colorSelect.appendChild(option);
    })
}

function filterCars(){
    const minYear = parseInt(document.getElementById("min_year").value || 0);
    const maxYear = parseInt(document.getElementById("max_year").value || Infinity);
    const make = document.getElementById("make").value;
    const maxMileage = parseInt(document.getElementById("mileage").value) || Infinity;
    const minPrice = parseInt(document.getElementById("min_price").value) || 0;
    const maxPrice = parseInt(document.getElementById("max_price").value) || Infinity;
    const color = document.getElementById("color").value;

    const filteredCars = window.usedcars.filter(car =>{
        return(
            car.year >= minYear &&
            car.year <= maxYear &&
            (make == "" || car.make == make) &&
            car.mileage <= maxMileage &&
            car.price >= minPrice &&
            car.price <= maxPrice &&
            (color == "" || color == car.color)
        );
    })
    displayCars(filteredCars);
}

document.getElementById("filter_button").addEventListener("click", filterCars);

displayCars(window.usedCars);
displayMakes(window.usedCars);
displayColors(window.usedCars);