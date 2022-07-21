/* ---------------------------------------------------------------------- */
/* Switch                                                                 */
/* ---------------------------------------------------------------------- */
//single (const|let|var) 패턴
const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

// let thisTime = 'LUNCH';

// switch (thisTime) {
//   case MORNING:
//     console.log('뉴스기사 글을 읽는다');
//     break;

//   case LUNCH:
//     console.log('자주 가는 식당에 가서 식사를 한다.');
//     break;

//   case DINNER:
//     console.log('동네 한바퀴를 조깅한다');
//     break;

//   case NIGHT:
//     console.log('친구에게 전화를 걸어 수다를 떤다.');
//     break;

//   case LATE_NIGHT:
//     console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
//     break;

//   case DAWN:
//     console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
//     break;

// }


/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'


/* switch문 → if문 변환 --------------------------------------------------- */
// let thisTime = 'LUNCH';

// if (thisTime === MORNING) {
//   console.log('뉴스기사 글을 읽는다');
// } else if (thisTime === LUNCH) {
//   console.log('자주 가는 식당에 가서 식사를 한다.');
// } else if (thisTime === DINNER) {
//   console.log('동네 한바퀴를 조깅한다');
// } else if (thisTime === NIGHT) {
//   console.log('친구에게 전화를 걸어 수다를 떤다.');
// } else if (thisTime === LATE_NIGHT || thisTime === DAWN) {
//   console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
// }

/* switch vs. if -------------------------------------------------------- */

//0~6
//일~토

function getDayofWeek(day) {
  let resultDay = '';
  switch (day) {
    case 0: resultDay = '일'; break;
    case 1: resultDay = '월'; break;
    case 2: resultDay = '화'; break;
    case 3: resultDay = '수'; break;
    case 4: resultDay = '목'; break;
    case 5: resultDay = '금'; break;
    case 6: resultDay = '토'; break;

    default:
      throw new TypeError('전달 가능한 값은 0~6 사이의 정수이어야합니다');
  }
  return `${resultDay}요일`;
}

let result = getDayofWeek(6);

console.log(result);


function isWeekand(dayValue) {
  let today = getDayofWeek(dayValue);
  return today.includes('일') || today.includes('토');
}

function getRandom(n) {
  return Math.round(MAth.random() * n);
}