import React, { Component } from 'react';

class Experience extends Component {
  constructor(props) {
    super(props);
      this.state = {
        positions: [
          {
            title: "Junior Accountant",
            start: "October 2019",
            end: "December 2021",
            duties: [
              "Duis aute irure dolor in reprehenderit.",
              "Viverra mauris in aliquam sem fringilla ut.",
              "Tortor vitae purus faucibus ornare suspendisse sed nisi."
            ]
          }
        ]
      }
  }
  
  render () {
    const positions = this.state.positions

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