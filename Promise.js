// Promise
// Adalah object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asyncronous di masa datang
// janji (terpenuhi / ingkar)
// state (fullfiled / rejected / pednding)
// callback (resolve / reject /finally)
// aksi (then / catch)

// fetch("//url-api")
//   .then((response) => response.json)
//   .then((response) => console.log(response));

// contoh 1

// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve("janji telah ditepati");
//   } else {
//     reject("ingkar janji");
//   }
// });

// janji1
//   .then((response) => console.log("Ok " + response))
//   .catch((response) => console.log("Not Ok " + response));

// contoh 2
let ditepati = false;
const janji2 = new Promise((resolve, reject) => {
  if (ditepati) {
    setTimeout(() => {
      resolve("Ditepati setelah beberapa saat");
    }, 2000);
  } else {
    setTimeout(() => {
      reject("Tidak ditepati setelah beberapa saat");
    }, 2000);
  }
});

// console.log("Mulai");
// console.log(janji2.then(() => console.log(janji2)));

// janji2
//   .then((response) => console.log("Ok " + response))
//   .catch((response) => console.log("Not Ok " + response));

// janji2
//   .finally(() => console.log("Selesai Menunggu"))
//   .then((response) => console.log("Ok " + response))
//   .catch((response) => console.log("Not Ok " + response));

// console.log("Selesai");

// promise.all()

const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: "Devio",
        sutradara: "Gunawan",
        pemeran: "Setia jaya",
      },
    ]);
  }, 1000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "Bandung",
        temperatur: 26,
        kondisi: "Cerah berawan",
      },
    ]);
  }, 500);
});

// film.then((response) => console.log(response));
// cuaca.then((response) => console.log(response));

Promise.all([film, cuaca])
  // .then((response) => console.log(response));
  .then((response) => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
  });
