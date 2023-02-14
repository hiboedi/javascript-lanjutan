// Function declaration
function tampilPesan(nama) {
  console.log("halo", nama);
}
tampilPesan("Budi");

//function exxpressiom

let tampil = function (nama) {
  console.log("halo", nama);
};
tampil("Milo");

// Arro function

let pesan = (nama) => {
  console.log("halo", nama);
};
pesan("Xylo");

// implicit return hanya 1 parameter dan output hanya return
const ucapkanSalam = (nama) => `Halo, ${nama}`;
console.log(ucapkanSalam("Budiman"));

// implicit return tanpa parameter
const hello = () => "Hello, World";
console.log(hello());

// function map
let mahasiswa = ["budi", "milo", "xilo"];

let jumlahHuruf = mahasiswa.map(function (nama) {
  return nama.length;
});
console.log(jumlahHuruf);
// dunction map arow
let jumlahAlfabet = mahasiswa.map((nama) => nama.length);
console.log(jumlahAlfabet);
// return menjadi object
let object = mahasiswa.map((nama) => ({ nama: nama, jmlHuruf: nama.length }));
console.table(object);
