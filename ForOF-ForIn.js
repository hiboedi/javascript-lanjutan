// For of is Looping for itereble object :
// STRING, ARRAY, ARGUMRNT/NODELIST,TYPED ARRAY, MAP, SET, USER-DEFINED ITERABLE

// For of

// const mhs = ["Budi", "Mylo", "Xylo"];

// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }

// mhs.forEach((m) => console.log(m));

// for (const m of mhs) {
//   console.log(m);
// }

// const str = "Budi";

// for (const s of str) {
//   console.log(s);
// }

// const mhs = ["Budi", "Mylo", "Xylo"];

// mhs.forEach((m, i) => console.log(`${m} adalah mahasiswa ke ${i + 1}`));

// for (const [i, m] of mhs.entries()) {
//   console.log(`${m} adalah mahasiswa ke ${i + 1}`);
// }

// Node List
// const liNama = document.querySelectorAll(".nama");

// for (const n of liNama) {
//   console.log(n.innerHTML);
// }

// arguments

function jumlahkanAngka() {
  let jumlah = 0;
  for (const a of arguments) {
    jumlah += a;
    return jumlah;
  }
}

console.log(jumlahkanAngka(1, 2, 3, 4, 5));
