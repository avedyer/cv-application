import React, { Component } from 'react';
import Line from './line';

class Header extends Component {
    constructor(props) {
        super(props);
            
        this.state = {
            name: "First Last",
            title: "Title",
            bio: "This is your bio. Write a short description of yourself that will grab a recruiter's attention!"
        }
      }
  
    render () {
        const { name, title, bio } = this.state
        
        return (
        <div id="header">
            <Line tag="h1" value={this.innerref ? this.innerref : name} />
            <h2 id="title"> {title} </h2>
            <p id="bio">{bio}</p>
        </div>
        );
    }
}

export default Header;