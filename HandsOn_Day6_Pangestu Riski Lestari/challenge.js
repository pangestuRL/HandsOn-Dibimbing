// Data array produk
const products = [
    { name: "TV", price: 120 },
    { name: "HP", price: 80 },
    { name: "Laptop", price: 200 },
    { name: "Magicom", price: 150 },
    { name: "Blender", price: 50 },
  ];
  
  // 1. Filter, urutkan, dan tampilkan nama serta harga

 
  function productJuned(arrayList){
    let arrRetrun = [];
    for(i=0; i < arrayList.length; i++){
        let price = arrayList[i].price;

        if(price > 100){
            arrRetrun.push(arrayList[i]);
        }
    }
    return arrRetrun;

  }

  console.log(productJuned(products));


  
  const filteredAndSortedProducts = products
    .filter(product => product.price > 100)// Filter produk dengan harga > 100
    .sort((a, b) => b.price - a.price) // Urutkan berdasarkan harga tertinggi
    .map(product => ({ name: product.name, price: product.price })); // Ambil hanya nama dan harga
  
  console.log("Filtered and sorted products:", filteredAndSortedProducts);
  
  // 2. Tambahkan properti discountedPrice ke setiap produk
  const productsWithDiscount = products.map(product => (
        {
            ...product,
            diskon: product.price * 0.9 // Hitung diskon 10%
        }
    ));
  
  console.log("Products with discountedPrice:", productsWithDiscount);


  