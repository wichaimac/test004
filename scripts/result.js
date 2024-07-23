document.addEventListener('DOMContentLoaded', function() {
    console.log("JavaScript loaded.");

    // ดึงข้อมูลคะแนนสะสมจาก localStorage
    let extrovertScore = parseInt(localStorage.getItem('extrovertScore')) || 0;
    let introvertScore = parseInt(localStorage.getItem('introvertScore')) || 0;
    let sensingScore = parseInt(localStorage.getItem('sensingScore')) || 0;
    let intuitionScore = parseInt(localStorage.getItem('intuitionScore')) || 0;
    let thinkingScore = parseInt(localStorage.getItem('thinkingScore')) || 0;
    let feelingScore = parseInt(localStorage.getItem('FeelingScore')) || 0;
    let judgingScore = parseInt(localStorage.getItem('judgingScore')) || 0;
    let perceivingScore = parseInt(localStorage.getItem('perceivingScore')) || 0;
    // ดึงค่าตัวแปรใหม่จาก localStorage เช่น let anotherFactor = parseInt(localStorage.getItem('anotherFactor')) || 0;

    console.log("Final Extrovert score:", extrovertScore);
    console.log("Final Introvert score:", introvertScore);
    console.log("Final Sensing score:", sensingScore);
    console.log("Final Intuition score:", intuitionScore);
    console.log("Final Thinking score:", thinkingScore);
    console.log("Final Feeling score:", feelingScore);
    console.log("Final Judging score:", judgingScore);
    console.log("Final Perceiving score:", perceivingScore);


    // แสดงค่าตัวแปรใหม่ใน console เช่น console.log("Final Another factor:", anotherFactor);

    // คำนวณผลลัพธ์ที่ได้ตามคะแนนสะสม
    let resultText = '';
    let resultImageSrc = '';

    if (extrovertScore > 1 && sensingScore > 1 && thinkingScore > 1 && perceivingScore > 1) { // เปลี่ยนเงื่อนไขตามที่ต้องการ
        resultText = 'ESTP';
        resultImageSrc = 'images/ฉลาม.png';
    } else if (extrovertScore > 1 && sensingScore > 1 && thinkingScore < 2 && perceivingScore > 1){
        resultText = 'ESFP';
        resultImageSrc = 'images/นกกระจอกเทศ.png';
    } else if (extrovertScore > 1 && intuitionScore > 1 && thinkingScore < 2 && perceivingScore > 1){
        resultText = 'ENFP';
        resultImageSrc = 'images/นก.png';
    } else if (extrovertScore > 1 && intuitionScore > 1 && thinkingScore > 1 && perceivingScore > 1){
        resultText = 'ENTP';
        resultImageSrc = 'images/ลิง.png';
    } else if (extrovertScore > 1 && sensingScore > 1 && thinkingScore > 1 && judgingScore > 1){
        resultText = 'ESTJ';
        resultImageSrc = 'images/สิงโต.png';
    } else if (extrovertScore > 1 && sensingScore > 1 && thinkingScore < 2 && judgingScore > 1){
        resultText = 'ESFJ';
        resultImageSrc = 'images/สุนัข.png';
    } else if (extrovertScore > 1 && intuitionScore > 1 && thinkingScore < 2 && judgingScore > 1){
        resultText = 'ENFJ';
        resultImageSrc = 'images/โลมา.png';
    } else if (extrovertScore > 1 && intuitionScore > 1 && thinkingScore > 1 && judgingScore > 1){
        resultText = 'ENTJ';
        resultImageSrc = 'images/อินทรี.png';
    } else if (introvertScore > 1 && sensingScore > 1 && thinkingScore > 1 && perceivingScore > 1){
        resultText = 'ISTP';
        resultImageSrc = 'images/เสือ.png';
    } else if (introvertScore > 1 && sensingScore > 1 && thinkingScore < 2 && perceivingScore > 1){
        resultText = 'ISFP';
        resultImageSrc = 'images/แมว.png';
    } else if (introvertScore > 1 && intuitionScore > 1 && thinkingScore < 2 && perceivingScore > 1){
        resultText = 'INFP';
        resultImageSrc = 'images/กวาง.png';
    } else if (introvertScore > 1 && intuitionScore > 1 && thinkingScore > 1 && perceivingScore > 1){
        resultText = 'INTP';
        resultImageSrc = 'images/ปลาหมึก.png';
    } else if (introvertScore > 1 && sensingScore > 1 && thinkingScore > 1 && judgingScore > 1){
        resultText = 'ISTJ';
        resultImageSrc = 'images/บีเวอร์.png';
    } else if (introvertScore > 1 && sensingScore > 1 && thinkingScore < 2 && judgingScore > 1){
        resultText = 'ISFJ';
        resultImageSrc = 'images/หมี.png';
    } else if (introvertScore > 1 && intuitionScore > 1 && thinkingScore < 2 && judgingScore > 1){
        resultText = 'INFJ';
        resultImageSrc = 'images/หมาป่า.png';
    } else if (introvertScore > 1 && intuitionScore > 1 && thinkingScore > 1 && judgingScore > 1){
        resultText = 'INTJ';
        resultImageSrc = 'images/นกฮูก.png';
    }
    if (resultImageSrc) {
        let resultImageElement = document.getElementById('resultImageSrc');
        resultImageElement.src = resultImageSrc;
        resultImageElement.style.display = 'block';
        resultImageElement.style.width = '1080px'; // ปรับขนาดตามต้องการ
        resultImageElement.style.height = 'auto';
        resultImageElement.style.margin = '0 auto';
    }

  /*   let resultText = '';

    if (extrovertScore > 1 && sensingScore > 1 && thinkingScore > 1 && perceivingScore > 1) { // เปลี่ยนเงื่อนไขตามที่ต้องการ
        resultText = 'ESTP';
    } else if (extrovertScore > 1 && sensingScore > 1 && feelingScore > 1 && perceivingScore > 1){
        resultText = 'ESFP';
    } else if (extrovertScore > 1 && intuitionScore > 1 && feelingScore > 1 && perceivingScore > 1){
        resultText = 'ENFP';
    } else if (extrovertScore > 1 && intuitionScore > 1 && thinkingScore > 1 && perceivingScore > 1){
        resultText = 'ENTP';
    } else if (extrovertScore > 1 && sensingScore > 1 && thinkingScore > 1 && judgingScore > 1){
        resultText = 'ESTJ';
    } else if (extrovertScore > 1 && sensingScore > 1 && feelingScore > 1 && judgingScore > 1){
        resultText = 'ESFJ';
    } else if (extrovertScore > 1 && intuitionScore > 1 && feelingScore > 1 && judgingScore > 1){
        resultText = 'ENFJ';
    } else if (extrovertScore > 1 && intuitionScore > 1 && thinkingScore > 1 && judgingScore > 1){
        resultText = 'ENTJ';
    } else if (introvertScore > 1 && sensingScore > 1 && thinkingScore > 1 && perceivingScore > 1){
        resultText = 'ISTP';
    } else if (introvertScore > 1 && sensingScore > 1 && feelingScore > 1 && perceivingScore > 1){
        resultText = 'ISFP';
    } else if (introvertScore > 1 && intuitionScore > 1 && feelingScore > 1 && perceivingScore > 1){
        resultText = 'INFP';
    } else if (introvertScore > 1 && intuitionScore > 1 && thinkingScore > 1 && perceivingScore > 1){
        resultText = 'INTP';
    } else if (introvertScore > 1 && sensingScore > 1 && thinkingScore > 1 && judgingScore > 1){
        resultText = 'ISTJ';
    } else if (introvertScore > 1 && sensingScore > 1 && feelingScore > 1 && judgingScore > 1){
        resultText = 'ISFJ';
    } else if (introvertScore > 1 && intuitionScore > 1 && feelingScore > 1 && judgingScore > 1){
        resultText = 'INFJ';
    } else if (introvertScore > 1 && intuitionScore > 1 && thinkingScore > 1 && judgingScore > 1){
        resultText = 'INTJ';
    } */


    // เพิ่มเงื่อนไขสำหรับตัวแปรใหม่ เช่น if (anotherFactor > threshold) { resultText = 'New Result'; }

    console.log("Result text:", resultText);

    // แสดงผลลัพธ์ในหน้า HTML
    const resultElement = document.getElementById('resultText');
    resultElement.textContent = resultText;
});
