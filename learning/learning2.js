/**
 * Learning about conditional
 */

/**
 * A. If Else Statement
 * --- jelaskan tentang if statement, cara pakai, dan kenapa digunakan ? ---
 * If Else statement adalah percabangan yang digunakan untuk memilih beberapa kondisi tertentu dari banyaknya kondisi. Kondisi yang dieksekusi adalah kondisi yang bernilai true. 
 * Cara kerja If Else statement adalah dengan memilih kondisi, misal kondisi pada If bernilai false maka kondisi else if(atau else saja) yang akan dieksekusi, namun jika kondisi lebih dari 2 dan keduanya benilai false maka yang akan dieksekusi adalah kondisi else.
 * If bisa berisi variabel dengan tipe data boolean.
 * Jika kondisi tidak terpenuhi maka program tidak akan mengeksekusi perintah apapun. 
 * Statement ini digunakan jika terdapat kondisi yang diharuskan memilih.  
 */


/**
 * B. Switch Statement
 * --- jelaskan tentang switch statement, cara pakai, dan kenapa digunakan ? ---
 * Switch case digunakan untuk mengecek sebuah nilai/vaue, dimana biasanya memiliki banyak nilai. 
 * Cara kerja switch adalah dengan membandingkan nilai variabel dengan nilai-nilai pada case. Pengecekan dilakukan dengan berurut dari case pertama dan selanjutnya. 
 * Statement ini diakhiri oleh kata kunci break digunakan untuk mengakhiri pengecekan jika sudah ada kondisi yang bernilai true sebelumnya. Sehingga kondisi selanjutnya tidak akan di eksekusi walaupun bernilai true. 
 * Jika tidak menggunakan break, maka semua case akan dieksekusi secara bersamaan. 
 * Statement ini juga tidak dapat mengeksekusi tipe data yang berbeda antara variabel dan casenya. 
 */

/**
 * Practice makes perfect (kaya buku sidu)
 */

//

// object passenger
let passenger = {
  name: "Niken",
  families: ["Rahma", "Joko", "Indra"],
  availableCargoWeightKg: 5,
};

//tambahan variable
let price = 100000;
const charge = 75000;
let fullFamilies = 4;
const cargo = 2.5;

/**
 * Soal 1
 * jika membawa keluarga dan keluarga lebih dari satu
 * maka pembayaran + 75.000 per satu orang
 * hitung total yang harus dibayarkan
 **/

// if (passenger.families.length > 1) {
//     totalPayment = passenger.families.length  * charge;
    
// }


/** start jawab disini */

let totalPayment = null;
if(passenger.families.length > 1) {
  totalPayment = passenger.families.length * 75000;
}

console.log(totalPayment);

/** end jawab disini */

/**
 * Soal 2
 * Jika penumpang lebih dari satu orang maka per orang mendapatkan cargo 2.5 Kg
 * hitung berapa jumlah cargo yang didapatkan passenger
 */

/** start jawab disini */


let totalCargo = null;
    if (passenger.families.length > 1) {
        totalCargo = (passenger.families.length * 2.5) + passenger.availableCargoWeightKg;
    }

    console.log(totalCargo);

/** end jawab disini */

/**
 * Soal 3
 * Jika voucher LIBURAN2023 maka dapat potongan 75000
 * Jika voucher LIBURANBARENG maka dapat potongan 55000
 * jika voucher KELILINGKOTA maka dapat potongan 15000
 * jika voucher ASIKNGEBUS maka dapat potongan 73000
 * tentukan potongan yang didapat penumpang 
 * !! gunakan switch statement !!
 */

/** start jawab disini */

let voucherCode= 'LIBURAN2023';

    switch (voucherCode) {
        case "LIBURAN2023":
            discount = 75000;
        break;
        case "LIBURANBARENG":
            discount = 55000;
        break;
        case "KELILINGKOTA":
            discount = 15000;
        break;
        case "ASIKNGEBUS":
            discount = 73000;
        break;
    }

        console.log('Potongan harga yang didapat penumpang sebesar: ' + discount);

/** end jawab disini */