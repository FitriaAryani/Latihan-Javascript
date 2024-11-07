function myFirst() {
  myDisplayer("Good bye");
}

function mySecond(callback) {
  myDisplayer("Hello");
  callback();
}

function myDisplayer(message) {
  console.log(message);
}

mySecond(myFirst);

// Waktu realtime
function setTime() {
  const header = document.getElementById("header");
  header.textContent = new Date().toString();
}

setInterval(setTime, 1000);
console.log("Program Finish");

// pembagian 2 angka error message
function bagi(angka1, angka2) {
  try {
    if (angka1 === undefined || angka2 === undefined) throw new Error("Harus input dua angka");
    if (typeof angka1 !== "number" || typeof angka2 !== "number") throw new Error("Kedua input harus berupa angka.");
    if (angka2 === 0) throw new Error("Tidak dapat membagi dengan nol.");

    return angka1 / angka2;
  } catch (error) {
    return error.message;
  }
}

// Contoh penggunaan
console.log(bagi(10, 2));
console.log(bagi(10, 0));
console.log(bagi(10, "a"));
console.log(bagi(10));
