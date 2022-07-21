/* ---------------------------------------------------------------------- */
/* Do While Loop                                                          */
/* ---------------------------------------------------------------------- */

const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
];


// do ~ while 문 (역순환)
// let repeat = prompt('순환 횟수를 알려주세요', 0);
// let time0 = performance.now();
// do {
//   if (!repeat || repeat <= 0) {
//     console.log('최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.');
//     break;
//   }
//   console.log(repeat);
//   repeat -= 1;
// } while (repeat);
// let time1 = performance.now();
// console.log((performance.now() - time0).toFixed(2));

// checkPerformance(repeat);

// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우, 
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// do ~ while 문 (순환)

let repeat = prompt('순환 횟수를 알려주세요', 0);
let i = 1;
do {
  if (!repeat || repeat <= 0) {
    console.log('최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.');
    break;
  }
  repeat += 1;
  console.log(i++);
} while (i <= repeat);
// let time1 = performance.now();
// console.log((performance.now() - time0).toFixed(2));
// - 위 do ~ while 문을 순방향으로 순환되도록 설정