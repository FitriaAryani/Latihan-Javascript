// String
let warna1 = "Merah";
let warna2 = "Jingga";
let warna3 = "Kuning";
let warna4 = "Hijau";
let warna5 = "Biru";
let warna6 = "Nila";
let warna7 = "Ungu";
console.log("String:", warna1, warna2, warna3, warna4, warna5, warna6, warna7);

// Boolean
let adaBiru = true;
console.log("Mengandung biru:", adaBiru);

// Number
let jumlahWarna = 7;
console.log("Jumlah warna:", jumlahWarna);

// Array
let warnaArray = ["Merah", "Jingga", "Kuning", "Hijau", "Biru", "Nila", "Ungu"];
console.log("Array warna:", warnaArray);

// BigInt
let angkaBesar = 1234567890123456789012345678901234567890n;
console.log("Contoh BigInt:", angkaBesar);

// Undefined
let tidakTerdifinisi;
console.log("Variabel undefined:", tidakTerdifinisi);

// Null
let nilaiKosong = null;
console.log("Nilai null:", nilaiKosong);

// Object
let infoWarna = {
  nama: "Merah",
  hex: "#FF0000",
  // nama: "Biru",
  // hex: "0000FF",
};
console.log("Informasi warna:", infoWarna);

// Alert
alert(`String: ${warna1}
Jumlah Warna Ada: ${jumlahWarna}
Ada Warna Biru: ${adaBiru}
Warna Apa Saja: ${warnaArray.join(", ")}
Info Warna: ${infoWarna.nama} - ${infoWarna.hex}`);
