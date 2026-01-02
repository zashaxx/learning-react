import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import StarRating from './starRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating rating={5} messages={["Dogshit", "Terrible","Good","Excellent","Masterpiece"]} />
    <StarRating rating={3} color="red" size={48} />
  </React.StrictMode>
);


