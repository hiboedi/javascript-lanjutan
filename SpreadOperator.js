// mengcopy array
// ...

// const mhs = ["Budi", "Mylo", "Xylo"];
// const mhs1 = [...mhs];
// mhs1[0] = "Tokio";
// console.log(mhs1);

// const liMhs = document.querySelectorAll("li");
// const mhs = [];

// for (let i = 0; i < liMhs.length; i++) {
//   mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);

// const mhs = [...liMhs].map((m) => m.textContent);
// console.log(mhs);

const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");

nama.innerHTML = huruf;
