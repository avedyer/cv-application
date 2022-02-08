import React, { Component } from 'react';
import Line from './line';

class Header extends Component {
    constructor(props) {
        super(props);
            
        this.state = {
            name: "Firstname Lastname",
            title: "Title",
            bio: "This is your bio. Write a short description of yourself that will grab a recruiter's attention!"
        }
      }
  
    render () {
        const { name, title, bio } = this.state
        
        return (
        <div id="header">
            <Line tag="h1" value={this.innerref ? this.innerref : name} />
            <Line tag="h2" value={this.innerref ? this.innerref : title}/>
            <Line tag="p" value={this.innerref ? this.innerref : bio}/>
        </div>
        );
    }
}

export default Header;