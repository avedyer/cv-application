import React, { Component } from 'react';

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
                        <h3>{degree.title}</h3>
                        <h4>{degree.school}</h4>
                        {Object.entries(degree.etc).map(([key, value]) => 
                            <h5 key={key}>{key} : {value}</h5>
                        )}
                    </div>
                )}
            </div>
        );
    }
}

export default Education;