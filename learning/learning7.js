// function coba(x) {
//     console.log(x)
//   }
//   function print(text, callback) {
//     callback(text)
//   }
//   print("latihannnnnnn", coba)

class Grocery {
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
}

let food1 = new Grocery("A01", "Ikan");
let food2 = new Grocery("A02", "Ayam");
let drink1 = new Grocery("B01", "Sprite");
let drink2 = new Grocery("B02", "Coca Cola");

let allGrocery = ([food1, food2, drink1, drink2]);

// console.log(allGrocery);

class Kulkas {
    constructor(capacity, groceries) {
        this.capacity = capacity;
        this.remaining = capacity; 
        this.groceries = groceries;
    }
}

// // function kulkas
//   let kulkas = capacity => {
//       setTimeout(() => {
//           console.log(`Kulkas berhasil dibuat dengan kapasitas ${capacity} makanan`)
//       }, 5000)
//   };

//   let kulkass = new Kulkas(3, 2, 0);
//   console.log(kulkass);
//   kulkas(5);

//   // function put
//   let put = (id, callback) => {
//       console.log(`Makanan dengan id berhasil dimasukkan`);
//       callback()
//   }
//   put(2);

//   //function take
//   let take = (id, callback) => {
//       console.log(`Makanan dengan id berhasil dimasukkan`)
//       callback()
//   }
//   take(3)

//   function put(id, name, callback) {
//       return callback(id, name);
//   }
//   let cetak = put(Grocery.id, "ayam", function(id, name) {
//       return id;
//   });
  
//   cetak(5, 1)
//   console.log("Makanan dengan id " + cetak + " berhasil dimasukkan");

//   put(text, kulkas);
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

  //p3 di eksekusi di p2

  function p1(){
    console.log("ini P1")
  }

  function p2(callback) {
    setTimeout(() => {
      console.log("Ini P2")
      callback(p3)
    }, 2000);

  }

  function p3() {
    console.log("ini P3")
  }


  p1();
  p2(p3);
  