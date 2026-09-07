const _studentRecords = [
  { id: "66011001", name: "มิ้น", major: "CE", score: 85 },
  { id: "66010202", name: "มาย", major: "LE", score: 48 },
  { id: "67010013", name: "เก้า", major: "CE", score: 72 },
  { id: "67010026", name: "นนท์", major: "IT", score: 65 }
];

const calcGrade = (s) => (s >= 80 ? "A" : s >= 50 ? "D" : "F");

function fetchStudentByIdAsync(id) {
  return new Promise((resolve, reject) => {
    if (typeof id !== "string" || !id.trim()) return reject(new Error("รหัสนักศึกษาไม่ถูกต้อง"));
    setTimeout(() => {
      const found = _studentRecords.find((s) => s.id === id);
      found ? resolve({ ...found }) : reject(new Error(`ไม่พบรหัสนักศึกษา ${id}`));
    }, 300);
  });
}

async function reportSequential(idList) {
  const t0 = Date.now();
  const list = [];
  for (const id of idList) {
    const item = await fetchStudentByIdAsync(id);
    list.push(item);
  }
  const timeUsed = Date.now() - t0;
  console.log(`[Sequential Execution] เวลาที่ใช้: ${timeUsed} ms`);
  return timeUsed;
}

async function reportParallel(idList, baseTime) {
  const t0 = Date.now();
  const tasks = idList.map((id) => fetchStudentByIdAsync(id));
  const list = await Promise.all(tasks);
  const timeUsed = Date.now() - t0;
  console.log(`[Parallel Execution]   เวลาที่ใช้: ${timeUsed} ms`);
  console.log(`>>> ประสิทธิภาพสูงขึ้น: ${(baseTime / timeUsed).toFixed(2)} เท่า`);
}

async function safeReport(id) {
  try {
    const std = await fetchStudentByIdAsync(id);
    console.log(`พบข้อมูล: ${std.name} (เกรด ${calcGrade(std.score)})`);
  } catch (e) {
    console.log(`ตรวจไม่พบ: ${e.message}`);
  } finally {
    console.log(`-- จบการตรวจสอบ ${id} --`);
  }
}

async function main() {
  const targetIds = ["66011001", "66010202", "67010013"];

  const seqTime = await reportSequential(targetIds);
  await reportParallel(targetIds, seqTime);

  console.log("\n--- ทดสอบ safeReport ---");
  await safeReport("66011001");
  await safeReport("66019999");
}

main();