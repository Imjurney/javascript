/* ---------------------------------------------------------------------- */
/* Nullish Coalescing Operator                                            */
/* ---------------------------------------------------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.
//삼항 연산자

receivedEmailAddress = (emailAddress === undefined || emailAddress === null) ? 'user@company.io' : emailAddress;

receivedEmailAddress = emailAddress ?? 'user@company.io';
console.log(receivedEmailAddress);

/* ?? vs. || ----------------------------------------------------------- *
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환*/
function defaultArg(wantValue, initialValue) {
  return wantValue ?? initialValue;
}
const INITIAL_VALUE = '10px';
let value;

value = defaultArg(null, INITIAL_VALUE);
console.log('value =', value);