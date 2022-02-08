import React, { Component } from 'react';
import Degree from './degree';
import Line from './line';

class Education extends Component {
    constructor(props) {
        super(props);

        this.state = {
            degrees: [<Degree />]
        }

        this.addDegree = this.addDegree.bind(this);
      }


    addDegree() {
        this.setState({
            degrees: this.state.degrees.concat(<Degree />)
        })
    }
  
    render () {

        return (
            <div id="education">
                <h2>Education</h2>
                {this.state.degrees.map((degree) => degree)}

                <button
                    onClick={this.addDegree}    
                    >
                    +
                </button>
            </div>
        );
    }
}

export default Education;