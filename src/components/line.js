import React, { Component } from 'react';

class Line extends Component {
    constructor(props) {
      super(props);
        
        this.state = {
            text: props.value,
            default: props.value,
            editing: false,
        };
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
        this.initEditor();
    }

    initEditor() {
        this.editor = <input
                        type="text"
                        defaultValue={this.state.text}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                this.save(e.target.value)
                            }
                        }}
                        autoFocus={true}
                    />;
    }

    componentDidUpdate() {
        this.initEditor();
    }

    edit() {
        this.setState({
            text: this.state.text,
            editing: true
        })
    }

    save(value) {
        this.setState({
            text: value.length > 0 ? value : this.state.default,
            default: value.length > 0 ? value : this.state.default,
            editing: false
        })
    };

    render () {
        const Tag = `${this.props.tag}`;

        return this.state.editing ? 
            this.editor :
            <Tag onClick={this.edit} innerRef={this.state.text}>{this.state.text}</Tag>
    }
}

export default Line;