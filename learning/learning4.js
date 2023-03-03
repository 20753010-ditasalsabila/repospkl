// for(let i = 13; i >= 9; i--) {
//     console.log(i);
// }

// for ( let i = 2; i <= 11; i++ ) {
//     if( i % 2 === 0 ) {
//         console.log(i)
//     } else { 
//         console.log("Ganjil")}
// }


// if ( 1 == "1") {
//     console.log(1)
// }

// if(1 === "1") {
//     console.log (1)
// }


// TASK

// 1. *
//    * * 
//    * * *

let star = "";
for (let i = 0; i < 3; i++) {
    for(let j = 0; j <= i; j++){
        star += "*";
    }
    star += "\n"
}
console.log(star);


// 2.   * * *
//     * * * *A


//    * * * * *

let stars = "";

for (let i = 2; i < 5; i++) {
    for(let j = 0; j <= 5 - i; j++){
        stars += " ";
    }
    for(let k = 0; k < 1 + i; k++){
        stars += "* ";
    }
    stars += "\n"

}
console.log(stars);


// 3. let time = 24
//    angka diluar 1 - 24 -> tidak ada waktu tersebut
//    angka 12 - 13 -> istirahat
//    angka 18 - 20 -> istirahat
//    selain itu -> bekerja

let time = 0;

if (time < 1 || time > 24) {
    console.log("Tidak Ada Waktu Tersebut")
} else if (time >= 12 && time <= 13 || time >= 18 && time <= 20) {
    console.log("Istirahat")
} else {
    console.log("Bekerja")
}


// 4. soal di ss

let restaurant = [250000, 710000, 125000]
let tips1 = 10/100
let tips2 = 15/100
let tips3 = 20/100
let totalTips = null;
let totalPayment = null;
let totalPaymentAndTips =  null;

let total = 0;
for(let key in restaurant) {
    total += restaurant[key]
}
console.log("Total Tagihan: " + total)

for (let i = 0; i < restaurant.length; i++) {
    if(restaurant[i] > 500000){
        totalTips = (restaurant[i] * tips1)
    } else if (restaurant[i] >= 250000 && restaurant[i] <= 500000) {
        totalTips = (restaurant[i] * tips2)
    } else if (restaurant[i] < 250000) {
        totalTips = (restaurant[i] * tips3)
    } else {
        totalTips = ("Tidak ada tips")
    }
    console.log("Total Tips PerResto: " + (totalTips))
} 

// let tipsTotal = (totalTips1 + totalTips2 + totalTips3)
// console.log("Total Tips adalah: " + tipsTotal)

for(let i = 0; i < restaurant.length; i++){
    if(restaurant[i] > 500000){
        totalPaymentAndTips = (totalPaymentAndTips1 = (restaurant[i] + (restaurant[i] * tips1)))
    } else if (restaurant[i] >= 250000 && restaurant[i] <= 500000) {
        totalPaymentAndTips = (totalPaymentAndTips2 = (restaurant[i] + (restaurant[i] * tips2)))
    } else if (restaurant[i] < 250000) {
        totalPaymentAndTips = (totalPaymentAndTips3 = (restaurant[i] + (restaurant[i] * tips3)))
    }

    (console.log("Total Tagihan & Tips PerResto: " + totalPaymentAndTips))
}

let paymentTotalll = (totalPaymentAndTips1 + totalPaymentAndTips2 + totalPaymentAndTips3)
console.log("Total Tagihan Keseluruhan: " + paymentTotalll);



// No. 5

let arr1 = [1,2,3,4,5]
let arr2 = [4,5,6,7,8]

// irisan dari arr1 dan arr2 
// outputnya : 4,5

let irisan = "";
for(i = 0; i < arr1.length; i++) {
    for (let j = 0; j < i; j++) {
        if(arr1[i] === arr2[j]) {
            irisan[j] = arr1[i]
        }
    }
}
console.log(irisan);

let arr3 = [...arr1, ...arr2];
console.log(arr3)

result = []
irisan = []

for (let i = 0; i < arr3.length; i++) {
   if(!result.includes(arr3[i])){
    result.push(arr3[i])
   }else{
       irisan.push(arr3[i])
   }
}

