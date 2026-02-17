const XLSX = require('xlsx');
const path = require('path');

const filePath = "C:\\Users\\Neal\\Downloads\\Advaita-Timeline_NEW_2026.xlsx";
try {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const datasheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(datasheet);
    console.log(JSON.stringify(data, null, 2));
} catch (error) {
    console.error("Error reading excel:", error.message);
    process.exit(1);
}
