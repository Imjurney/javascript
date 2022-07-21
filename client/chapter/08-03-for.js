/* ---------------------------------------------------------------------- */
/* For Loop                                                               */
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

// let i = 0;
// for (; i < frontEndDev.length;) {
//   const sub = frontEndDev[i];
//   console.log(sub);
//   i = i + 1;
// }

// for (let i = 0; i < frontEndDev.length; ++i) {
//   const sub = frontEndDev[i];
//   console.log(sub);
// }

// for 문 (순환)
// - 실행 흐름
// - 순환 중단 또는 이어서 순환

// for (let i = 0; i < frontEndDev.length; ++i) {
//   const sub = frontEndDev[i];
//   if (frontEndDev.includes('React') || frontEndDev.includes('Redux')) {
//     continue;
//   }
//   console.log(sub);
// }

// for (let i = 0; i < frontEndDev.length; ++i) {
//   const sub = frontEndDev[i];
//   if (frontEndDev.toLowerCase().includes('jquery')) {
//     break;
//   }
//   console.log(sub);
// }

// // - 성능 향상에 도움이 되는 팁

// for (let i = 0, l = frontEndDev.length; i < l; ++i) {
//   const sub = frontEndDev[i];
//   if (frontEndDev.toLowerCase().includes('jquery')) {
//     break;
//   }
//   console.log(sub);
// }
// for 문 (역순환)

let i = 0;
for (; ;) {
  if (++i === 1) {
    console.log('wow');
    break;
  }
}


let time0 = performance.now();
for (let i = frontEndDev.length; i >= 0; i--) {
  const sub = frontEndDev[i];
  console.log(sub);

  let result = (performance.now() - time0).toFixed(4);
  console.log(`%c처리 시간 :${result}`);
}


