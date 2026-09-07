const wait = (ms, value, willFail = false) =>
  new Promise((resolve, reject) => {
    setTimeout(() => (willFail ? reject(new Error(`${value} ล้มเหลว`)) : resolve(value)), ms);
  });

const createTimeout = (limit) =>
  new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout Exceeded")), limit));

async function main() {
  console.log(" ทดสอบ Promise Combinators\n");

  console.log(" สถานการณ์ที่ 1 ");
  try {
    const dataSuccess = await Promise.all([
      wait(300, "โปรไฟล์"),
      wait(400, "ตารางเรียน"),
      wait(500, "ประกาศ")
    ]);
    console.log("เปิดหน้าแรก:", dataSuccess.join(" + "));
  } catch (err) {
    console.log("หน้าแรกเปิดไม่ได้:", err.message);
  }

  try {
    const dataFail = await Promise.all([
      wait(300, "โปรไฟล์"),
      wait(400, "ตารางเรียน"),
      wait(500, "ประกาศ", true)
    ]);
    console.log("เปิดหน้าแรก:", dataFail.join(" + "));
  } catch (err) {
    console.log("หน้าแรกเปิดไม่ได้:", err.message);
  }

  console.log("\n สถานการณ์ที่ 2 ");
  const notifyList = await Promise.allSettled([
    wait(300, "อีเมล"),
    wait(500, "SMS", true),
    wait(400, "แอป")
  ]);
  notifyList.forEach((item, index) => {
    const names = ["อีเมล", "SMS", "แอป"];
    const statusText = item.status === "fulfilled" ? `สำเร็จ (${item.value})` : `ล้มเหลว (${item.reason.message})`;
    console.log(`แจ้งเตือน [${names[index]}]: ${statusText}`);
  });

  console.log("\n สถานการณ์ที่ 3 ");
  try {
    const mirrorRes = await Promise.any([
      wait(300, "mirror-A", true),
      wait(600, "mirror-B")
    ]);
    console.log("ใช้ข้อมูลจาก:", mirrorRes);
  } catch (e) {
    console.log("ไม่สามารถดึงข้อมูลจาก Mirror ใดได้เลย");
  }

  console.log("\n สถานการณ์ที่ 4 ");
  try {
    const searchRes = await Promise.race([
      wait(1200, "ข้อมูลจากฐานข้อมูล"),
      createTimeout(800)
    ]);
    console.log("ผลการค้นหา:", searchRes);
  } catch (err) {
    console.log("เกิน 800ms -> เลิกรอ -> ใช้แคชเก่าแทน");
  }
}

main();