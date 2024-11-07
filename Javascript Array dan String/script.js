// split
const foods = "Mie, Nasi goreng, Sate, Lontong, Nasi Telor";
const splittedFoods = foods.split(", ");
console.log(splittedFoods);

// replace
console.log(foods.replace("Nasi goreng", "NASI GORENG"));

// ARRAY
// PUSH
// Tidak membuat array baru
const tropicalFruits = ["Coconut", "Apple", "Rambutan", "Mango"];
console.log("Jumlah array stlh ditambahkan data baru " + tropicalFruits.push("Durian"));

console.log(tropicalFruits);

// POP
// const newTropicalFruits = tropicalFruits // lokasi penyimpanan datanya bukan isi datanya
// newTropicalFruits.pop()
// console.log(tropicalFruits)

// const newTropicalFruits =  tropicalFruits.slice() // membuat array baru dari array yg telah ada
// const newTropicalFruits =  Array.from(tropicalFruits)
const newTropicalFruits = [...tropicalFruits]; // spread operator ... membuat array baru
newTropicalFruits.pop();
console.log(`Array lama : ` + tropicalFruits);
console.log(`Array baru : ` + newTropicalFruits);

// SHIFT
// Menghapus data dari depan
newTropicalFruits.shift();
console.log(newTropicalFruits);

// UNSHIFT
// menambahkan data dari depan
const myFavoriteFruits = ["Melon", "Grapes"];
newTropicalFruits.unshift("Pineapple", "Banana", ...myFavoriteFruits);
console.log(newTropicalFruits);

// CONCAT
// menggabungkan 2 array atau lebih
// mengembalikan array baru
const elsiFavFruits = ["Durian", "Kelengkang"];

const favFruits = newTropicalFruits.concat(elsiFavFruits);
console.log(favFruits);

const arrNum1 = [1, 2, 3, 1, 4, 6];
const arrNum2 = [9, 7, 8, 5];
const arrNum3 = [...arrNum1, ...arrNum2];
console.log(arrNum3);

// REDUCE
const totalNum = arrNum3.reduce((acc, currItem) => acc + currItem);
console.log(totalNum);

// ForEach
favFruits.forEach((fruit, index) => console.log(`Index ke ${index} buah: ${fruit}`));

// Find
console.log("Array NUM3 " + arrNum3);
const findNumberLargerThan2 = arrNum3.find((num) => num > 2);
console.log(findNumberLargerThan2);

// LATIHAN SOAL ANTRIAN
const antrian = ["Ray", "Fiki", "Fadhilla", "Farah"];
console.log(antrian);

// tambah antrian
antrian.push("Nabila");
antrian.push("Maza", "Elsi");
console.log(antrian);

// antrian terakhir pulang
antrian.pop();
console.log(antrian);

// orang 1 2 selesai
antrian.shift();
antrian.shift();
console.log(antrian);

// pembeli baru nyerobot
antrian.unshift("Tomi");
console.log("Hasil akhir antrian:", antrian);
