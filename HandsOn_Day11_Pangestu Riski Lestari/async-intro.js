function f1() {
  console.log("f1");
}

function f2() {
  // berjalan sekali menunggu beberapa detik
  setTimeout(() => {
    console.log("f2 time out");
  }, 3000);

  // berjalan setiap beberapa detik berkali kali
  setInterval(() => {
    console.log("f2");
  }, 3000);
}

function f3() {
  console.log("f3");
}

// f1();
// f2();
// f3();

const login = (callback) => {
  console.log("user input email");
  console.log("user input password");
  console.log("validasi login di server / pengambilan data ...");

  // proses pengambilan data user
  setTimeout(() => {
    callback({ name: "Kiki", address: "Bekasi" });
    console.log("login dan pengambilan data berhasil!");
  }, 5000);
};

login((data) => {
  console.log(data);
});
