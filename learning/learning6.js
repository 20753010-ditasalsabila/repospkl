
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

 console.log(allGrocery);

 
 class Kulkas {
     constructor(capacity, remaining, groceries) {
         this.capacity = capacity;
         this.remaining = remaining; 
         this.groceries = groceries;
     }
     remains() {
        return this.capacity - allGrocery.length;
    }
    
 }
 
//  let Kulkas1 = new Kulkas(10, remains(), allGrocery);
//  console.log(Kulkas1);

 


 //  console.log(Kulkas1);
//  console.log(coba);
 
//  function kulkas() {

//  }


//  function superHero(x, y) {
//     return x + y;
// };
// console.log("Saya adalah " + superHero("manusia ", "super"))




function kulkas(callback) {
    setTimeout(() => {
        const id = (Math.random() * 10) <= 5 ? 'A02' : 'B01';
        callback();
    }, 5000);
}

function put(id, callback) {
    callback('Makanan dengan id ' + id + ' berhasil dimasukkan');
}
function take(id, callback) {
    callback('Makanan dengan id ' + id + ' berhasil dimasukkan'); 
}
kulkas((id) => {
    console.log('Kulkas berhasil dibuat dengan kapasitas ' + id + ' makanan');
    put(id, (idStatus) => {
        console.log(idStatus);
        take(id, (idStatus) => {
            console.log(idStatus);
        })
    })
});