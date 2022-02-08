import React, { Component } from 'react';

class Line extends Component {
    constructor(props) {
      super(props);
        
        this.state = {
            text: props.value,
            default: props.value,
            editing: false,
        };
        this.Tag = `${this.props.tag}`;
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
        this.handleClick = this.handleClick.bind(this);
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
        document.addEventListener('mouseup', this.handleClick);
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

    handleClick(e) {
        //Closes input if clicked outside.

        let input = document.querySelector('input')
        if (!input) {
            return
        }
        if (!input.contains(e.target)) {
            this.save('')
            document.removeEventListener('mouseup', this.handleClick)
        }
    }

    render () {
        const Tag = this.Tag

        return this.state.editing ? 
            this.editor :
            <Tag onClick={this.edit} innerRef={this.state.text}>{this.state.text}</Tag>
    }
}

export default Line;