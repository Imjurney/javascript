/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = "No";
let goingToWatchMovie = "yes";


if (didWatchMovie.includes('Yes')) {
  console.log('응');
} else if (goingToWatchMovie.includes('Yes')) {
  console.log('응 볼거임');

} else {
  console.log('별로 안땡기네');
}


// if 문(statement)

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자
let message = didwatchMovie === 'yes' ? '응' : '별로 안 땡기네';
// 멀티 조건부 연산자 식

message = didwatchMovie === 'yes'
  ? '응' : '별로 안 땡기네'
  // : isGoing