let count = 0;

const counterApp = () => {
    const temp = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick = {() => {
                count++;
                counterApp();
            }}>Add</button>
            <button onClick = {() => {
                count--;
                counterApp();
            }}>Substract</button>
            <button onClick = {() => {
                count = 0;
                counterApp();
            }}>Reset</button>
        </div>
    );
    ReactDOM.render(temp, document.getElementById('body'));
}
this.state = {count: 0}
counterApp();


// Counter App code to make it load data from localStorage

// componentDidMount() {
// const num = localStorage.getItem('count');
// const count = parseInt(num, 10);
// if (!isNaN(count)) {
// this.setState(() => ({count}));
// }
// }
// componentDidUpdate(prevProps, prevState) {
//     localStorage.setItem('count', this.state.count);
// }