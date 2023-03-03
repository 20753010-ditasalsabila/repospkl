const price = 5000;

console.log(price);



const isGraduate = true; //boolean
let fullName = "Dita"; //string
let result; //undefined
let seatQuantity = 28;

console.log(
    typeof(isGraduate),
    typeof(fullName),
    typeof(result),
    typeof(seatQuantity)
    )


let bus = {
    vehicleNumber: 'BE1234Y',
    seatQuantity: 30,
    busDriver: 'dita'
} //object


//operator aritmatika
let seatPrice = 200000;
let limitWeight = 0.5
let sumPrice = bus.seatQuantity * seatPrice;
console.log(sumPrice);

let sumWeight = bus.seatQuantity * limitWeight;
console.log(sumWeight);


let firstName = "Dita";
let lastName = "Salsabila";
let completeName = firstName + ' ' + lastName;
console.log(completeName);

// console.log(bus);
// console.log(typeof(bus));

let student = {
    name: 'Dita Salsabila',
    age: 20,
    hobby: 'Menari'
}

//operator assignment


let ticketPrice = 200000;
let tax = 11/100;

ticketPrice += (tax * ticketPrice);
console.log(ticketPrice);

let sumAmount = 80000;
let discount =10000;

sumAmount -= discount;
console.log("total bayar", sumAmount);

//operator perbandingan

//
let password = 'dita';
let passwordVerified = 'salsa';
console.log(password == passwordVerified);
let passwordValid = password == passwordVerified;

let discounts = 20000;
console.log(discounts >= 0);

let numberOne = 1;
let numberTwo = '1';

console.log(Number(numberOne) + Number(numberTwo));

// console.log(numberOne + (1==parseInt("1")));

// console.log(numberOne + parseInt(numberTwo));

// console.log(numberOne + Math.floor(numberTwo));

// console.log(numberOne + (+numberTwo));


//operator Logika

let range = 10;
let passenger = 2;

let ages = 28;
let isGraduated = true;
let isProductiveAge = ages <= 30;

let isAccepted = isProductiveAge && isGraduated;
console.log(isAccepted);

let vaccinate = 3;
let isApp = true;
let isa = true;

let isperr = ((vaccinate >=3) || isApp) && isa;
console.log(isperr);

let employee = {
    name: 'andre',
    age: 25,
    workExperience: 2,
    degree: 'S1',
    statuss: 'Karyawan tetap'
}

let canUpgrade = (employee.workExperience > 2) || employee.degree == 'S1' && employee.statuss == 'Karyawan tetap';
// let canUpgrade = (employee.degree=='S1' && employee.statuss=='Karyawan tetap') || employee.workExperience>2;
console.log(canUpgrade);

const benar = true;
const salah = false;

console.log(
    benar && benar,
    benar && salah,
    salah && benar,
    salah && salah,
    benar || benar,
    benar || salah,
    salah || benar,
    salah || salah,
    !benar,
    !salah
)


for (let i = 1; i <= 10; i++) {
    if (i % 2 === 1) {
      continue;
    }
    if (i > 8) {
      break;
    }
    console.log(`Number ${i}`);
  }


//   // sample 1
// let counter = 0;
// while (counter < 10) {
//   console.log(counter);
//   counter++; // ini harus ada jika tidak ingin infinity loop
// }


// let counters = 0;
// do {
//   counter++;
//   console.log(counters);
// } while (counters > 10);

