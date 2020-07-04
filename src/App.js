import React from 'react';

// 이걸 es6로 하려면 function Food({fav})로 해도 무관.
function Food({props}) {
  return <h1>I like {props.fav}</h1>;
}


// 앱이라는 컴포넌트를 정의하고 있다
function App() {
  return (
    <div>
      <h1>hello</h1>
      {/* 여기서 fav라는 props를 전달함. */}
      <Food fav='kimchi' />
      <Food fav='ramyeon' />
      <Food fav='samgyeopsal' />
      <Food fav='chukumi' />
    </div>
  );
}

export default App;