console.log("irisan " +  irisan);



// cari tau tentang objek, distructuring, method/function di js
// fungsinya, buat apa aja, kenapa pake itu, praktikan 


// fungsi distructuring itu untuk memecah objeck array ke variabel baru
// objek menyimpan properti

// let a, b, rest;
// [a, b] = [10, 20];

// console.log(a);
// // Expected output: 10

// console.log(b);
// // Expected output: 20

// [a, b, ...rest] = [10, 20, 30, 40, 50];

// console.log(rest);
// // Expected output: Array [30, 40, 50]

const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2


// const obj = { a: 1, b: { c: 2 } };
// const {
//   a,
//   b: { c: d },
// } = obj;
// // Two variables are bound: `a` and `d`

let pkl = ["dita", "gita", "maman"];
[pkl[0], pkl[2]] = [pkl[1], pkl[2]];

console.log(pkl);



function f() {
    return [1, 2, 3];
  }
  
  const [m, , n] = f();
  console.log(m); // 1
  console.log(n); // 3
  
  const [c] = f();
  console.log(c); // 1
  


const [a, b, ...{ pop, push }] = [1, 2];
console.log(a, b); // 1 2
console.log(pop, push); // [Function pop] [Function push]


const [o, p, ...[q, r, ...[s]]] = [1, 2, 3, 4, 5, 6];
console.log(o, p, q, s); // 1 2 3 4 5 6


const [k, l] = new Map([
    [1, 2],
    [3, 4],
  ]);
  console.log(k, l); // [1, 2] [3, 4]


  const obj = {
    *[Symbol.iterator]() {
      for (const v of [0, 1, 2, 3]) {
        console.log(v);
        yield v;
      }
    },
  };
  const [g, h] = obj; // Only logs 0 and 1
  

  const user = {
    id: 42,
    isVerified: true,
  };
  
  const { id, isVerified } = user;
  
  console.log(id); // 42
  console.log(isVerified); // true
  


  //desctructuring
  const metadata = {
    title: "Scratchpad",
    translations: [
      {
        locale: "de",
        localizationTags: [],
        lastEdit: "2014-04-14T08:43:37",
        url: "/de/docs/Tools/Scratchpad",
        title: "JavaScript-Umgebung",
      },
    ],
    url: "/en-US/docs/Tools/Scratchpad",
  };
  
  const {
    title: englishTitle, // rename
    translations: [
      {
        title: localeTitle, // rename
      },
    ],
  } = metadata;
  
  console.log(englishTitle); // "Scratchpad"
  console.log(localeTitle); // "JavaScript-Umgebung"

  
  //iterasi dan destructuring
  const people = [
    {
      name: "Mike Smith",
      family: {
        mother: "Jane Smith",
        father: "Harry Smith",
        sister: "Samantha Smith",
      },
      age: 35,
    },
    {
      name: "Tom Jones",
      family: {
        mother: "Norah Jones",
        father: "Richard Jones",
        brother: "Howard Jones",
      },
      age: 25,
    },
  ];
  
  for (const {
    name: n,
    family: { father: f },
  } of people) {
    console.log(`Name: ${n}, Father: ${f}`);
  }
  
  // "Name: Mike Smith, Father: Harry Smith"
  // "Name: Tom Jones, Father: Richard Jones"
  




let users = {};
user.name = "John"
user.surname = "Smith"
users.name = "Pete"
delete users.name;


// function isEmpty(obj) {
//     for (let key in obj){
//         return false;
//     }
//     return true;
// }

// let schedule = {};

// console.log(isEmpty(schedule));

// schedule["8:30"] = "get up";
// console.log(isEmpty(schedule));



let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
    Jamal: 200
}

let sum = 0;
for(let key in salaries) {
    sum += salaries[key];
}
console.log(sum);

// let sum = salaries.John + salaries.Ann + salaries.Pete
// console.log(sum)


function testFunction(x, y) {
    return x + y;
}
let hasil = function (x, y) {
    return x + y
};


function superHero(x, y) {
    return x + y;
};
console.log("Saya adalah " + superHero("manusia ", "super"))



