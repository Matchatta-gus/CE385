const isValidScore = (score) => typeof score === "number" && !isNaN(score) && score >= 0 && score <= 100;

const calculateWorkshopScore = (raw, full = 60, weight = 20) => (raw / full) * weight;

function calculateTotal(workshop, attendance, project, midterm, final) {
  return workshop + attendance + project + midterm + final;
}

function toGrade(score) {
  if (!isValidScore(score)) {
    return "Invalid Score";
  }

  const gradeRules = [
    { min: 80, grade: "A" },
    { min: 75, grade: "B+" },
    { min: 70, grade: "B" },
    { min: 65, grade: "C+" },
    { min: 60, grade: "C" },
    { min: 55, grade: "D+" },
    { min: 50, grade: "D" },
    { min: 0, grade: "F" }
  ];

  const matchedRule = gradeRules.find((rule) => score >= rule.min);
  return matchedRule ? matchedRule.grade : "F";
}

const students = [
  { id: "66010001", name: "มิ้น", workshopRaw: 48, attendance: 10, project: 18, midterm: 16, final: 25 },
  { id: "66010002", name: "มาย", workshopRaw: 30, attendance: 8, project: 14, midterm: 10, final: 15 },
  { id: "66010003", name: "มาก", workshopRaw: 55, attendance: 9, project: 16, midterm: 12, final: 20 }
];

const summaryReport = students.map((std) => {
  const workshopWeighted = calculateWorkshopScore(std.workshopRaw);
  const totalScore = calculateTotal(workshopWeighted, std.attendance, std.project, std.midterm, std.final);
  
  const isScoreValid = isValidScore(totalScore);
  const grade = isScoreValid ? toGrade(totalScore) : "N/A";

  return {
    "รหัสนักศึกษา": std.id,
    "ชื่อ-นามสกุล": std.name,
    "คะแนนรวม": totalScore.toFixed(2),
    "สถานะคะแนน": isScoreValid ? "ถูกต้อง" : "ไม่ถูกต้อง",
    "เกรด": grade
  };
});

console.log("===== รายงานผลการเรียนนักศึกษา =====");
console.table(summaryReport);

console.log("\n===== พิสูจน์ค่าเริ่มต้น (Default Parameters) =====");

const testDefault1 = calculateWorkshopScore(48);
const testDefault2 = calculateWorkshopScore(48, 60, 20);
const testDefault3 = calculateWorkshopScore(48, undefined, 25);

console.log(`calculateWorkshopScore(48)               = ${testDefault1}`);
console.log(`calculateWorkshopScore(48, 60, 20)       = ${testDefault2}`);
console.log(`ผลลัพธ์เท่ากันหรือไม่?                      : ${testDefault1 === testDefault2}`);
console.log(`calculateWorkshopScore(48, undefined, 25) = ${testDefault3}`);
