Vanilla Redux
------------

Nomad Coders: 초보자를 위한 리덕스 101 강의

### 1. store

 state를 관리하는 장소


### 2. action

+ Action은 state를 변화시키는 이벤트에 대한 정보 
+ tpye과 payload로 구성된 오브젝트
+ Action을 `String`으로 정의하면 오타가 나도 에러가 발생하지 않으므로 `constant`로 사용하는 것을 추천
~~~js
const Add = "ADD"
sotre.dispatch({type: ADD})
~~~


### 3. reducer

state와 Action을 더하여 새로운 state를 반환하는 `함수`


### 4. dispatch

+ reducer를 실행시키는 `함수`
+ reducer에 `action`을 전달한다.


### 5. [Redux Flow](https://qiita.com/mpyw/items/a816c6380219b1d5a3bf?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)
<img src = "https://user-images.githubusercontent.com/58601325/141257834-07a497a5-9f23-4a8c-bd41-a8bb85a6be45.png"
     width= '80%'
     height= '50%'
/>

