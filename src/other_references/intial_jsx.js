//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
//live-server public/

console.log('App.js is running');

// JSX template

const app={
    title:'Indecision App',
    subtitle:'Put your life decisions in the hand of your computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value='';
        reRender();
    }
};

const onFormClear = () => {
    app.options=[];
    reRender();
}

const onMakeDecision = () => {
    const randomNo = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNo];
    alert(option);
};

const appRoot = document.getElementById('app');


const reRender = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onFormClear}>Remove all</button>
            <ol>
            {
                app.options.map((option) => <li key={option}>{option}</li>)
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot)
};

reRender()