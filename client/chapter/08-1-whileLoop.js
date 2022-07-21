/* ---------------------------------------------------------------------- */
/* Loop                                                                   */
/* ---------------------------------------------------------------------- */
//Array(special Object)
//'length'
//key(string) indexing(0,1,2,3...)


const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

// console.log(frontEndDev[0]);
// console.log(frontEndDev[1]);
// console.log(frontEndDev[2]);
// console.log(frontEndDev[3]);
// console.log(frontEndDev[4]);
// console.log(frontEndDev[5]);


/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */


// while 문(순환 : 순방향)
// let index = 0;
// let fedindex = frontEndDev.length;
// while (index < fedindex) {
//   let value = frontEndDev[index];
//   index += 1;
//   console.log(value);
// }

//역방향 출력하기
// let lastIndex = frontEndDev.length - 1;

// while (lastIndex >= 0) {
//   let value = frontEndDev[lastIndex];
//   lastIndex -= 1
//   console.log(value);
// }

// let i = 0;
// while (frontEndDev[i]) {
//   console.log(frontEndDev[i]);
//   ++i;
// }
const copyData = frontEndDev.slice();

while (frontEndDev.length) {
  console.log(frontEndDev.pop());
}

//
function checkPerformance() {
  let time0 = performance.now();

  let result = (performance.now() - time0).toFixed(4);;
  console.log(`%c처리 시간 :${result}`);
  return result;
}


// do ~ while 문


// for 문


/* 객체 순환 -------------------------------------------------------------- */


const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2022,
};


// for ~ in 문


// for ~ of 문
// array → object 변환
