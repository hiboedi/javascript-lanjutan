// Lexical Scope

function init() {
  let nama = "Budi";
  let umur = 23;
  function tampilNama() {
    console.log(nama);
    console.log(umur);
  }
  tampilNama();
}
init();
//
function init() {
  return function tampilNama(nama) {
    console.log(nama);
  };
}
let tampil = init();
tampil("budi");

// function factory
function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`Halo ${nama}, Selamat ${waktu},Semoga harimu menyenangkan!`);
  };
}

let selamatPagi = ucapkanSalam("Pagi");
let selamatSaing = ucapkanSalam("Siang");
let selamatMalam = ucapkanSalam("malam");

selamatPagi("Budi");
selamatMalam("Milo");

// private method
let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

console.log(add());
console.log(add());
console.log(add());
