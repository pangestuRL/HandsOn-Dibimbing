// cari alamat detail si user Provinsi -> city -> jalan, no.

// fungsi login dan pengambilan data province
const login = (callback) => {
  // ini adalah kode bertipe synchronous
  console.log("user input email");
  console.log("user input password");
  console.log("validasi login di server / pengambilan data ...");
  //  ----- end of asynchronous ----

  // proses pengambilan data user
  setTimeout(() => { // kode bertipe asynchronous
    callback({ name: "Ihsan", province: "Jawa Timur" });
    console.log("login dan pengambilan data provinsi berhasil!");
  }, 5000);
};

// fungsi untuk pengambilan data city membutuhkan data province
const getUserCity = (data, callback) => {
  setTimeout(() => {
    if (data.province === "") {
      console.log("city data not found!");
    } else if (data.province === "Jawa Timur") {
      callback({ ...data, city: "Surabaya" });
    } else  {
      callback({ ...data, city: "Jakarta" });
    }
  }, 3000);
};

// fungsi untuk pengambilan data detail user membutuhkan data province & data city
const getUserDetailAddress = (data, callback) => {
  setTimeout(() => {
    if (data.city === "") {
      console.log("address data not found!");
    } else {
      callback({
        ...data,
        address: `Jln. Bung Tomo, No. 2, Kec. Surabaya Selatan, ${data.city}, ${data.province}`,
      });
    }
  }, 3000);
};

login((data) => {
  console.log(data);

  getUserCity(data, (dataCity) => {
    console.log(dataCity);

    getUserDetailAddress(dataCity, (dataDetailAddress) => {
      console.log(
        `Alamat user adalah ${dataDetailAddress.address}`
      );
    });
  });
});
