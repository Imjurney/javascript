/* ---------------------------------------------------------------------- */
/* Functions → Expression                                                 */
/* ---------------------------------------------------------------------- */


// function calcTotal(moneyA, moneyB, moneyC, moneyD) {
//   return moneyA + moneyB + moneyC + moneyD;
// }



// 함수 선언 → 일반 함수 (표현)식

let sum = 0;
const calcurateTotal = function calculateTotal() {
  return Array.from(arguments).reduce(function(total, current){
    return total + current;
  }, 0);
};
console.log(calcurateTotal(1,2,3,4));

//global makeArray
// for(let arg of arguments) {
//   sum += arg;
// }
// return sum;

// const args = Array.from(arguments);
// args.forEach(function (arg) {
  //   sum += arg;
  // });
  
  
  // let resultX = calcTotal(10000, 8900, 1360, 2100);
  // let resultZ = calcTotal(9000, -2500, 5000, 11900);
  
  // console.log(resultX);
  
  // console.log(resultZ);
  //유사 배열 ->  배열로 변환???
  //유사 배열 객체인 것처럼 배열의 메서드를 빌려쓸 수 있다 this의 유연성
//new array() = [] 매번 생성 메모리 잡아먹음
// const copyedArgs =  Array.prototype.slice.call(arguments);


// const calculateTotal= function calculateTotal(moneyA, moneyB, moneyC, moneyD){
//   //arguments 객체를 사용해 함수의 매개변수 없이 
//   //grguments의 아이템의 총합을 구하는 방식으로 코드 로직을 완성해보세요.
//   return moneyA + moneyB + moneyC + moneyD;
// };


// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression;


// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression;


// 콜백 함수 (표현)식
let callbackFunctionExpression;


// 함수 선언문 vs. 함수 (표현)식


// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;
