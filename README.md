# movieql

Movie API with GraphQL & Node

#### bable setting

- npm install @babel/cli @babel/core @babel/node @babel/preset-env
- .bablerc { "presets": ["@babel/preset-env"] }
- package.json - script - "start": "nodemon --exec babel-node index.js"

## GraphQL

개발자가 어떤 정보를 원하는 지에 대해 통제할 수 있음.
요청한 정보들만 받을 수 있고 원하는 방식으로 조정할 수 있음.

Schema : 데이터에 대한 기술.

- Query : 데이터베이스로 요청하여 받을 데이터. get data (Read)
- Mutation : 서버, 데이터베이스, 메모리의 데이터 변경 작업. mutate data (Create, Upadate, Delete)

## Problems sovled by GraphQL

### P1) Over-fetching

요청한 영역의 정보보다 많은 정보를 서버에서 받는 것.
비효율적이고 개발자들이 뭘 받았는지 모르게 됨.
REST API의 경우, 데이터 테이블을 요청할 때 모든 필드를 받아 옴
예) user의 username만 필요하더라도 profile, email, etc. 를 모두 꺼내서 response로 보냄

### P2) Under-fetching

어떤 하나를 완성하기 위해 다른 요청들을 해야할 때 발생.
REST에서 하나를 완성하기 위해 많은 소스를 요청하는 것.
필요한 데이터를 받기 위해 1번 이상의 request를 보냄.
REST API의 경우 나뉘어진 테이블 만큼의 reqest를 보내고 각각의 response를 받음
예) 앱 실행 시, feed 데이터, user데이터, notification데이터 etc. 모두 각각의 request를 보냄
