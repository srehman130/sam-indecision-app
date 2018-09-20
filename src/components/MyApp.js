import React from 'react';
import AddOptions from './AddOptions';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class MyApp extends React.Component {
    state = {
        options: [],
        showOption: undefined
    };
    handleRemoveAll = () => {
        this.setState(() => ({options: []}));
        localStorage.clear();
    };
    handleWhat = () => {
        this.setState(() => (
            {showOption: this.state.options[Math.floor(Math.random() * this.state.options.length)].concat(' ')}
        ));
    };
    closeModal = () => {
        this.setState(() => ({showOption: undefined}));
    };
    handleAddOption = (option) => {
        if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists!'            
        }
        else {
            this.setState((prevState) => ({options: prevState.options.concat(option)}));
        }
    };
    handleRemoveOne = (optionToRemove) => {
        this.setState((prevState) => (
            {options: prevState.options.filter((option) => option !== optionToRemove)}
        ));
    };
    componentDidMount() {
        try {
            console.log('Mounted!');
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options })); 
            }
        } catch(e) {

        }
    };
    componentDidUpdate(prevProps, prevState) {
        console.log('Updated!');

        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    };
    render() {
        const subtitle = 'Let me decide what you should do!';

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handleWhat={this.handleWhat} />
                    <Options
                        options={this.state.options}
                        handleRemoveAll={this.handleRemoveAll}
                        handleRemoveOne={this.handleRemoveOne} />
                    <AddOptions
                        handleAddOption={this.handleAddOption} />
                </div>
                
                <OptionModal showOption={this.state.showOption} closeModal={this.closeModal}/>
                
            </div>
        );
    }
}