// https://calculator.swiftutors.com/electric-potential-energy-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const electricPotentialEnergyRadio = document.getElementById('electricPotentialEnergyRadio');
const chargeofobject1Radio = document.getElementById('chargeofobject1Radio');
const chargeofobject2Radio = document.getElementById('chargeofobject2Radio');
const distancebetweentwochargesRadio = document.getElementById('distancebetweentwochargesRadio');

let electricPotentialEnergy;
const k = 9e9;
let chargeofobject1 = v1;
let chargeofobject2 = v2;
let distancebetweentwocharges = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

electricPotentialEnergyRadio.addEventListener('click', function() {
  variable1.textContent = 'Charge of object 1 (Coulomb)';
  variable2.textContent = 'Charge of object 2 (Coulomb)';
  variable3.textContent = 'Distance between two charges (m)';
  chargeofobject1 = v1;
  chargeofobject2 = v2;
  distancebetweentwocharges = v3;
  result.textContent = '';
});

chargeofobject1Radio.addEventListener('click', function() {
  variable1.textContent = '(Ue) Electric Potential Energy (J)';
  variable2.textContent = 'Charge of object 2 (Coulomb)';
  variable3.textContent = 'Distance between two charges (m)';
  electricPotentialEnergy = v1;
  chargeofobject2 = v2;
  distancebetweentwocharges = v3;
  result.textContent = '';
});

chargeofobject2Radio.addEventListener('click', function() {
  variable1.textContent = '(Ue) Electric Potential Energy (J)';
  variable2.textContent = 'Charge of object 1 (Coulomb)';
  variable3.textContent = 'Distance between two charges (m)';
  electricPotentialEnergy = v1;
  chargeofobject1 = v2;
  distancebetweentwocharges = v3;
  result.textContent = '';
});

distancebetweentwochargesRadio.addEventListener('click', function() {
  variable1.textContent = '(Ue) Electric Potential Energy (J)';
  variable2.textContent = 'Charge of object 1 (Coulomb)';
  variable3.textContent = 'Charge of object 2 (Coulomb)';
  electricPotentialEnergy = v1;
  chargeofobject1 = v2;
  chargeofobject2 = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(electricPotentialEnergyRadio.checked)
    result.textContent = `Electric Potential Energy = ${computeElectricPotentialEnergy().toFixed(2)} J`;

  else if(chargeofobject1Radio.checked)
    result.textContent = `Charge of object 1 = ${computeChargeofobject1().toFixed(2)} Coulomb`;

  else if(chargeofobject2Radio.checked)
    result.textContent = `Charge of object 2 = ${computeChargeofobject2().toFixed(2)} Coulomb`;

  else if(distancebetweentwochargesRadio.checked)
    result.textContent = `Distance between two charges = ${computeDistancebetweentwocharges().toFixed(2)} m`;
})

// calculation

function computeElectricPotentialEnergy() {
  return (k * Number(chargeofobject1.value) * Number(chargeofobject2.value)) / Number(distancebetweentwocharges.value);
}

function computeChargeofobject1() {
  return (Number(electricPotentialEnergy.value) * Number(distancebetweentwocharges.value)) / (k * Number(chargeofobject2.value));
}

function computeChargeofobject2() {
  return (Number(electricPotentialEnergy.value) * Number(distancebetweentwocharges.value)) / (k * Number(chargeofobject1.value));
}

function computeDistancebetweentwocharges() {
  return (k * Number(chargeofobject1.value) * Number(chargeofobject2.value)) / Number(electricPotentialEnergy.value);
}