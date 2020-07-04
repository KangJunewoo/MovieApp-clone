import React from 'react';
import PropTypes from 'prop-types';

// map을 쓸 건데, 이건 배열 각각에 대해 함수를 실행할 수 있게 해줌
// friends.map((current)=>{
//   console.log(current); 각각의 값이 콘솔에 찍히고
//   return 0; 각 연산결과로 array를 만들고 여기 리턴값이 저장됨.
// }) 이런 식으로!

// 그럼 그 함수 안에 return friend+':)'; 해주면 각각에 미소가 붙은 array를 반환함.
// 리액트 모든 element들은 달라야 한다는 점 잊지말자. 그래서 id 넣어줌. 실제 쓰이지는 않을거지만!
const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 4.9
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 3.9
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 4.8
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 3.8
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 5.0
  }
];
// object destructuring은 es6 문법. 전통적인 방식은 인자에 props넣고 props.name으로 접근하면됨.
function Food({ name, image, rating }) {
  return (<div>
    <h2>I like {name}</h2>
    <h4>rating : {rating} / 5.0</h4>
    <img src={image} alt={name} />
  </div>);
}

// 대충 prop-types라는 모듈이 필요한데, 몽구스 스키마설정과 비슷한듯.
// 이 규칙을 어기면 컴파일되긴 하지만 콘솔에 warning이 든다.
Food.propTypes={
  name:PropTypes.string.isRequired,
  image:PropTypes.string.isRequired,
  rating:PropTypes.number
}

// 모듈화 ㄱㄴ
function renderFood(dish) {
  return <Food name={dish.name} image={dish.image} rating={dish.rating}/>
}

// 앱이라는 컴포넌트를 정의하고 있다
function App() {
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
