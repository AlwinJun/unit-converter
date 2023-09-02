//Generate all conversions when the user click convert button
//Round the number into 3 decimal places

const inputNumber = document.getElementById(
  'js-input-number'
) as HTMLInputElement;
const lengthParagraph = document.getElementById(
  'js-length'
) as HTMLParagraphElement;
const volumesParagraph = document.getElementById(
  'js-volumes'
) as HTMLParagraphElement;
const massParagraph = document.getElementById(
  'js-mass'
) as HTMLParagraphElement;

// Empty input field when focus
inputNumber.addEventListener('keyup', function () {
  let value: number = Number(inputNumber.value);
  METERtoFEET(value);
  LITERtoGALLON(value);
  KILOGRAMtoPOUND(value);
});

/*
1 meter =  3.28084 feet
1 liter = 0.2641729 gallon
1 kilogram = 2.204623 pound
*/
const feet: number = 3.28084;
const gallon: number = 0.2641729;
const pounds: number = 2.204623;

function METERtoFEET(value: number): void {
  const meterTOfeet = value * feet;
  const feetTOmeter = value / feet;

  lengthParagraph.innerHTML = `${value} meters = ${Number(meterTOfeet).toFixed(
    3
  )} feet |
   ${value} feet =  ${Number(feetTOmeter).toFixed(3)} meters`;
}

function LITERtoGALLON(value: number): void {
  const litertTOgallon = value * gallon;
  const gallonTOlitter = value / gallon;

  volumesParagraph.innerHTML = `${value} liter = ${Number(
    litertTOgallon
  ).toFixed(3)} gallons |
   ${value} gallons =  ${Number(gallonTOlitter).toFixed(3)} liter`;
}

function KILOGRAMtoPOUND(value: number): void {
  const kilogramTOpound = value * pounds;
  const poundTOkilogram = value / pounds;

  massParagraph.innerHTML = `${value} kilos = ${Number(kilogramTOpound).toFixed(
    3
  )} pounds |
   ${value} pounds =  ${Number(poundTOkilogram).toFixed(3)} kilos`;
}
