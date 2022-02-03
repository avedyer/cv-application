import React, { Component } from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);
            this.state = {
                location: "My City",
                phone: "999-999-9999",
                email: "example@gmail.com",
            }
      }
  
    render () {
        
        return (
            <div id="contact">
                <ul>
                    {Object.entries(this.state).map(([key, value]) => (
                        <li key={key}>{value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Contact;