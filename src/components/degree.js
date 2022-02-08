import React, { Component } from 'react';
import Line from './line';

class Degree extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "Degree",
            school: "School Name",
            etc: [
                'GPA: ',
                'Completion date'
            ]
        }

        this.addInfo = this.addInfo.bind(this);
      }

      getState() {
          return this.state
      }

      addInfo() {
        this.setState({
            title: this.state.title,
            school: this.state.school,
            etc: this.state.etc.concat('etc.')
        })
      }

      render() {

        const { title, school, etc } = this.state

        return (
            <div className="degree">
                <Line tag="h3" value={this.innerref ? this.innerref : title}/>
                <Line tag="h4" value={this.innerref ? this.innerref : school}/>
                {etc.map((info) => 
                    <Line tag="h5" value={this.innerref ? this.innerref : info}/>
                )}
                <button
                    onClick={this.addInfo}
                >
                    +
                </button>
            </div>
        )
    }
}

export default Degree