import React, { Component } from 'react';
import CV from "./cv.js"

class Form extends Component {
    constructor() {
      super();

      this.state = {
        focus: "",
        header: {
          name: "First Last",
          title: "Title",
          bio: "This is your bio. Write a short description of yourself that will grab a recruiter's attention!"
        },
        contact: {
          location: "My City",
          phone: "999-999-9999",
          email: "example@gmail.com",
        },
        education: {
          degrees: [
            {
              title: "B.S. in Engineering",
              school: "University of Sallsworth",
              etc: {
                gpa: "3.6",
                obtained: "May 2014", 
              }
            }
          ]
        },
        experience: {
          positions: [
            {
              title: "Junior Accountant",
              start: "October 2019",
              end: "December 2021",
              duties: [
                "Duis aute irure dolor in reprehenderit.",
                "Viverra mauris in aliquam sem fringilla ut.",
                "Tortor vitae purus faucibus ornare suspendisse sed nisi."
              ]
            }
          ]
        },
        skills: {
          skills: [
            "Leadership experience",
            "Quickbooks",
            "Project Management"
          ]
        },
      }
    }

    patchSection = (section, key, newData) => {

      let newObj = {}

      Object.keys(this.state[section]).forEach(element => {
          if (element === key) {
            newObj[element] = newData
          }

          else {
            newObj[element] = this.state[section][element]
          }

      });

      return newObj
    }


    textInput = (label, section, key) => {
      return (
        <div class="textInput">
          <label htmlFor={key}>{label}</label>
          <input 
            onChange={(e) => {
              this.setState({
                [section]: this.patchSection(section, key, e.target.value)
              })
            }}
            defaultValue={this.state[section][key]}
            type="text"
            name={key}
            id={key}
          />
        </div>
        
      )
    }
  
    render () {
      return (
        <div id="form">
          <CV data={this.state} />
          <div id="editor">
            <h2>Personal</h2>
            {this.textInput("Name", 'header', 'name')}
            {this.textInput("Title", 'header', 'title')}
            {this.textInput("Bio", 'header', 'bio')}
          </div>
        </div>
      );
    }
}

export default Form;