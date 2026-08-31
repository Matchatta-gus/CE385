const initialStudents = [
  { id: "66010001", name: "มิ้น", major: "CE", score: 85, contact: { email: "mint@ce.ac.th", phone: "081-111-1111" } },
  { id: "66010002", name: "มาย", major: "IT", score: 48, contact: { email: "mind@it.ac.th", phone: "082-222-2222" } },
  { id: "66010003", name: "มาก", major: "CE", score: 72, contact: { email: "mak@ce.ac.th", phone: "083-333-3333" } },
  { id: "66010004", name: "นนท์", major: "IT", score: 65, contact: { email: "non@it.ac.th", phone: "084-444-4444" } },
  { id: "66010005", name: "ฝน", major: "CE", score: 91, contact: { email: "fon@ce.ac.th", phone: "085-555-5555" } },
  { id: "66010006", name: "ก้อง", major: "IT", score: 42, contact: { email: "kong@it.ac.th", phone: "086-666-6666" } }
];

const findById = (students, id) => students.find((s) => s.id === id);

const findByMajor = (students, major) => students.filter((s) => s.major === major);

const hasFailingStudent = (students) => students.some((s) => s.score < 50);

const getEmail = (students, id) => {
  const student = findById(students, id);
  return student?.contact?.email ?? "ไม่พบข้อมูลติดต่อ";
};

const addStudent = (students, newStudent) => [...students, newStudent];

console.log("===== ทดสอบการค้นหาปกติ =====");
console.log("นักศึกษา รหัส 66010001:", findById(initialStudents, "66010001"));
console.log("นักศึกษา สาขา CE:", findByMajor(initialStudents, "CE"));
console.log("มีนักศึกษาตกหรือไม่ (< 50):", hasFailingStudent(initialStudents));
console.log("อีเมล รหัส 66010001:", getEmail(initialStudents, "66010001"));

console.log("\n===== ทดสอบกรณีหาไม่เจอ (รหัส 9999) =====");
console.log("findById('9999'):", findById(initialStudents, "9999")); // แสดง undefined ไม่เกิด Error
console.log("getEmail('9999'):", getEmail(initialStudents, "9999"));   // แสดง "ไม่พบข้อมูลติดต่อ"

console.log("\n===== เพิ่มนักศึกษาใหม่ที่ไม่มี contact และทดสอบ getEmail =====");
const newStudentNoContact = { id: "66010007", name: "บอส", major: "CE", score: 78 };

const updatedStudents = addStudent(initialStudents, newStudentNoContact);

console.log("จำนวนนักศึกษาเดิม:", initialStudents.length); // 6 คนเท่าเดิม (ไม่ถูกแก้)
console.log("จำนวนนักศึกษาใหม่:", updatedStudents.length); // 7 คน
console.log("getEmail รหัส 66010007 (ไม่มี contact):", getEmail(updatedStudents, "66010007")); // แสดง "ไม่พบข้อมูลติดต่อ"