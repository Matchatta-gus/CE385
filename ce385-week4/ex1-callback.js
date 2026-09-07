const _studentRecords = [
  { id: "66011001", name: "มิ้น", major: "CE", score: 85 },
  { id: "66010202", name: "มาย", major: "LE", score: 48 },
  { id: "67010013", name: "เก้า", major: "CE", score: 72 },
  { id: "67010026", name: "นนท์", major: "IT", score: 65 }
];

function fetchStudentById(id, callback) {
  if (typeof id !== "string" || !id.trim()) {
    callback(new Error("รหัสนักศึกษาไม่ถูกต้อง"));
    return;
  }

  setTimeout(() => {
    const target = _studentRecords.find((item) => item.id === id);

    if (!target) {
      callback(new Error(`ไม่พบรหัสนักศึกษา ${id}`));
      return;
    }

    callback(null, Object.assign({}, target));
  }, 300);
}

console.log("=== ทดสอบ Callback Pattern ===");

fetchStudentById("66011001", (err, data) => {
  if (err) return console.error("[ case A ] Error:", err.message);
  console.log("[ case A ] Success:", data);
});

fetchStudentById("66019999", (err, data) => {
  if (err) return console.error("[ case B ] Error:", err.message);
  console.log("[ case B ] Success:", data);
});

fetchStudentById(42, (err, data) => {
  if (err) return console.error("[ case C ] Error:", err.message);
  console.log("[ case C ] Success:", data);
});
