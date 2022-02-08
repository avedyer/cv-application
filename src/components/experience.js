import React, { Component } from 'react';
import Line from './line';

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
                  <Line tag="h3" value={this.innerref ? this.innerref : position.title}/>
                  <Line tag="h4" value={this.innerref ? this.innerref : `${position.start} - ${position.end}`}/>
                  <ul>
                    {Object.entries(position.duties).map(([key, value]) => 
                        <Line tag="li" key={key} value={this.innerref ? this.innerref : value}/>
                    )}
                  </ul>
              </div>
          )}
      </div>
    );
  }
}

export default Experience;