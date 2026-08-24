const strData = "สวัสดี";
const numData = 24;
const boolData = true;
let undefinedData;
const nullData = null;
const arrayData = [1, 2, 3];

console.log(`ค่า: ${strData} | ชนิด: ${typeof strData}`);
console.log(`ค่า: ${numData} | ชนิด: ${typeof numData}`);
console.log(`ค่า: ${boolData} | ชนิด: ${typeof boolData}`);
console.log(`ค่า: ${undefinedData} | ชนิด: ${typeof undefinedData}`);
console.log(`ค่า: ${nullData} | ชนิด: ${typeof nullData}`);
console.log(`ค่า: ${arrayData} | ชนิด: ${typeof arrayData}`);

console.log("\n ส่วนที่ 2 ");
console.log(`typeof null ได้ผลว่า: ${typeof null}`);

let unassignedVar;
console.log(`ตัวแปรที่ประกาศแล้วยังไม่กำหนดค่า มีชนิดเป็น: ${typeof unassignedVar}`);

const nanValue = Number("abc");
console.log(`typeof NaN ได้ผลว่า: ${typeof nanValue}`);

console.log("\n ส่วนที่ 3 ");
const inputAge = "20";
const inputScore = "85.5";

const ageNum = Number(inputAge);
console.log(`inputAge + 5 = ${ageNum + 5}`);

const scoreNum = Number(inputScore);
console.log(`inputScore ทศนิยม 1 ตำแหน่ง = ${scoreNum.toFixed(1)}`);

console.log(`inputAge === 20 ได้ผลลัพธ์เป็น: ${inputAge === 20}`);
console.log(`Number(inputAge) === 20 ได้ผลลัพธ์เป็น: ${Number(inputAge) === 20}`);