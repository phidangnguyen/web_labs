// ===========================================
// Lab 15.6.2: So sánh chỉ số BMI (phần 2)
// ===========================================

console.log('\n\n=== LAB 15.6.2: SO SÁNH CHỈ SỐ BMI (PHẦN 2) ===');

// Function để hiển thị kết quả so sánh với template literal
function displayBMIComparison(markMass, markHeight, johnMass, johnHeight, testName) {
    console.log(`\n--- ${testName} ---`);
    
    // Tính BMI
    const markBMI = markMass / (markHeight * markHeight);
    const johnBMI = johnMass / (johnHeight * johnHeight);
    const markHigherBMI = markBMI > johnBMI;
    
    // Hiển thị thông tin cơ bản
    console.log(`Mark: ${markMass}kg, ${markHeight}m → BMI: ${markBMI.toFixed(1)}`);
    console.log(`John: ${johnMass}kg, ${johnHeight}m → BMI: ${johnBMI.toFixed(1)}`);
    
    // Sử dụng if/else để hiển thị kết quả so sánh
    if (markHigherBMI) {
        console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`);
    } else {
        console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})!`);
    }
    
    return { markBMI, johnBMI, markHigherBMI };
}

// Test với dữ liệu 1
displayBMIComparison(78, 1.69, 92, 1.95, 'Test với dữ liệu 1');

// Test với dữ liệu 2
displayBMIComparison(95, 1.88, 85, 1.76, 'Test với dữ liệu 2');