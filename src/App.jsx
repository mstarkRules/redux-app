import logo from './logo.svg';
import './App.css';

import React, {Component, useState, useEffect} from 'react';
import {connect} from 'react-redux';

function App(props) {

  const [newValue, setNewValue] = useState(props.newValue);
  const [input, setInput] = useState('');

  const inputChange= event=>{
    setInput(event.target.value);
  }
  
  return (
    <div className="App" style={{ paddingTop: '10px' }}>
        <input type='text' />
        <button>
          Click me!
        </button>
        <h1>{newValue}</h1>
      </div>
  );
}
const mapStateToProps = state =>({
  newValue: state.clickReducer.newValue
});

export default connect(mapStateToProps)(App);
