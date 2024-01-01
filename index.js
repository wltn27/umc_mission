// index.js

import express, { response } from 'express';
import { tempRouter } from './src/routes/temp.route.js';
import { status } from './config/response.status.js'
import { BaseError } from './config/error.js'

const app = express();
const port = 3000;

// router setting
app.use('/temp', tempRouter);

// 잡지 못한 오류들을 받아 다음 에러 핸들러에게 넘기는 코드 추가
app.use((req, res, next) => {
    const err = new BaseError(status.NOT_FOUND);
    next(err);
});

// error handling
app.use((err, req, res, next) => {
    // 템플릿 엔진 변수 설정
    res.locals.message = err.message;   
    // 개발환경이면 에러를 출력하고 아니면 출력하지 않기
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {}; 

    // (따로 추가) err.data가 존재하는지 확인하고, 없다면 기본 값을 설정
    console.log("error", err);
    res.status(err.data.status || status.INTERNAL_SERVER_ERROR).send(response(err.data));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});