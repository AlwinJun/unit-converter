// DOM elements
const inputNumber = document.getElementById('js-input-number') as HTMLInputElement;
const lengthParagraph = document.getElementById('js-length') as HTMLParagraphElement;
const volumesParagraph = document.getElementById('js-volumes') as HTMLParagraphElement;
const massParagraph = document.getElementById('js-mass') as HTMLParagraphElement;

function convertUnit(value: number, fromUnit: string, toUnit: string): number {
  type Units = 'meter' | 'feet' | 'liter' | 'gallon' | 'kilogram' | 'pound';

  // Define an object to store the conversion factors
  const conversionFactors: Record<Units, number> = {
    meter: 1,
    feet: 3.28084,
    liter: 1,
    gallon: 0.2641729,
    kilogram: 1,
    pound: 2.204623,
  };

  // Check if the fromUnit and toUnit are valid
  if (!conversionFactors.hasOwnProperty(fromUnit) || !conversionFactors.hasOwnProperty(toUnit)) {
    throw new Error('Invalid unit');
  }

  // Calculate the conversion factor by dividing the toUnit  by the fromUnit
  const conversionFactor = conversionFactors[toUnit as Units] / conversionFactors[fromUnit as Units];

  return value * conversionFactor;
}

inputNumber.addEventListener('keyup', function () {
  let value: number = Number(inputNumber.value);

  //Convert fromUnis to toUnits and vice versa
  const meterToFeet = convertUnit(value, 'meter', 'feet');
  const feetToMeter = convertUnit(value, 'feet', 'meter');

  const literToGallon = convertUnit(value, 'liter', 'gallon');
  const gallonToLiter = convertUnit(value, 'gallon', 'liter');

  const kilogramToPound = convertUnit(value, 'kilogram', 'pound');
  const poundToKilogram = convertUnit(value, 'pound', 'kilogram');

  lengthParagraph.innerHTML = `${value} meters = ${meterToFeet.toFixed(3)} feet 
                              | ${value} feet = ${feetToMeter.toFixed(3)} meters`;

  volumesParagraph.innerHTML = `${value} liters = ${literToGallon.toFixed(3)} gallons 
                              | ${value} gallons = ${gallonToLiter.toFixed(3)} liters`;

  massParagraph.innerHTML = `${value} kilograms = ${kilogramToPound.toFixed(3)} pounds 
                            | ${value} pounds = ${poundToKilogram.toFixed(3)} kilograms`;
});
