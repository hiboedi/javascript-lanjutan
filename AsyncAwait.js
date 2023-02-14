// const coba = new Promise((resolve) => {
//     setTimeout(()=> {
//         resolve("selesai");
//     },2000)
// });

function cobaPromise() {
  return new Promise((resolve, reject) => {
    const waktu = 3000;
    if (waktu < 5000) {
      setTimeout(() => {
        resolve("selesai");
      }, 2000);
    } else {
      reject("Kelamaan");
    }
  });
}

// const coba = cobaPromise();
// coba.then((coba) => console.log(coba)).catch((coba) => console.log(coba));

// const coba = cobaPromise();

async function cobaAsync() {
  try {
    const coba = await cobaPromise();
    console.log(coba);
  } catch (err) {
    console.log(err);
  }
}

cobaAsync();
