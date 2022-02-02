import React, { Component } from 'react';

class Header extends Component {
  
    render () {
        const { name, title, bio } = this.props.data;
        
        return (
        <div id="header">
            <h1 id="name">{name}</h1>
            <h2 id="title"> {title} </h2>
            <p id="bio">{bio}</p>
        </div>
        );
    }
}

export default Header;