import * as XLSX from 'xlsx';
import path from 'path';

export class ExcelReader {
  static readTestData(fileName = 'Data.xlsx', sheetName = 'login') {
    const filePath = path.join(process.cwd(), 'test-data', fileName);
    const workbook = XLSX.readFile(filePath);
    const worksheet = workbook.Sheets[sheetName];
    return XLSX.utils.sheet_to_json(worksheet);
  }

  static getLoginData(rowIndex = 0) {
    const data = this.readTestData();
    return data[rowIndex];
  }
}
