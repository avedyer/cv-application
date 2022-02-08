import React, { Component } from 'react';
import Line from './line';

class Education extends Component {
    constructor(props) {
        super(props);

        this.state = {
            degrees: [
                {
                  title: "B.S. in Engineering",
                  school: "University of Sallsworth",
                  etc: {
                        gpa: '3.6',
                        obtained: 'May 2018'
                    }
                }
            ],
        }
      }
  
    render () {

        const degrees = this.state.degrees

        return (
            <div id="education">
                <h2>Education</h2>
                {degrees.map((degree) => 
                    <div className="degree">
                        <Line tag="h3" value={this.innerref ? this.innerref : degree.title}/>
                        <Line tag="h4" value={this.innerref ? this.innerref : degree.school}/>
                        {Object.entries(degree.etc).map(([key, value]) => 
                            <Line tag="h5" value={this.innerref ? this.innerref : `${key} : ${value}`}/>
                        )}
                    </div>
                )}
            </div>
        );
    }
}

export default Education;