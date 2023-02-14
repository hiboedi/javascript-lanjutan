const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

//  mencari angka yang lebih besar  =3
// for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }

// console.log(newAngka);

// filter

// const filter = angka.filter((a) => a >= 3);

// console.log(filter);

// map
// kalikan semua angka dengan 2
// const newAngka = angka.map((a) => a * 2);
// console.log(newAngka);

// reduce
// jumlahkan seluruh elemnt pada array
// const reduce = angka.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );
// console.log(reduce);

// method chain
// mencari angka yang lebih besar dari dari 5 dan dikalikan 3 dan jumlahkan

const hasil = angka
  .filter((a) => a > 5)
  .map((a) => a * 3)
  .reduce((acc, cur) => acc + cur, 0);
console.log(hasil);
