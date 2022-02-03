import React, { Component } from 'react';

class Skills extends Component {
    constructor(props) {
      super(props);

      this.state = {
        skills: [
          "Leadership experience",
          "Quickbooks",
          "Project Management"
        ]
      }
    }
  
    render () {

      const skills = this.state.skills

      return (
        <div id="skills">
          <h2>Skills</h2>
          <ul>
            {skills.map((skill) => 
              <li key={skill}>{skill}</li>
            )}
          </ul>
        </div>
      );
    }
}

export default Skills;