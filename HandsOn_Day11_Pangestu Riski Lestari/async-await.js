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

const loginProcess = async () => {
  const dataProvince = await login();
  const dataCity = await getUserCity(dataProvince);
  const dataDetailAddress = await getUserDetailAddress(dataCity);
  
  console.log(`Alamat user adalah ${dataDetailAddress.address}`);
};

// loginProcess();

const getAllUsers = async () => {
  // await fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((response) => response.json())
  //   .then((json) => console.table(json));

  const dataAllUser = await fetch("https://jsonplaceholder.typicode.com/users");

  dataAllUser
    .json()
    .then((dataAllUser) => console.table(dataAllUser))
    .catch((error) => console.log(error));
};

getAllUsers();
