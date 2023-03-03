// Cari tahu tentang anonymous function atau bentuk lainnya di js
// cari tahu tentang class di js
// bisa jadi function ada di dalem class


//function declaration
function updateDinoName(name) {
    name = 't-rex';
    return name;
  }
  
  const dinoName = 'brachio';
  
  updateDinoName(dinoName); // call function
  console.log(updateDinoName())
  
  
  //function expression
  const buahLokal = function (name) {
    name = 'pisang';
    return name;
  };
  
  let updateBuahLokal = 'rambutan';
  
  updateDinoName(updateBuahLokal); // call function
  
  console.log(updateBuahLokal)
  
  // perbedaan nya. bisa manggil function pake function declaration meskipun deklarasinya dilakukan setelah pemanggilan, kalo function expression ga bisa, jadi harus setelah functionnya ada dulu.
  
  //function declaration panggil dulu baru buat
  let roomName = 'Anggrek B';
  
  updateRoomName(roomName); // call function
  
  function updateRoomName(name) {
    name = 'Melati A';
    return name;
  }
  
  console.log(roomName);
  
  
  //function expression panggil dulu baru buat jadi eror
  // let zuperHero = 'brachio';
  
  // updateZuperHero(zuperHero); // ReferenceError: Cannot access 'updateDinoName' before initialization
  
  // const updateZuperHero = function (name) {
  //   name = 'Spiderman';
  //   return name;
  // };
  
  // console.log(updateZuperHero());
  
  
  // anonymous function, function yang tidak punya nama
  // function() {
  //   console.log('Hi Brachio');
  // }
  
  //arrow function
  const updateHotel = (name) => {
    name = 't-rex';
    return name;
  };
  
  let hotel = 'brachio';
  
  updateHotel(hotel); // call function
  
  console.log(updateHotel())
  
  //arrow function
  const updateTableName = (name) => {
    name = 'Bundar';
    return name;
  };
  
  let tableName = 'Kayu';
  
  updateTableName(tableName); // call function

  console.log(updateTableName())

  //arrow function tanpa parentheses(), kalo parameter nya cuma 1
  const updateLaptopName = (name) => {
    name = 'Acer';
    return name;
  };
  console.log(updateLaptopName());
  //arrow function tanpa parameter
  const sayHi = () => console.log('Hi Brachio!');
  
  sayHi(); // Hi Brachio

  //arrow function itu ada 3, ada yang pake paramter trus pake (), ada yang pake parameter tapi ga pake (), ada yang gapake parameter tapi pake ()


  //array.map dengan arrow function
  const numbers = [1, 2, 3, 4, 5];

function doubleIt(number) {
  return number * 2;
}

const result = numbers.map(doubleIt);


// class, cara buat object dengan class
// synchronus & asynchronus => callback, promise, async await

// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
// }

// let myCar1 = new Car("Ford", 2014);
// let myCar2 = new Car("Audi", 2019);

// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   age() {
//     let date = new Date();
//     return date.getFullYear() - this.year;
//   }
// }

// let myCar = new Car("Ford", 2014);
// console.log("My car is " + myCar.age() + " years old.");

//contoh class dengan fungsi yang memiliki parameter
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }
}

let date = new Date();
let year = date.getFullYear();

let myCar = new Car("Ford", 2014);
console.log("My car is " + myCar.age(year) + " years old.");


class Student {
  constructor(name, classs, age) {
    this.name = name;
    this.classs = classs;
    this.age = age;
  }
}

let student1 = new Student("Dita", 6, 20);
let Student2 = new Student("Gita", 6, 21);
let student3 = new Student("Irfan", 6, 20);

console.log(student1)

// synchronus & asynchronus => callback, promise, async await

// sync di proses baris perbaris
// async itu kodenya udah diproses tapi cuma jadwal untuk ekseskusinya aja. jadi kode yang async ini ga langsung dieksekusi, tapi di skip dan akan eksekusi baris berikutnya

//contoh sync
// function tanyaKabar(name) {
//   console.log('Apa kabar,', name);
// }

// function katakanHallo(name) {
//   console.log('Hallo,', name);
// }

// katakanHallo('Guntur');
// tanyaKabar('Gun');


//contoh async
function tanyaKabar(name) {
  console.log('Apa kabar,', name);
}

function katakanHallo(name) {
  setImmediate(function () {
      console.log('Hallo,', name);
  });
}

katakanHallo('Guntur');
tanyaKabar('Gun');

//contoh sync
console.log("ini baris pertama")
console.log("ini baris kedua")
console.log("ini baris ketiga")

//contoh async (kode dijalankan berdasarkan waktu proses)
setTimeout(() => console.log("ini baris pertama"), 3000)
setTimeout(() => console.log("ini baris kedua"), 1000)
setTimeout(() => console.log("ini baris ketiga"), 2000)


// async itu digunakan ketika mengakses API, membaca data dari database yang memerlukan waktu proses.

// callback itu fungsi yang di eksekusi didalam fungsi lain yang memanggilnya
// fungsi yang dijadikan sebagai parameter pada fungsi lain disebut sebagai fungsi callback atau callback function

// promise => membuat promise, menangani promise
// membuat promise dengan cara panggil constructor, constructor promise akan menerima argument sebuah fungsi dengan 2 param yaitu resolve dan reject
let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo")
  }, 3000)
})
console.log(promise1)

// contoh callback
function coba(x) {
  console.log(x)
}
function print(text, callback) {
  callback(text)
}
print("latihannnnnnn", coba)

// 3 state yang mubgkin terjadi => panding, dalam proses. resolved, ditepati/berhasil. rejected, gagal/dibatalkan


//then dan catch adalah function promise.


// asyn await => untuk menangani hasil dari sebuah promise
// cara nya tambah kata async di depan fungsi untuk ubah jdi asynchronus
// await => untuk menunda kode dijalankan, sampe proses aynchronus berhasil


// async berbasis callback yang dibungkus promise
function getAsyncData(someValue){
  return new Promise(function(resolve, reject){
      getData(someValue, function(error, result){
          if(error){
              reject(error);
          }
          else{
              resolve(result);
          }
      })
  });
}
console.log(getAsyncData)


function latihan(lat){
  return new Promise(function(resolve,reject){
    getData(lat, function(err, result){
      if(err){
        reject(error);
      } else {
        resolve(result);
      }
    })
  });
}
console.log(latihan);

// contoh callback
// const notify = () => {
//   console.log('Download complete!');
// };

// const download = (url, callback) => {
//   console.log(`Downloading from ${url}...`);
//   callback();
// };

// const url = 'https://brachio.site/download';

// download(url, notify);

//contoh promise
let progress = 10;

const unduh = new Promise((resolve, reject) => {
  if(progress === 100) {
    resolve("Download Selesai");
  } else {
    reject("Download Failed");
  }
});

console.log(unduh)

// contoh promise
let initProgress = 0;

const download = new Promise((resolve, reject) => {
  let progress = initProgress + 25;
  resolve(progress);
});

download
  .then((result) => {
    console.log(`Download progress is ${result}%`);
    return result + 25;
  })
  .then((result) => {
    console.log(`Download progress is ${result}%`);
    return result + 50;
  })
  .then((result) => {
    if (result === 100) {
      console.log('Download complete');
    }
  });

  let production = () =>{
    setTimeout(()=>{
      console.log("produk telah di mulai...")
  
      setTimeout(()=>{
        console.log("buah telah di potong")
      },2000)
  
    },2000)
  };



