# React + Express 연동하기

## Install React, Express, body-parser

body-parser : json 데이터로 주고 받기 위해 body-parser도 설치해준다.  

```javascript 
npx create-react-app react-express 

npm init 

npm add express --save

npm i body-parser

npm start
```

## server.js

Express 사용하기  

```javascript
const express = require('express');
const app = express();

const app = express();
const port =process.env.PORT || 3001;

app.use(bodyParser.json());
app.use('/api', (req, res)=> res.json( { username:'leekeunho' } ));

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
}) ; 
```

## 라우터 설정
```javascript
const express = require('express');
const bodyParser = require('body-parser');

let router = express.Router()  ; 

router.get('/', (req, res) => {
  res.send({ name : 'lee keunho' }) ;
}) ; 

module.exports = router ; 
```

## 프록시(Proxy) 설정
프록시는 사전적의미로 '대리'를 뜻함.  
직접 통신할 수 없는 Client와 Server사이의 중계기 역할로, 네트워크 통신을 대리로 수행하는 것을 의미한다.  

### 설치
```javascript
npm i http-proxy-middleware --save
```

setProxy.js 파일을 src 폴더에 생성  

```javascript 
const proxy = require( 'http-proxy-middleware' ) ;

module.exports = ( app ) => {
  app.use(
    proxy('/api', {
      target : 'http://loacalhost:3002/' 
    })
  )
}
```

## 서버와 리엑트 동시 실행

npm 패키지 npm-run-all을 설치하여 실행하면 React와 node.js를 동시에 시작할 수 있다.

```javascript
// package.json
"scripts": {
  "start": "npm-run-all --parallel start:**",
  "start:client": "react-scripts start",
  "start:server": "node ./servers/server.js",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
},
```

## 크로스 오리진 오류

서로 다른 포트 번호를 사용하는 웹페이지에서 접근할 경우 보안상 같은 출처의 페이지에서만 접근할 수 있기 때문에 크로스 오리진 오류가 발생한다.  

### 해결 방법
cors를 설치하여 server.js파일을 아래처럼 수정한다.

```javascript
npm i -D cors

// server.js
app.use(cors()) ; 
app.use('/api', api );
```

## App.js

데이터 받아오기  

```javascript
function App() {
  const [ name, setName ] = useState() ; 
  useEffect(_=>{
    fetch('http://localhost:3000/api')
      .then(res=>res.json())
      .then(data=>setName( data.name ) );
  })
  return (
    <div>{ name }</div>
  );
}
```

