import React from 'react';
import Input from './components/Input';
import './App.scss';

function App() {
  return (
    <>
      <div className="main">
        <h1 className="blue-text" contentEditable={true}>
          Simple search app
        </h1>
        <Input
          placeHolder="Search a place"
          name="search"
          errorMsg="Enter a valid search text"
          valErrorMsg="please enter a search text"
        />
      </div>

      <div className="small">
        <small>jjchinosoviolet@gmail.com</small>
        <small>view my projects at https://github.com/cvjude</small>
      </div>
    </>
  );
}

export default App;
