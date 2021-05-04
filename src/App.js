import React from 'react';
import Input from './components/Input';
import './App.scss';

function App() {
  return (
    <>
      <div className="main">
        <h1 className="center blue-text" contentEditable={true}>
          Your list name here
        </h1>
        <Input />
      </div>

      <div className="small">
        <small>jjchinosoviolet@gmail.com</small>
        <small>view my projects at https://github.com/cvjude</small>
      </div>
    </>
  );
}

export default App;
