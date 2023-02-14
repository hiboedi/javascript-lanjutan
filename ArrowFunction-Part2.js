const Mahasiswa = function () {
  this.nama = "Budi";
  this.umur = 23;
  this.sayHelo = function () {
    console.log(`Helo, nama ${this.nama}, umur saya ${this.umur} tahun`);
  };
};

const budi = new Mahasiswa();
