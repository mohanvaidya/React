import logo from './logo.svg';
import React from 'react';
import './App.css';
import FunctionalComp from './components/FunctionalComp';
import ClassComp from './components/ClassComp';
import Click from './components/Click';
import ParentComp from './components/ParentComp';
import PropsClass from './components/PropsClass';
import FunctiopProps from './components/FunctiopProps';
import StateTutorial from './components/StateTutorial';

function App() {
  return (
  <div><h1>Hi welcome to myapp</h1>
  <h1> Hello how are you</h1>
  <FunctionalComp></FunctionalComp>
 <ClassComp></ClassComp>
 <Click></Click>
   <ParentComp></ParentComp>
   <PropsClass name='hello mohan'><button>Click</button></PropsClass>
  <FunctiopProps name='love'></FunctiopProps>
  <StateTutorial ></StateTutorial>
    </div>
  

  );
}
console.log("jay shree ram)
export default App;
