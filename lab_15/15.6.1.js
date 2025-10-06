"use strict";
// ===========================================
// Lab 15.6.1: So sánh chỉ số BMI (phần 1)
// ===========================================

console.log('=== LAB 15.6.1: SO SÁNH CHỈ SỐ BMI (PHẦN 1) ===');

// Function để tính và so sánh BMI
function calculateAndCompareBMI(markMass, markHeight, johnMass, johnHeight, testName) {
    console.log(`\n--- ${testName} ---`);
    
    // Lưu trữ dữ liệu
    console.log('Dữ liệu:');
    console.log(`Mark: ${markMass}kg, ${markHeight}m`);
    console.log(`John: ${johnMass}kg, ${johnHeight}m`);
    
    // Tính BMI theo công thức BMI = mass/(height*height)
    const markBMI = markMass / (markHeight * markHeight);
    const johnBMI = johnMass / (johnHeight * johnHeight);
    
    console.log('\nKết quả tính BMI:');
    console.log(`BMI của Mark: ${markBMI.toFixed(1)}`);
    console.log(`BMI của John: ${johnBMI.toFixed(1)}`);
    
    // Tạo biến Boolean markHigherBMI
    const markHigherBMI = markBMI > johnBMI;
    console.log(`Mark có BMI cao hơn John? ${markHigherBMI}`);
    
    return { markBMI, johnBMI, markHigherBMI };
}

// Dữ liệu kiểm tra 1: Mark 78kg-1.69m, John 92kg-1.95m
const test1 = calculateAndCompareBMI(78, 1.69, 92, 1.95, 'Dữ liệu kiểm tra 1');

// Dữ liệu kiểm tra 2: Mark 95kg-1.88m, John 85kg-1.76m  
const test2 = calculateAndCompareBMI(95, 1.88, 85, 1.76, 'Dữ liệu kiểm tra 2');