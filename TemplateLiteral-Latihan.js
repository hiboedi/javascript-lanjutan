// HTML Fragment

// const mhs = {
//   nama: "Budiman",
//   umur: 23,
//   nim: "18011238",
//   email: "hi.boedi8@gmail.com",
// };

// const el = `<div class="mhs">
//   <h2>${mhs.nama}</h2>
//   <span class='nim'>${mhs.nim}</span>
// </div>`;

// Looping
// const mhs = [
//   {
//     nama: "Budi",
//     email: "budi@gmail.com",
//   },
//   {
//     nama: "Mylo",
//     email: "milo@gmail.com",
//   },
//   {
//     nama: "Xylo",
//     email: "xilo@gmail.com",
//   },
//   {
//     nama: "Tokio",
//     email: "tokio@gmail.com",
//   },
//   {
//     nama: "Dono",
//     email: "dono@gmail.com",
//   },
// ];

// const el = `<div class="mhs">
//     ${mhs
//       .map(
//         (m) => `<ul>
//     <li>${m.nama}</li>
//     <li>${m.email}</li>
//     </ul>`
//       )
//       .join("")}
// </div>`;

// pengkondisian
// ternary
// const lagu = {
//   judul: "hati yang luka",
//   penyanyi: "Betharia Sonata",
//   feat: "Anonim",
// };

// const el = `<div class="lagu">
//     <ul>
//     <li>${lagu.judul}</li>
//     <li>${lagu.penyanyi} ${lagu.feat ? `(feat.${lagu.feat})` : ""}</li>
//     </ul>
// </div>`;

// nested html fragmen bersarang

const mhs = {
  nama: "Budiman",
  semester: 7,
  mataKuliah: ["B.Indonesia", "B.Inggris", "Komputer"],
};

function cetakMataKuliah(mataKuliah) {
  return `
    <ol>
    ${mataKuliah.map((mk) => `<li>${mk}</li>`).join("")}
    </ol>
    `;
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester ${mhs.semester}</span>
    <h4 >Mata Kuliah</h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
</div>`;

document.body.innerHTML = el;
