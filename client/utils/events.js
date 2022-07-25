//on(
  node: selectorSTR | HTMLELEMENT
  type : string,
  handler: function
);
//off(  
  node: selectorSTR | HTMLELEMENT
  type : string,
  handler: function);
//이벤트 핸들러 키기, 끄기

//동일참조 handlebodyclick 동일함수 같은 함수이어야 제거된다.

//-----------------------------------

// remove : 복구 됨
// delete : 복구 안됨.

//const off = (document.body ,'click', function(){})
// IIFE 패턴이 필요하다.
//off 타입이 함수이다.
