import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        paras : 4,
        html : true,
        text : ''
      }
  }

  componentDidMount() {
        this.pleaseGetText()
  }
   pleaseGetText() {
    axios.get('http://hipsterjesus.com/api/?`${this.state.paras}`&html=true')
      .then(res => {
       const ans = res.data.text;
       this.setState = {
         text : ans
       }
      })
  }


  render() {

    return (
      <div className="App">
        <h1>{this.state.paras}</h1>
        <h2>{this.state.text}</h2>
        text generator
      </div>
    );
  }
}

export default App;
