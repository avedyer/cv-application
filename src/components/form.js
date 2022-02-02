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

    handleChange = (e) => {
      this.setState({
        [this.focus]: e.target.value,
      })
    };

    textInput = (label, key) => {
      return (
        <div class="textInput">
          <label htmlFor={label}Input>{label}</label>
          <input 
            onChange={(e) => {
              this.setState({
                [key]: e.target.value,
              })
            }}
            type="text"
            value={key}
            id={label}Input
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
            {this.textInput("Name", this.state.header.name)}
          </div>
        </div>
      );
    }
}

export default Form;