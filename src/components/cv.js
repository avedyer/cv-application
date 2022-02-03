import React, { Component } from 'react';
import Header from './header';
import Contact from './contact';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class CV extends Component {
  
    render () {
      const data = this.props.data
      
      return (
        <div id="cv">
            <Header />
            <Contact />
            <Education />
            <Experience />
            <Skills />
        </div>
      );
    }
}

export default CV;