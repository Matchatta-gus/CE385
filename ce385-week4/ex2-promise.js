const _studentRecords = [
  { id: "66011001", name: "มิ้น", major: "CE", score: 85 },
  { id: "66010202", name: "มาย", major: "LE", score: 48 },
  { id: "67010013", name: "เก้า", major: "CE", score: 72 },
  { id: "67010026", name: "นนท์", major: "IT", score: 65 }
];

const calcGrade = (score) => 
  score >= 80 ? "A" : score >= 75 ? "B+" : score >= 70 ? "B" :
  score >= 65 ? "C+" : score >= 60 ? "C" : score >= 55 ? "D+" :
  score >= 50 ? "D" : "F";

function fetchStudentByIdAsync(id) {
  return new Promise((resolve, reject) => {
    if (typeof id !== "string" || !id.trim()) {
      return reject(new Error("รหัสนักศึกษาไม่ถูกต้อง"));
    }

    setTimeout(() => {
      const match = _studentRecords.find((std) => std.id === id);
      match ? resolve({ ...match }) : reject(new Error(`ไม่พบรหัสนักศึกษา ${id}`));
    }, 300);
  });
}

console.log("=== ทดสอบ Promise (.then/.catch/.finally) ===");

const runTest = (targetId) => {
  fetchStudentByIdAsync(targetId)
    .then((res) => console.log(`[Result ID: ${targetId}]:`, res))
    .catch((err) => console.error(`[Error ID: ${targetId}]:`, err.message))
    .finally(() => console.log(`[Finally] จบกระบวนการ ID: ${targetId}`));
};

runTest("67010026");
runTest("66019999");
runTest(42);

setTimeout(() => {
  console.log("\n=== Promise Chaining 3 ขั้น ===");
  fetchStudentByIdAsync("67010026")
    .then((student) => ({ name: student.name, grade: calcGrade(student.score) }))
    .then((info) => `สรุปผลการเรียน: คุณ ${info.name} สอบได้เกรด ${info.grade}`)
    .then((logMessage) => {
      console.log(logMessage);
      return logMessage;
    })
    .catch((err) => console.error("Chaining Failed:", err.message));
}, 1000);

const promisify = (fn) => (...args) => 
  new Promise((resolve, reject) => {
    fn(...args, (err, val) => (err ? reject(err) : resolve(val)));
  });

const mockOperation = (x, y, cb) => setTimeout(() => {
  isNaN(x + y) ? cb(new Error("ข้อมูลไม่ถูกต้อง")) : cb(null, x * y);
}, 200);

setTimeout(() => {
  console.log("\n=== ทดสอบ Promisify ===");
  const asyncMultiply = promisify(mockOperation);
  asyncMultiply(6, 7).then((res) => console.log("ผลคูณคำนวณผ่าน Promisify:", res)).catch(console.error);
}, 1500);