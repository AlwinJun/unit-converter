//Generate all conversions when the user click convert button
//Round the number into 3 decimal places

const inputNumber = document.getElementById('js-input-number')
const lengthParagraph = document.getElementById('js-length')
const volumesParagraph = document.getElementById('js-volumes')
const massParagraph = document.getElementById('js-mass')


// Empty input field when focus
inputNumber.addEventListener('keyup', function() {
  //inputNumber.value = ' '
   METERtoFEET(inputNumber.value)
   LITERtoGALLON(inputNumber.value)
   KILOGRAMtoPOUND(inputNumber.value)  
})

/*
1 meter =  3.28084 feet
1 liter = 0.2641729 gallon
1 kilogram = 2.204623 pound
*/
const feet =  3.28084
const gallon = 0.2641729
const pounds = 2.204623

function METERtoFEET (value) {
  const meterTOfeet = value * feet
  const feetTOmeter = value / feet
  
  lengthParagraph.innerHTML = 
  `${value} meters = ${Number(meterTOfeet).toFixed(3)} feet |  
   ${value} feet =  ${Number(feetTOmeter).toFixed(3)} meters`
}

function LITERtoGALLON (value) {
  const litertTOgallon = value * gallon
  const gallonTOlitter = value / gallon

  volumesParagraph.innerHTML = 
  `${value} liter = ${Number(litertTOgallon).toFixed(3)} gallons |  
   ${value} gallons =  ${Number(gallonTOlitter).toFixed(3)} liter`
}

function KILOGRAMtoPOUND (value) {
  const kilogramTOpound = value * pounds
  const poundTOkilogram= value / pounds

  massParagraph.innerHTML = 
  `${value} kilos = ${Number(kilogramTOpound).toFixed(3)} pounds |  
   ${value} pounds =  ${Number(poundTOkilogram).toFixed(3)} kilos`
}