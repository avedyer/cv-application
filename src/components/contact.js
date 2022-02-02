import React, { Component } from 'react';

class Contact extends Component {
  
    render () {
        
        return (
            <div id="contact">
                <ul>
                    {Object.entries(this.props.data).map(([key, value]) => (
                        <li key={key}>{value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Contact;