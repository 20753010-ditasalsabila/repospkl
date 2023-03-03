// function createKulkas(capacity, groceries) {
//     let kulkas = {};
//     kulkas.capacity = capacity;
//     kulkas.remaining = capacity;
//     kulkas.groceries = groceries;

//     kulkas.put = function(id) {
//         kulkas.remaining -= id;
//         console.log(`Makanan dengan id ${id} berhasil dimasukkan`);
//         // } else {
//         //     console.log(``)
//         // }
//     }

//     kulkas.take = function(id) {
//         kulkas.remaining += id;
//         console.log(`Makanan dengan id ${id} sudah keluar`);
//     }

//     kulkas.check = function() {
//         console.log(kulkas);
//     }

//     return kulkas;
// }

// let makan = createKulkas(3, 1);



// ~~~~~~~~~~~~~~~~~~~~~~~~ COBA COBA ~~~~~~~~~~~~~~~~~~~~~~~ //

// let coba = new kulkas(3, 2 );

// function put(id, name) {
//     this.id = id;
//     this.name = name;

//     this.foods = function(doublefood) {
//         setTimeout(() => {
//             if(this.id !== doublefood) {
//                 console.log(`Makanan dengan id ${this.doublefood} berhasil dimasukkan`);
//             } else {
//                 console.log(`Makanan dengan id ${this.doublefood} sudah keluar`);
//             }
//             callback()
//         }, 3000)
//         if(this.id !== doublefood) {
//             console.log(`Makanan dengan id ${this.id} berhasil dimasukkan`);
//         } else {
//             console.log(`Makanan dengan id ${this.id} sudah keluar`);
//         }
//     }

//     this.food = function(fullCapacity) {
//         if (kulkas.remaining >= kulkas.capacity) {
//             console.log(`Mohon maaf kulkas sudah penuh`);
//         } else {
//             console.log(`Makanan dengan id ${this.id} berhasil dimasukkan`)
//         }
        
//     }
// }

// let dita = new put("A02", 'Ayam');


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


class Grocery {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

class Kulkas {
    constructor(capacity) {
        this.capacity = capacity;
        this.remaining = capacity;
        this.groceries = [];
    }
}

const createKulkas = (capacity, actions) => {
    let newKulkas = new Kulkas(capacity);

    const put = (grocery, callback) => {
        setTimeout(() => {
            if(newKulkas.remaining < 1) {
                callback(`Mohon maaf kulkas sudah penuh`)
            } else if(newKulkas.groceries.id === grocery.id) {
                callback(`Mohon maaf makanan ini sudah ada`)
            } else {
                newKulkas.groceries.push(grocery)
                newKulkas.remaining -= 1;
                callback(`Makanan dengan id ${grocery.id} berhasil dimasukkan`)}
        }, 3000);
    }

    const take = (id, callback) => {
        setTimeout(() => {
            if(newKulkas.groceries.id == id) {
                let kulkas = newKulkas.groceries.find((kulkas) => kulkas.id == id)
                newKulkas.groceries.splice(newKulkas.groceries.indexOf(kulkas, 1))
                newKulkas.remaining += 1;
                callback(`Makanan dengan id ${id} berhasil dikeluarkan`)
            } else {
                callback(`Makanan dengan id ${id} tidak ada`)
            }
            
        }, 1500);
    }

    const check = (callback) => {
        setTimeout(() => {
            callback(newKulkas)
        }, 500)
    }

    setTimeout(() => {
        console.log(`Kulkas berhasil dibuat dengan kapasitas ${capacity} makanan`);
        actions(put, take, check)
    }, 5000)
}

let apel = new Grocery("001", "Apel");
let mangga = new Grocery("002", "Mangga");
let nanas = new Grocery("003", "Nanas");

createKulkas(3, (put, take, check) => {
    check((output) => {
        console.log(output);
        put(apel, (message) => {
            console.log(message);
            check((output) => {
                console.log(output);
                put("001", (message) =>{
                    console.log(message);
                    check((output) => {
                        console.log(output);
                        take("002", (message) => {
                            console.log(message);
                            check((output) => {
                                console.log(output);
                            })
                        })
                    })
                })
            })
        })
    })
});