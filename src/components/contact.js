import React, { Component } from 'react';
import Line from './line';

class Contact extends Component {
    constructor(props) {
        super(props);
            this.state = {
                contacts: [
                    "My City",
                    "999-999-9999",
                    "example@gmail.com",
                ]
            }
        this.addContact = this.addContact.bind(this) 
      }

    addContact() {
        this.setState({
            contacts: this.state.contacts.concat('New contact')
        })
    }
  
    render () {
        
        return (
            <div id="contact">
                <ul>
                    {Object.entries(this.state.contacts).map((contact) => (
                        <Line tag="li" value={this.innerref ? this.innerref : contact}/>
                    ))}
                </ul>
                <button 
                    onClick={this.addContact}
                >+</button>
            </div>
        );
    }
}

export default Contact;