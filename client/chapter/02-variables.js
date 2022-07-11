/* --------------------------------------------------------------------- */
/* Variables                                                             */
/* --------------------------------------------------------------------- */


/* 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수와 상수를 작성해봅니다. ----------- */

// - 갯수 별 상품 가격 계산하기
// - 구매 제품 가격의 총 합
// - 1년 기준 일자 수
// - 구매 결제 여부
// - 구매 결제 내역
// - 브랜드 접두사
// - 오늘의 운세`
// - 상품 정보


//상수 이름 작명 규칙
//ALL_CAPS = static (코드 실행 전에 어떤 값이 들어올 지 알고 있음)
//camelCase = dynamic(코드 실행 중 어떤 값이 들어올지 알 수 없음)

//요청상태(states)

//pending 아무것도 안함
//loading 요청(로딩 중, 대기)
//fullfiled, resolved 응답(성공)
//rejected 응답(실패)


const calcOfpriceQuantity;
let totalOrderPrice;
const DAYS_PER_YEAR ="365";
let WhetherTopay;
let paymentHistory;
const brandPrifix = "Euid";
const todayHoroscope = "red";
let productInfo;


/* variables ----------------------------------------------------------- */


/* constant variables -------------------------------------------------- */

