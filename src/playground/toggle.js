class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            }
        })
    }

    componentDidMount() {
        const visible = localStorage.getItem('key');
        if (visible === 'true') {
        this.setState(() => ({visible: true}));
        }
        else {
            this.setState(() => ({visible: false}));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        localStorage.setItem('key', this.state.visible)
    }

    render() {
        const message = 'Here is the message.'
        return (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleClick}>
                {this.state.visible ? 'Hide details' : 'Show details'}</button>
            {this.state.visible && <p>{message}</p>}
        </div>
        );
    }
}

ReactDOM.render(<Toggle />, document.getElementById('body'));
