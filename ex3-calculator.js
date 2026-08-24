const WORKSHOP_MAX_RAW = 60;
const WORKSHOP_WEIGHTED_MAX = 20;
const TOTAL_MAX_SCORE = 100;
const TARGET_GRADE_A_SCORE = 80;

const workshopRaw = 48;
const attendance = 9;
const project = 17;
const midterm = 15;
const final = 24;

const workshopScore = (workshopRaw / WORKSHOP_MAX_RAW) * WORKSHOP_WEIGHTED_MAX;

const totalScore = workshopScore + attendance + project + midterm + final;
const percentage = (totalScore / TOTAL_MAX_SCORE) * 100;
const scoreNeededForA = TARGET_GRADE_A_SCORE - totalScore;

console.log(` ใบสรุปคะแนนรายวิชา CE385 
คะแนน Workshop ที่แปลงแล้ว : ${workshopScore.toFixed(2)} / ${WORKSHOP_WEIGHTED_MAX} คะแนน
คะแนน เข้าเรียน          : ${attendance.toFixed(2)} คะแนน
คะแนน โครงงาน           : ${project.toFixed(2)} คะแนน
คะแนน สอบกลางภาค        : ${midterm.toFixed(2)} คะแนน
คะแนน สอบปลายภาค        : ${final.toFixed(2)} คะแนน
คะแนนรวมทั้งหมด          : ${totalScore.toFixed(2)} / ${TOTAL_MAX_SCORE} คะแนน
คิดเป็น                 : ${percentage.toFixed(2)}%
ยังขาดอีกเพื่อได้ 80 คะแนน : ${scoreNeededForA.toFixed(2)} คะแนน
`);