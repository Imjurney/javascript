/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

// console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
// console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
// console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
// console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
// console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);

// 함수 선언
// 함수 호출
// 함수 값 반환
// function total(priceA, priceB, priceC, priceD) {

//   return priceA + priceB + priceC + priceD;

// }

// let totalValue = total(1000, 200, 30, 40);
// console.log(`총 합 : ${total}`);


// 매개 변수

// 매개 변수 vs. 전달 인자

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;
function rem(a, b) {
  let remvalue = Number(a / 16);
  let remvalue2 = Number(remvalue / b);
  console.log(`${remvalue2}rem`);
}

rem(300);