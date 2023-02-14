// Rest parameter

// function myFunc() {
//   return [...arguments];
// }
// console.log(myFunc(1, 2, 3, 4, 5));

// function jumlahkan(...angka) {
//   // let total = 0
//   // for(const a of angka) {
//   //     total += a
//   // }
//   return angka.reduce((a, b) => a + b);
// }
// console.log(jumlahkan(1, 2, 3, 4, 5));

// Array distructering

// const kelom = ["Budi", "Mylo", "Xylo", "Tokio"];
// const [ketua, wakil, ...anggota] = kelom;
// console.log(anggota);

// object distructering

// const team = {
//   pm: "Budi",
//   frontEnd: "Xylo",
//   backEnd: "Mylo",
//   ux: "Tokio",
//   devOps: "Morvin",
// };

// const { pm, ...myTeam } = team;

// console.log(myTeam);

// Filter

function filterBy(type, ...values) {
  return values.filter((v) => typeof v === type);
}

console.log(filterBy("string", 1, 4, 5, "Budi", true, 9, "Mylo"));
