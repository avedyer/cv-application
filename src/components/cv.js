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
            <Header data={data.header}/>
            <Contact data={data.contact}/>
            <Education data={data.education}/>
            <Experience data={data.experience}/>
            <Skills data={data.skills}/>
        </div>
      );
    }
}

export default CV;