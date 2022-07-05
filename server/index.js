//module(코드 조각)
//commonJS 진영의 모듈 사용 방법
//(module.exports, exports.모듈이름)
//(require 함수)
//하드코딩 때 대문자
const server = require('live-server'); //live-server module

const params = {
  host: 'localhost',
  port: 3000,
  root: 'client',
  open: false,
  cors: true,
};

server.start(params);

//Linting(코드 검사, 오류 확인) -ESLint
//formatting (코드 일관성 유지) 추천 -prettier
