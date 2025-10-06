"use strict";
// https://docs.google.com/document/d/1U6LIEmerjBKZsWzg-8D5VpcKwBfHzEBk/edit
// Lab 14.1: Giá trị và biến Javascript

// 1. Khai báo các biến và gán giá trị
let country = 'VietNam';
let continent = 'Châu Á';
let population = 97.3; // triệu dân

// In các giá trị ra console
console.log('Quốc gia:', country);
console.log('Châu lục:', continent);
console.log('Dân số:', population + ' triệu dân');

// ===========================================
// Lab 15.1: Các kiểu dữ liệu
// ===========================================

// 1. Khai báo biến isIsland và language
let isIsland = false; // Việt Nam không phải là hòn đảo
let language; // Chưa gán giá trị

// 2 .In các kiểu dữ liệu
console.log('Kiểu dữ liệu của isIsland:', typeof isIsland);
console.log('Kiểu dữ liệu của population:', typeof population);
console.log('Kiểu dữ liệu của country:', typeof country);
console.log('Kiểu dữ liệu của language:', typeof language);


// ===========================================
// Lab 15.2: Let, const và var
// ===========================================

console.log('\n=== LAB 15.2: Let, const và var ===');

// 1. Gán giá trị cho language
language = 'Vietnamese';
console.log('Ngôn ngữ:', language);

// 2. Chuyển các biến không thay đổi thành const
// (Tạo lại với const - các biến này không nên thay đổi)
const countryConst = 'VietNam';
const continentConst = 'Châu Á';
const isIslandConst = false;
const languageConst = 'Vietnamese';


// 3. Thử thay đổi giá trị biến const (sẽ gây lỗi)
console.log('Thử thay đổi biến const...');
try {
    countryConst = 'Thailand';
    console.log('Không thể thay đổi biến const!');
} catch(error) {
    console.log('Lỗi khi thay đổi const:', error.message);
}

// ===========================================
// Lab 15.3: Các toán tử cơ bản
// ===========================================

console.log('\n=== LAB 15.3: Các toán tử cơ bản ===');

// 1. Chia đôi dân số
console.log('1. Dân số mỗi miền nếu chia đôi:', population / 2 + ' triệu dân');

// 2. Tăng population thêm 1
population++;
console.log('2. Dân số sau khi tăng thêm 1:', population + ' triệu dân');

// 3. So sánh với Phần Lan (6 triệu)
const finlandPopulation = 6;
console.log('3. Quốc gia có nhiều dân hơn Phần Lan?', population > finlandPopulation);

// 4. So sánh với dân số trung bình (33 triệu)
const averagePopulation = 33;
console.log('4. Quốc gia có ít dân hơn mức trung bình?', population < averagePopulation);

// 5. Tạo biến description
let description = countryConst + ' and its ' + population + ' million people speak ' + languageConst;
console.log('5. Description:', description);


// ===========================================
// Lab 15.4: String và Template Literal
// ===========================================

console.log('\n=== LAB 15.4: Template Literal ===');

// 1. Tạo lại description với template literal
description = `${countryConst} and its ${population} million people speak ${languageConst}`;
console.log('Description với template literal:', description);

// ===========================================
// Lab 15.5: Câu lệnh if/else
// ===========================================

console.log('\n=== LAB 15.5: Câu lệnh if/else ===');

// 1. Kiểm tra dân số với 33 triệu
function checkPopulation(pop, countryName) {
    if (pop > 33) {
        console.log(`${countryName}'s population is above average`);
    } else {
        const difference = 33 - pop;
        console.log(`${countryName}'s population is ${difference} million below average`);
    }
}

console.log('1. Kiểm tra với dân số hiện tại:');
checkPopulation(population, countryConst);

// 2. Thử với các giá trị khác
console.log('\n2. Thử với các giá trị khác:');

// Lưu giá trị ban đầu
const originalPopulation = population;

// Thử với 13 triệu
population = 13;
console.log('Với dân số 13 triệu:');
checkPopulation(population, countryConst);

// Thử với 130 triệu
population = 130;
console.log('Với dân số 130 triệu:');
checkPopulation(population, countryConst);

// Đặt lại giá trị ban đầu
population = originalPopulation;
console.log('Đã đặt lại dân số về giá trị ban đầu:', population + ' triệu dân');