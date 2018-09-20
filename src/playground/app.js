class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: []
        }
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handleWhat = this.handleWhat.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleRemoveOne = this.handleRemoveOne.bind(this);
    }
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
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Updated!');

        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    
    handleRemoveAll() {
        this.setState(() => ({options: []}));
        localStorage.clear();
    }
    handleWhat() {
        alert(this.state.options[Math.floor(Math.random() * this.state.options.length)]);
    }
    handleAddOption(option) {
        if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists!'            
        }
        else {
            this.setState((prevState) => ({options: prevState.options.concat(option)}));
        }
    }
    handleRemoveOne(optionToRemove) {
        this.setState((prevState) => (
            {options: prevState.options.filter((option) => option !== optionToRemove)}
        ));
    }
    render() {
        const subtitle = 'Let me decide what you should do!';

        return (
            <div>
                <Header subtitle={subtitle} />
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
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision App'
}

const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.handleWhat}>What should I do?</button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            <p>{props.options.length > 0 ? 'Here are your options:' : 'Add some options to begin'}</p>
            <ul>
                {props.options.map((option) => (
                <Option 
                    key={option} 
                    optionValue={option}
                    handleRemoveOne={props.handleRemoveOne}
                />))}
            </ul>
            <button onClick={props.handleRemoveAll}>Remove All</button>
        </div>
    );
}

const Option = (props) => {
        return (
            <div>
                <li>{props.optionValue}</li>
                <button
                    onClick={() => {
                        props.handleRemoveOne(props.optionValue);
                    }}
                >Remove
                </button>
            </div>
        );
};


class AddOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: undefined
        }
        this.handleAddOption = this.handleAddOption.bind(this);
    }
    handleAddOption(e) {
        e.preventDefault();
        const error = this.props.handleAddOption(e.target.elements.input.value.trim());
        e.target.elements.input.value = '';
        this.setState(() => ({error}));
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="input"/>
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<MyApp />, document.getElementById('body'))