/** PRACTICE ARRAY AND LOOPING */

/**
 * Question 1
 * Kategori bus yang tersedia adalah bisnis, eksekutif dan royal
 * Kepala bisnis menginstruksikan untuk menambah kategori baru yaitu :
 * - Family trip pada data pertama
 * - Sultan pada data terakhir
 * !! expected output !!
 * ["Familiy trip" "Bisnis", "Eksekutif", "Royal", "Sultan"];
 */
 let busCategories = ["Bisnis", "Eksekutif", "Royal"];
 // Start your answer here

 busCategories.unshift("Family trip");
 busCategories.push("Sultan");

 console.log(busCategories);

 // End your answer here
 
 // bus passengers data
 let passengers = [
   {
     name: "Niken",
     families: ["Rahma", "Joko", "Indra"],
     availableCargoWeightKg: 5,
   },
   {
     name: "Rohmat",
     families: ["Fajri", "Boris"],
     availableCargoWeightKg: 5,
   },
 ];
 
 /**
  * Question 2
  * Terdapat perubahan data pada pemberangkatan bus 
  * data index 0 (niken) perlu diubah namanya menjadi `Satria`
  * data index 1 (rohmat) perlu dihapus families dengan nama `Boris` karena tidak jadi berangkat
  * 
  * !! expected output !!
  * [
         {
             name: "Satria",
             families: ["Rahma", "Joko", "Indra"],
             availableCargoWeightKg: 5,
         },
         {
             name: "Rohmat",
             families: ["Fajri"],
             availableCargoWeightKg: 5,
         },
     ];
  */
 // Start your answer here

//   let passenger = passengers.find((p) => {
//       return p.name === 'Niken';
//   });

//   passenger.name = 'Satria'

//   console.log(passenger)

// Cara kedua  
  for (let i = 0; i < passengers.length; i++) {
    passengers[0].name = "Satria" 
  }

    for (let i = 1; i < passengers.length; i++) {
        passengers[1].families.pop();    
    }

    console.log(passengers)

 // End your answer here
 
 /**
  * Question 3 Gunakan looping
  * General area manager menentukan peraturan baru yaitu cargo / barang yg diizinkan pertiket ditambah menjadi 10 kg
  * dan jika membawa keluarga maka cargo ditambah 4 kg per orang
  * * !! expected output !!
  * [
         {
             name: "Satria",
             families: ["Rahma", "Joko", "Indra"],
             availableCargoWeightKg: 22kg, // 10 kg + 4 x 3 orang
         },
         {
             name: "Rohmat",
             families: [],
             availableCargoWeightKg: 13 kg, // 10 kg + 4 x 1 orang 
         },
     ];
  */
 // Start your answer here
 
    let cargoChange = 10;

    for(let i = 0; i < passengers.length; i++){
        passengers[i].availableCargoWeightKg = passengers[i].families.length * 4 + cargoChange
    }

    console.log(passengers);

 // End your answer here