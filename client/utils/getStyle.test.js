/* global getStyle */

//test코드 작성
console.assert(
  typeof getStyle(document.body, 'color') === 'string',
  'getStyle(document.body, "color")의 반환 값 타입은 string이 아닙니다.'
);

console.assert(
  getStyle(document.body, 'font-size') === '16px',
  'getStyle(document.body, "font-size")의 반환 값은 "16px"이 아닙니다.'
);

console.assert(
  getStyle('h1', 'font-size') === `${'2rem'.replace('rem', '') * 16}px`,
  `getStyle("h1, "font-size")의 반환 값은 "${'2rem'.replace('rem', '') * 16}px"이 아닙니다.`
);

document.documentElement.style.fontSize = '16px';
