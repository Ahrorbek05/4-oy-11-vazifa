// 1.
// let str = 'international';
// console.log(str.at(-1));

// 2.
// let str = 'nationality';
// console.log(str.charAt(5));
// if ( str.length % 2 !== 1){
// }
// console.log(str.charAt(6));

// 3.
// let str = 'Nation';
// for( i = 0; i < str.length; i++){
//     console.log(str.charCodeAt(i));
// }

// 4.
// let str = 'International';
// console.log(str.length);
// if( str.length > 10){
//     console.log('Uzoq string');
// } else {
//     console.log('Qisqa string');
// }

// 5.
// let str = 'nation';
// console.log(str.slice(-3));

// 6.
// let str = 'helloworld';
// console.log(str.substring(2));

// 7.
// let str = 'ahmadjon noyibjonov';
// console.log(str.toUpperCase());

// 8.
// let str = 'AHMADJON NOYIBJONOV';
// console.log(str.toLowerCase());

// 9.
// let str = [1, 5, 9,[11, 13, 15]];
// console.log(str.flat());
// console.log(str.concat());

// 10.
// let str = '            hello world            ';
// console.log(str.trim());

// 11.
// let str = 'Salom        ';
// console.log(str.trimEnd());

// 12.
// let str = '        Salom';
// console.log(str.trimStart());

// 13.
// let str = 'hello world';
// let res = str.padStart(20,'0');
// console.log(res);
// console.log(res.length);

// 14.
// let str = 'salom';
// let res = str.padEnd(25, '                         ');
// console.log(res);
// console.log(res.length);

// 15.
// let str = 'international';
// console.log(str.substring(0, 10));

// 16.
// let str = 'nationality';
// console.log(str.substr(-5));

// 17.
// function findFirstAppleIndex(str) {
//     return str.indexOf("apple");
// }
// console.log(findFirstAppleIndex("Siz apple kompaniyasi haqida qanday fikrdasiz?"));

// 18.
// function symbol(str) {
//     return str.indexOf('@');
// }
// console.log(symbol('hello@world'));

// 19.
// let str = 'world';
// function getMiddleChars(str) {
//     let res;
//     if( str.length % 2 == 1){
//         let middleIndex = Math.trunc(str.length / 2);
//         res = str.substring(middleIndex, middleIndex + 1);
//     }
//     return res;
// }
// console.log(getMiddleChars('world'));

// 20.
// let str = 'world';
// console.log(str.padStart(10, 'hello'));
// console.log(str.length);

// 21.
// let str = 'salom';
// console.log(str.repeat(10));

// 22.
// let str = 'hello';
// console.log(str.replace('h', 'H'));

// 23.
// let str = 'cat' ; 'cat' ; 'cat';
// console.log(str.replace('cat', 'dog'));

// 24.
// let str = 'essential';
// console.log(str.replace(/e/g, 'E'));

// 25.
// let str = 'hello world';
// function splitBySpaces(str) {
//     return str.split(' ');
// }
// console.log(splitBySpaces('hello world'));

// 26.
// let str = 'hello world';
// function splitBySpaces(str) {
//     return str.split('');
// }
// console.log(splitBySpaces('hello world'));

// 27.
// function splitBySpaces(str, delimiter) {
//     return str.split(delimiter);
// }
// console.log(splitBySpaces("hello world, dream, clutch", ","));

// 28.
// function processString(str) {
//     let res = str.replace(/a/g, '*');
//     let res1 = res.split(' ');
//     let res2 = res1.map(soz => soz.repeat(3));
    
//     return res2;
//   }
//   console.log(processString("banana apple"));  

// 29.
// let str = "hello world"
// function firstsymbol(str) {
//     return str.indexOf('@');
// }
// console.log(firstsymbol("hello@ wolrd"));      
  
// 30.
// function includes2024(str) {
//     return str.includes("2024");
// }
// console.log(includes2024(" Bugun O'zbekistonda Islomiy 1445 yil, Bugun O'zbekistonda georgian 2024 yil"));

// 31.
// function startsWithHello(str) {
//     return str.startsWith('Hello');
// }
// console.log(startsWithHello("Hello world"));
// console.log(startsWithHello("Ahmadjon Hello"));

// 32.
// function includesCat(str) {
//     return str.includes("cat");
// }
// console.log(includesCat("Is there a cat word here?"));
// console.log(includesCat("What word is written here?"));

// 33.
// function joinArrayElementsWithXYZ(str) {
//     let res = str.split(',');
//     let result = res.join('xyz');
//     return result;
// }
// console.log(joinArrayElementsWithXYZ("salom,hayr,qalaysan"));

// 34.
// Berilgan massivdagi barcha elementlarning uzunliklari yig'indisini hisoblash va bu qiymatni stringga aylantirish uchun `sumArrayElementsLength(arr)` funksiyasini yozing.

// 35.
// function replaceAppleWithOrange(str) {
//     let result = str.replace('apple', 'orange');
//     return result;
// }
// console.log(replaceAppleWithOrange("Menda apple va apple bor."));

// 36.
// function searchForDigit(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (!isNaN(str[i]) && str[i] !== ' ') {
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(searchForDigit("Menda 3 ta olma bor"));
// console.log(searchForDigit("Menda uchta ta olma bor"));

// 37.
// let arr = ['SALOM, HAYR, APLLE, BOOKS']
// function lowercaseArrayToString(str) {
//     // let res = arr.map(arr.toLowerCase());
//     // console.log(arr.toLowerCase());
//     let res1 = arr.join('-');
//     return res1;
// }
// console.log(lowercaseArrayToString());
// Ishlolmadim //

// 38.
