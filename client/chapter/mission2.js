// if (!('nodeType' in node) || node.nodeType !== document.ELEMENT_NODE) {
//   throw new TypeError('첫번쨰 매개변수 node의 타입은 ELEMENT_NODE 이어야 합니다.')
// } else if (typeof styleProp !== 'string') {
//   throw new TypeError('두번째 매개변수 styleProp의 타입은 string이어야 합니다.')
// }
// if (node === null) {
//   throw new Error('문서에 존재하지 않는 요소에 접근을 시도했습니다.');
// }
// if (typeof styleProp !== 'string') {
//   throw new TypeError('두번째 매개변수 styleProp의 타입은 string이어야 합니다.')
// }
// console.assert(css(document.body, 'font-size')) // '16px'
// console.assert(css(document.body, 'font-size', 32)) // undefined, <body style="font-size: 32px"></body>

//시그니쳐 로직 ---------------------------------------------------


// SET : setNodeStyle(node, styleProp, value)


// SET : setNodeStyleFromCssrules(node, cssRule);
//value 존재여부에 따라 GET, SET으로 나누어짐.
// FACTORY : css(node[, styleProp, value | cssRule])

//사용 메서드 -----------------------------------------------------
//setProperty() : style 값 설정하기
//document.body.style.setProperty('font-size', '16px'); 
//getPropertyValue() : style 값 가져오기
//document.body.style.getPropertyValue('font-size'); // '16px' 

//함수의 로직을 분리해서 재 사용할 수 있도록 구성한다.

function css(node, prop, value) {
  if (value) {
    //set
    return node.style.setProperty(prop, value);
  } else {
    //get
    const getStyle = getComputedStyle(node);
    return getStyle.getPropertyValue(prop);
  }
}

//스위치문으로 접근 

//prop, value는 문자열로 입력해야하는 한계가 있음.

// rem(pxValue: number|string, base: number):string;

function rem(pxValue,) {

}


// document.body.style.getPropertyValue('font-size');
 // const styleTest = document.createElement('style');
  // let props = styleTest.innerHTML = "h1{`${x}`:`{y}px`;}";
  // document.head.appendChild(styleTest);

  // const selectNode = document.querySelector('body');
  // let props = document.body.style.setProperty('font-size');
  // let style = document.body.style.getPropertyValue('font-size');



//3개
//생략되게? 

