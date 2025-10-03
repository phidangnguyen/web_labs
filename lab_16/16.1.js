console.log('Các phép toán cần kiểm tra:');

// Toán tử số học (-, *, /, %): Luôn chuyển thành number
// Toán tử cộng (+): Nếu có string → nối chuỗi, ngược lại → cộng số
// So sánh: Chuyển thành number nếu có thể
// Thứ tự: Từ trái sang phải

const a = '9' - '5'
console.log(`a: ${a}`);
const b = '19' - '13' + '17'
console.log(`b: ${b}`);
const c = '19' - '13' + 17;
console.log(`c: ${c}`);
const d = '123' < 57;
console.log(`d: ${d}`);
const e = 5 + 6 + '4' + 9 - 4 - 2;
console.log(`e: ${e}`);
