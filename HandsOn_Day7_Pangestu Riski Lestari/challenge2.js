const _ = require("lodash");

const orders = [ 
    { id: 1, items: [{ name: "Laptop", qty: 1, price: 1000 }, { name: "Mouse", qty: 2, price: 50 }] },
    { id: 2, items: [{ name: "Phone", qty: 1, price: 800 }, { name: "Charger", qty: 1, price: 20 }] }, 
    { id: 3, items: [{ name: "Tablet", qty: 1, price: 600 }, { name: "Cover", qty: 3, price: 30 }] } 
];

const ordersWithTotal = orders.map(order => ({
    id: order.id,
    total: _.sumBy(order.items, item => item.qty * item.price),
  }));
  
  console.log(ordersWithTotal);