import React, { Component } from 'react';

class Experience extends Component {
  
    render () {
      const positions = this.props.data.positions;

      return (
        <div id="experience">
            <h2>Experience</h2>
            {positions.map((position) => 
                <div className="degree">
                    <h3>{position.title}</h3>
                    <h4>{position.start} - {position.end}</h4>
                    <ul>
                      {Object.entries(position.duties).map(([key, value]) => 
                          <li key={key}>{value}</li>
                      )}
                    </ul>
                </div>
            )}
        </div>
      );
    }
}

export default Experience;