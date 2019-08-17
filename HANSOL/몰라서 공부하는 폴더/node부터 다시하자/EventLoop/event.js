// event 발생시 event를 대기하는 메인 루프가 감지되었을때 CallBack 함수 실행

// events 모듈 사용
var events = require('events');
// EventEmitter 객체 생성 ( 이벤트를 감지하는 것 같다. )
var eventEmitter = new events.EventEmitter();

// EventHandler 를 사용하는 함수 생성
var connectHandler = function connected(){
    console.log("event handler Connection Successful");
    // 이벤트 발생 ( date_received )
    eventEmitter.emit("data_received");
}

// event와 connectHandler 연동 ( bind )
// ' ' 이름은 마음대로 설정 가능
eventEmitter.on('connection',connectHandler);

eventEmitter.on('data_received', function(){
    console.log("데이터 받았어요");
})

eventEmitter.emit('connection');

console.log("Program has ended");


