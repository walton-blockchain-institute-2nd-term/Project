const express = require('express');
const app = express();

const bodyParsert = require('body-parser');

app.get('/api/query', function(res){
    console.log("함수 실행 됩니까?")
    return status(200).json("It's Okay")
})

app.listen();
console.log("서버 실행 완료")