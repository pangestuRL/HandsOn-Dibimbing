// const promise = new Promise((success, error) => {
//   const process = false;

//   if (process) {
//     success({ name: "Budi", email: "Budi@gmail.com" });
//   } else {
//     error("Data not loaded!");
//   }
// });

// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// cari alamat detail si user Provinsi -> city -> jalan, no.

// fungsi login dan pengambilan data province
const login = () => {
  // ini adalah kode bertipe synchronous
  console.log("user input email");
  console.log("user input password");
  console.log("validasi login di server / pengambilan data ...");
  //  ----- end of asynchronous ----

  const promise = new Promise((resolve, reject) => {
    // proses pengambilan data user
    setTimeout(() => {
      // kode bertipe asynchronous
      resolve({ name: "Ihsan", province: "Jawa Timur" });
      console.log("login dan pengambilan data provinsi berhasil!");

      reject("Login failed!");
    }, 5000);
  });

  return promise;
};

// fungsi untuk pengambilan data city membutuhkan data province
const getUserCity = (data) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.province === "") {
        reject("city data not found!");
      } else if (data.province === "Jawa Timur") {
        resolve({ ...data, city: "Surabaya" });
      } else {
        resolve({ ...data, city: "Jakarta" });
      }
    }, 3000);
  });

  return promise;
};

// fungsi untuk pengambilan data detail user membutuhkan data province & data city
const getUserDetailAddress = (data) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.city === "") {
        reject("address data not found!");
      } else {
        resolve({
          ...data,
          address: `Jln. Bung Tomo, No. 2, Kec. Surabaya Selatan, ${data.city}, ${data.province}`,
        });
      }
    }, 3000);
  });

  return promise;
};

login()
  .then((data) => {
    console.log(data);

    return getUserCity(data);
  })
  .then((dataUserCity) => {
    console.log(dataUserCity);

    return getUserDetailAddress(dataUserCity);
  })
  .then((dataDetailAddress) => {
    console.log(dataDetailAddress)

    console.log(`Alamat user adalah ${dataDetailAddress.address}`);
  })
  .catch((error) => console.log(error));
