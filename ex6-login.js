function login(inputUser, inputPass, role, isActive, age) {
  const validUser = "admin";
  const validPass = "ce385pass";

  if (inputUser !== validUser || inputPass !== validPass) {
    return "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง";
  }
  if (!isActive) {
    return "บัญชีนี้ถูกระงับการใช้งาน";
  }
  if (age < 18) {
    return "อายุไม่ถึงเกณฑ์";
  }
  if (role === "อาจารย์") {
    return "เข้าสู่ระบบสำเร็จ (สิทธิ์ผู้ดูแล)";
  } else if (role === "นักศึกษา") {
    return "เข้าสู่ระบบสำเร็จ (สิทธิ์ทั่วไป)";
  } else {
    return "บทบาทผู้ใช้งานไม่ถูกต้อง";
  }
}

const testCases = [
  { user: "admin", pass: "ce385pass", role: "อาจารย์", active: true, age: 35, desc: "สำเร็จ (อาจารย์)" },
  { user: "admin", pass: "ce385pass", role: "นักศึกษา", active: true, age: 20, desc: "สำเร็จ (นักศึกษา)" },
  { user: "admin", pass: "wrongpass", role: "นักศึกษา", active: true, age: 20, desc: "รหัสผ่านผิด" },
  { user: "guest", pass: "ce385pass", role: "อาจารย์", active: true, age: 25, desc: "ชื่อผู้ใช้ผิด" },
  { user: "admin", pass: "ce385pass", role: "นักศึกษา", active: false, age: 22, desc: "บัญชีถูกระงับ" },
  { user: "admin", pass: "ce385pass", role: "นักศึกษา", active: true, age: 16, desc: "อายุไม่ถึง" }
];

console.log(" ผลการทดสอบระบบ Login ");
for (const test of testCases) {
  const result = login(test.user, test.pass, test.role, test.active, test.age);
  console.log(`'[${test.desc}] -> ${result}`);
}

/*ส่วน 3 ถามตอบ
1.ตอบ ต้องยืนยันตัวตนให้ผ่านก่อนว่าคือใคร แล้วค่อยตรวจสอบสิทธิของคนนั้น
2.ตอบ ทำให้หลุดบอกข้อมูลระบบแก่ผู้ไม่หวังดี โดยที่ยังไม่ได้ใส่รหัสผ่านที่ถูกต้อง*/