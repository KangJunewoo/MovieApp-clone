import React from 'react';
import PropTypes from 'prop-types';

// id, name, image, rating으로 된 음식 array
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

// 기존방식 : 인자로 props넣고 props.name으로 접근.
function Food({ name, image, rating }) {
  return (<div>
    <h2>I like {name}</h2>
    <h4>rating : {rating} / 5.0</h4>
    <img src={image} alt={name} />
  </div>);
}

// prop-types.PropTypes import 필요.
// 이 규칙을 어기면 컴파일되긴 하지만 콘솔에 warning이 든다.
Food.propTypes={
  name:PropTypes.string.isRequired,
  image:PropTypes.string.isRequired,
  rating:PropTypes.number
}

// 모듈화.
function renderFood(dish) {
  return <Food name={dish.name} image={dish.image} rating={dish.rating}/>
}

// 앱 컴포넌트 정의.
function App() {
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
