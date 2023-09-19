import logo from './logo.svg';
import React from 'react';
import './App.css';
import FunctionalComp from './components/FunctionalComp';
import ClassComp from './components/ClassComp';
import Click from './components/Click';
import ParentComp from './components/ParentComp';
//import UpdatedComp from './components/higherOrderComp';
// import FunctionalComp from './components/FunctionalComp';
//import ClassComp from './components/ClassComp';
function App() {
  return (
  <div><h1>Hi welcome to myapp</h1>
  <h1> Hello how are you</h1>
  <FunctionalComp></FunctionalComp>
 <ClassComp></ClassComp>
 <Click></Click>
 <ParentComp></ParentComp>

  </div>

  );
}

export default App;
