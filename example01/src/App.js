import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Course from './components/Course';

class App extends Component {
  render() {
    const items = [
      {
        name: 'ReactJS',
        time: '30h',
        free:false,
        desc: 'ReacJS is very simple!'
      },
      {
        name: 'Angular 4x',
        time: '55h',
        free:false,
      },
      {
        name: 'NodeJS',
        time: '35h',
        free: true,
      }
    ];

    const elementCourse = items.map((item, index) =>
      <Course key={index} name={item.name} time={item.time} free={item.free}>{item.desc}</Course>
    );
    return (
      <div className="row">
        {elementCourse}      
      </div>
    );
  }
}

export default App;
