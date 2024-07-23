const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const XLSX = require('xlsx');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/saveData', (req, res) => {
    let data = req.body;

    // อ่านไฟล์ Excel หากมีอยู่แล้ว ถ้าไม่มีให้สร้างใหม่
    let workbook;
    try {
        workbook = XLSX.readFile('data.xlsx');
    } catch (e) {
        workbook = XLSX.utils.book_new();
        workbook.SheetNames.push('Sheet1');
        workbook.Sheets['Sheet1'] = XLSX.utils.aoa_to_sheet([['Age', 'Gender', 'Occupation']]);
    }

    // เพิ่มข้อมูลใหม่ลงในชีต
    let worksheet = workbook.Sheets['Sheet1'];
    let newRow = [data.age, data.gender, data.occupation];
    let rowNumber = XLSX.utils.sheet_to_json(worksheet).length + 2; // บรรทัดถัดไป
    XLSX.utils.sheet_add_aoa(worksheet, [newRow], {origin: `A${rowNumber}`});

    // เขียนข้อมูลกลับไปในไฟล์ Excel
    XLSX.writeFile(workbook, 'data.xlsx');

    res.json({ message: 'Data saved successfully!' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
