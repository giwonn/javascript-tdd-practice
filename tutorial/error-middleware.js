const express = require('express');
const app = express();

function commonmw(req, res, next) {
  console.log('commonmw');
  next(new Error('error ouccered'));
}

function errormw(err, req, res, next) {
  console.log(err.message);
  next();
}

// 미들웨어 추가는 use를 사용함
// next : 다음 use(미들웨어)를 실행해줌
// app.use((req, res, next) => {});
app.use(commonmw);
app.use(errormw);

app.listen(3000, () => {
  console.log('Server is running');
});
