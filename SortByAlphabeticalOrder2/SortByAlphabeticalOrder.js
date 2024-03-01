let cars = "Toyota, Honda, Ford, BMW, Audi, Mercedes, Volkswagen, Tesla, Chevrolet, Hyundai";
let sortedCars = cars.split(', ').sort().join(', ');
console.log("The following is a list sorted from A to Z :"+sortedCars);
