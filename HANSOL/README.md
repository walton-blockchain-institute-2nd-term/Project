# 하이퍼레저 연결 프로젝트

# NPM로 설치(이 방법 사용 안함)
## bootstrap 설치
``` shell
# package.json 파일 생성
npm init --y
# bootstrap 설치
npm install --save bootstrap
```

## 디렉토리 구성
``` file system
bootstrap/
┝─── CSS/
┝─── JS/
└─── fronts/
```

# CDN(Content Delivery Network)
- html 파일에서 참조하는 소스코드를 다른 공유공간에서 네트워크로 불러오는 형태
- 아래의 소스코드를 head 부분에 작성하여 css 기능을 사용할 수 있다.
``` html
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
```

# 자바스크립트 Button 동작 예시
``` html
<button id="button1" onclick="button1_click();">버튼1</button>
<script>
function button1_click() {
	alert("버튼1을 누르셨습니다.");
}
</script>
```