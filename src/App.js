import React from 'react';
import './App.css';

class App extends React.Component() {

  constructor(props){
    super(props);
    this.state = {
      title: 'Isaac Garza',
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'About', path: '/aobut'},
        { title: 'Contact', path: '/contact'},
      ],
      home: {
        title: 'Be Relentless',
        subtitle: 'Projects that make a difference',
        text:'Checkout my projects below'
      }
    }
  }
  render() {
    return (
      <div>
        Hello from React
      </div>
    
      ); 
  }
  
}

export default App;
