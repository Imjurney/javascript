'use strict';

/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

 //number -> string

let year = 2020;
// let convertedYearType = typeof year.toString();
let convertedYearType = typeof (year + '');
console.log(convertedYearType);

// undefined, null

// boolean


/* 데이터 → 숫자 ----------------------------------------------------------- */

// undeinfed

// null

// boolean

// string
//100px 
//parseInt(값, 진수)
//getComputedStyle

// numeric string
//숫자형 문자
//+ㅇㅇㅇ.value + 10


/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 

//방법 1. boolean(bull) = false
//방법 2. !!dataType