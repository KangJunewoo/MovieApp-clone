import React from 'react';

// object destructuring은 es6 문법. 전통적인 방식은 인자에 props넣고 props.name으로 접근하면됨.
function Food({ name, image }) {
  return (<div>
    <h2>I like {name}</h2>
    <img src={image} />
  </div>);
}

// map을 쓸 건데, 이건 배열 각각에 대해 함수를 실행할 수 있게 해줌
// friends.map((current)=>{
//   console.log(current); 각각의 값이 콘솔에 찍히고
//   return 0; 각 연산결과로 array를 만들고 여기 리턴값이 저장됨.
// }) 이런 식으로!

// 그럼 그 함수 안에 return friend+':)'; 해주면 각각에 미소가 붙은 array를 반환함.
const foodILike = [
  {
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
  },
  {
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
  },
  {
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
  },
  {
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
  }
];

// 앱이라는 컴포넌트를 정의하고 있다
function App() {
  return (
    <div>
      {foodILike.map(dish =>
        <Food name={dish.name}
          image={dish.image}
        />)}
    </div>
  );
}

export default App;
