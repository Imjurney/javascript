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
const anonymousFunctionExpression = function() {

}

// 유명(이름을 가진) 함수 (표현)식
const namedFunctionExpression = function name(){
  conole.log(typeof Name); //function 재귀
};

 conole.log(typeof Name); //undifined

// 콜백 함수 (표현)식
let callbackFunctionExpression;
let clickCount = 0;
document.onclick = function clickMe() {
  console.log('clicked document');
  if(clickCount++ > 10) return;
  console.log(clickCount);
  clickMe();
}


// 함수 선언문 vs. 함수 (표현)식
//함수 선언은 반드시 이름이 필요. 함수 식은 이름이 없을 수도 있다
//스코프 호이스트 시, 처리되는 방식의 차이 ( 선언은 몸체가 실행영역으로 끌여올려짐 / 식은 할당되는 값은 그대로, 이름만 끌어올려지는 현상을 보임)
//식 안에서 선언을 사용할 수 없음. 반면 함수 식은 식 내 부에서도 사용 가능

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
//js 함수는 그 자체로 '값'
//함수 값을 그대로 즉시 실행 (이름 호출 없이)
(fuction(){},());

//모듈로서 활용
//정보 은닉(캡슐화): 외부의 접근 차단(보호)
//일부 정보 노출
//모듈 패턴, 노출 패턴
