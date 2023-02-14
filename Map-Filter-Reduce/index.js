// ambil elemnt semua video
const videos = Array.from(document.querySelectorAll("[data-duration]"));

// pilih hanaya yang java script lanjutan
let jsLanjut = videos
  .filter((video) => video.textContent.includes("Javascript Lanjutan"))
  // ambil durasi masing-masing durasinya
  .map((item) => item.dataset.duration)
  // ubah durasi menjadi integer lalu ubah menit menjadi detik
  .map((waktu) => {
    // 10:30 > [10, 30] split dan ubah menjadi numeric
    const parts = waktu.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })
  // jumlajkan semua detiknya
  .reduce((total, detik) => total + detik, 0);

// ubah formatnya menjadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// simpan di DOM
const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;
const jumlahVideo = videos.filter((video) =>
  video.textContent.includes("Javascript Lanjutan")
).length;
const pJmlVideo = document.querySelector(".jumlah-video");
pJmlVideo.textContent = `${jumlahVideo} Video`;

console.log(jumlahVideo);
