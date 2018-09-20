console.log('app.js is running');

const app = {
    title: 'Indecision App',
    subtitle: 'Engineering is magic.',
    options: []
};

const handleSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.text.value;

    if (option) {
        app.options.push(option)
        e.target.elements.text.value = '';
        indApp();
    }
} 

const indApp = () => {
    const jsx = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <button disabled={app.options.length === 0} onClick={() => {
                alert(app.options[Math.floor(Math.random() * app.options.length)]);
            }}>What should I do?</button>
            <button onClick={() => {
                app.options = [];
                indApp();
            }}>Remove All</button>
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <ol>
            {app.options.map((option) => <li key={option}>{option}</li>)}
            </ol>
            <form onSubmit={handleSubmit}>
                <input type="text" name="text"/>
                <button>Add</button>
            </form>
        </div>
    );
    
    ReactDOM.render(jsx, document.getElementById('body'));
}

indApp();