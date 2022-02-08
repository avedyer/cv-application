import React, { Component } from 'react';
import Line from './line';

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
      this.addSkill = this.addSkill.bind(this)
    }

    addSkill() {
      console.log(this.state.skills)
      this.setState({
        skills: this.state.skills.concat('New skill')
      })
    }
  
    render () {

      const skills = this.state.skills

      return (
        <div id="skills">
          <h2>Skills</h2>
          <ul>
            {skills.map((skill) => 
              <Line tag="li" value={this.innerref ? this.innerref : skill}/>
            )}
          </ul>
          <button 
            onClick={this.addSkill}
          >+</button>
        </div>
      );
    }
}

export default Skills;