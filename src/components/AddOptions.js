import React from 'react';

export default class AddOptions extends React.Component {
    state = {
        error: undefined
    };
    handleAddOption = (e) => {
        e.preventDefault();
        const error = this.props.handleAddOption(e.target.elements.input.value.trim());
        this.setState(() => ({error}));
        if (!error) {
            e.target.elements.input.value = '';
        }
       
    };
    render() {
        return (
            <div>
                {this.state.error && <p className="error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__text" placeholder="Add an option here.." type="text" name="input"/>
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}