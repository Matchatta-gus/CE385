const students = [
  { id: "66010001", name: "มิ้น", major: "CE", score: 85 },
  { id: "66010002", name: "มาย", major: "IT", score: 48 },
  { id: "66010003", name: "มาก", major: "CE", score: 72 },
  { id: "66010004", name: "นนท์", major: "IT", score: 65 },
  { id: "66010005", name: "ฝน", major: "CE", score: 91 },
  { id: "66010006", name: "ก้อง", major: "IT", score: 42 }
];

const toGrade = (score) => {
  if (score >= 80) return "A";
  if (score >= 75) return "B+";
  if (score >= 70) return "B";
  if (score >= 65) return "C+";
  if (score >= 60) return "C";
  if (score >= 55) return "D+";
  if (score >= 50) return "D";
  return "F";
};


const getNames = (arr) => arr.map((s) => s.name);


const getPassedStudents = (arr) => arr.filter((s) => s.score >= 50);


const getTotalScore = (arr) => arr.reduce((sum, s) => sum + s.score, 0);

const getAverageScore = (arr) => {
  if (arr.length === 0) return 0;
  const total = getTotalScore(arr);
  return Number((total / arr.length).toFixed(2));
};


const countByGrade = (arr) =>
  arr.reduce((acc, s) => {
    const grade = toGrade(s.score);
    acc[grade] = (acc[grade] || 0) + 1;
    return acc;
  }, {});


const getTopStudent = (arr) =>
  arr.reduce((top, s) => (!top || s.score > top.score ? s : top), null);

const avgPassedCE = (arr) =>
  arr.filter((s) => s.major === "CE" && s.score >= 50).map((s) => s.score).reduce((acc, score, idx, src) => acc + score / src.length, 0);

console.log("===== ผลการทดสอบกับข้อมูลปกติ =====");
console.log("ชื่อทุกคน:", getNames(students));
console.log("คนที่สอบผ่าน:", getPassedStudents(students));
console.log("ผลรวมคะแนน:", getTotalScore(students));
console.log("คะแนนเฉลี่ย:", getAverageScore(students));
console.log("จำนวนแยกตามเกรด:", countByGrade(students));
console.log("คนที่ได้คะแนนสูงสุด:", getTopStudent(students));
console.log("คะแนนเฉลี่ยเด็ก CE ที่สอบผ่าน (Method Chaining):", avgPassedCE(students));

console.log("\n===== ส่วนที่ 3: ทดสอบกรณีขอบ (Edge Cases) ด้วย Array ว่าง [] =====");
console.log("getNames([]):", getNames([]));               
console.log("getPassedStudents([]):", getPassedStudents([])); 
console.log("getTotalScore([]):", getTotalScore([]));     
console.log("getAverageScore([]):", getAverageScore([])); 
console.log("countByGrade([]):", countByGrade([]));       
console.log("getTopStudent([]):", getTopStudent([]));     
console.log("avgPassedCE([]):", avgPassedCE([]));         