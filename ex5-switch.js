function getMenuPrice(menu) {
  switch (menu) {
    case "ข้าวผัด":
    case "ข้าวมันไก่":
    case "ข้าวหมูแดง":
      return 50;
    case "ผัดไทย":
      return 60;
    case "ต้มยำกุ้ง":
      return 120;
    default: 
      return 0;
  }
}

function getSizeMultiplier(size) {
  switch (size) {
    case "ธรรมดา":
      return 1;
    case "พิเศษ":
      return 1.5;
    case "จัมโบ้":
      return 2;
    default:
      return 1;
  }
}

const orders = [
  { menu: "ผัดไทย", size: "พิเศษ", qty: 2 },
  { menu: "ข้าวมันไก่", size: "ธรรมดา", qty: 1 },
  { menu: "ต้มยำกุ้ง", size: "จัมโบ้", qty: 1 },
  { menu: "ข้าวผัด", size: "พิเศษ", qty: 3 },
  { menu: "ชาไทย", size: "ธรรมดา", qty: 2 } 
];

let grandTotal = 0;

console.log(" รายการสั่งอาหาร ");

for (const order of orders) {
  const basePrice = getMenuPrice(order.menu);
  const multiplier = getSizeMultiplier(order.size);
  const itemTotal = basePrice * multiplier * order.qty;
  
  grandTotal += itemTotal;
  
  console.log(`${order.menu} (${order.size}) x${order.qty} = ${itemTotal} บาท`);
}

console.log(`ราคารวมทั้งบิล = ${grandTotal} บาท`);