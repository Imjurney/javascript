const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

rl.on("line", (line) => {
  console.log(line);
  // 한 줄씩 입력받은 후 실행할 코드
  // 입력된 값은 line에 저장된다.
  rl.close(); // 필수!! close가 없으면 입력을 무한히 받는다.
});
rl.on('close', () => {

  // 입력이 끝난 후 실행할 코드
  process.exit();
});

exports.readline = readline;
exports.rl = rl;