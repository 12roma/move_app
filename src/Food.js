import React from 'react';
import propTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name:"test1",
    image:"https://img.velog.io/post-images/velopert/dedd8fd0-8662-11e9-9809-ed6e36f2cf44/learn-react-test.001.jpeg?w=1024",
    rating:5
  },
  {
    id: 2,
    name:"test2",
    image:"https://img.velog.io/post-images/velopert/dedd8fd0-8662-11e9-9809-ed6e36f2cf44/learn-react-test.001.jpeg?w=1024",
    rating:4.9
  },
  {
    id: 3,
    name:"test3",
    image:"https://img.velog.io/post-images/velopert/dedd8fd0-8662-11e9-9809-ed6e36f2cf44/learn-react-test.001.jpeg?w=1024",
    rating:4.8
  }
];


function Food({name, picture, rating}){
  return (
    <div>
      <h2>I lIke{name}</h2>
      <h4>{rating}/5</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name:propTypes.string.isRequired,
  picture:propTypes.string.isRequired,
  rating:propTypes.number.isRequired
}


function App() {
  return (
    <div>
        {foodILike.map(dish  => (
          <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
        ))}
    </div>
  );
}

export default App;
