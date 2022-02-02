import React, { Component } from 'react';

class Education extends Component {
  
    render () {

        const degrees = this.props.data.degrees

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