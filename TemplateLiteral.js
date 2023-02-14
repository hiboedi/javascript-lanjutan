// template string
const nama = "Budiman";
const umur = 23;
console.log(`Halo, nama saya ${nama}, dan saya berumur ${umur} tahun`);

// concat
console.log(
  "Halo, nama saya " + nama + ", dan saya berumur " + umur + " tahun"
);

// embeded expression

const x = 10;
console.log(`${x % 2 == 0 ? "genap" : "ganjil"}`);

// html fragmen
const mhs = {
  nama: "Budiman",
  umur: 23,
  nim: "18011238",
  email: "hi.boedi8@gmail.com",
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class='nim'>${mhs.nim}</span>
</div>`;
console.log(el);
