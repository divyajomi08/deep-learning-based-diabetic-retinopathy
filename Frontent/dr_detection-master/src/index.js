import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Routes from './routes';


const App = () => {
  return (
    <div style={{overflow:'hidden'}}>
      <Routes/>
    </div>

  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
