import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StarRating from './StarRating';

function Test() {
  const [movieRating, setMovieRating] = useState();

  return (
    <div>
      <StarRating maxRating={10} onSetRating={setMovieRating}/>
      <p>This movie was rated {movieRating} stars</p>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]} />
    <StarRating size={24} className="test" default={3}/>
    <Test /> */}
  </React.StrictMode>
);


