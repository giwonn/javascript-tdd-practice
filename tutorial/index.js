const express = require('express');
const app = express();

function logger(req, res, next) {
  console.log('i am logger');
  next();
}

function logger2(req, res, next) {
  console.log('i am logger2');
  next(); //
}

// 미들웨어 추가는 use를 사용함
// next : 다음 use(미들웨어)를 실행해줌
// app.use((req, res, next) => {});
app.use(logger);
app.use(logger2);

app.listen(3000, () => {
  console.log('Server is running');
});
