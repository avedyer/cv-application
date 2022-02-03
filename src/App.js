import React, { Component } from 'react';
import CV from "./components/cv.js"
import Education from './components/education.js';
import Form from './components/form.js';

class App extends Component {
  constructor() {
    super();
  }

  render () {
    return (
      <div id="app">
        <CV />
      </div>
    )
  }
}

export default App;
