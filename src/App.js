import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


function Element(props) {
    return (
      <p>{props.text}</p>
    );
}

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
    (async function(dataList) {
      try {
        let response = await fetch('/data.json');
        let json = await response.json();
        dataList.setState({data:json})
      }
      catch(e) {
        console.log('Error!', e);
      }
    })(this);
  }
  render() {
    const elements = this.state.data.map((line) =>
      <Element text={line} />
    );
    return (
      <div className="App">
        {elements}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <List />
      </div>
    );
  }
}

export default App;
