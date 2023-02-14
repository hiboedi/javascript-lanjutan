// Dstructerin variable

// Distructering Array

// const perkenalan = ["Halo", "nama", "saya", "Budi"];

// // const [salam, satu, dua, nama] = perkenalan;
// const [salam, , , nama] = perkenalan;

// console.log(nama);

// swap item
// let a = 1;
// let b = 2;

// console.log(a);
// console.log(b)[(a, b)] = [b, a];

// console.log(a);
// console.log(b);

// return value pada function

// function coba() {
//   return [1, 2];
// }

// const [a, b] = coba();
// console.log(b);

// Rest parameter

// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);

// Dsitructering Object

// const mhs = {
//   nama: "Budi",
//   umur: 23,
// };

// const { nama, umur } = mhs;
// console.log(nama);

// Assignment tanpa deklarasi object

// ({ nama, umur } = { nama: "Budi", umur: 23 });

// console.log(nama);

// Assignt ke variable baru

// const mhs = {
//   nama: "Budi",
//   umur: 23,
// };

// const { nama: n, umur: u } = mhs;
// console.log(n);

// Memberikan default value

// const mhs = {
//   nama: "Budi",
//   umur: 23,
//   email: "hi.boedi8@gmail.com",
// };

// const { nama, umur, email = "email@default.com" } = mhs;
// console.log(email);

// memberi nilai default dan memberi nama variable baru

// const mhs = {
//   nama: "Budi",
//   umur: 23,
//   email: "hi.boedi8@gmail.com",
// };

// const { nama: n, umur: u, email: e = "email@default.com" } = mhs;
// console.log(e);

// rest parameter

// const mhs = {
//   nama: "Budi",
//   umur: 23,
//   email: "hi.boedi8@gmail.com",
// };

// const { nama, ...values } = mhs;
// console.log(values);

// Mengambil field pada object yangkita kirim sebagai parameter untuk function

const mhs = {
  id: 133,
  nama: "Budi",
  umur: 23,
  email: "hi.boedi8@gmail.com",
};

function getIdMhs({ id }) {
  return id;
}

console.log(getIdMhs(mhs));
