let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};
const minusOne = () => {
    count--;
    renderCounterApp();
};
const resetFuntion = () => {
    count=0;
    renderCounterApp();
};


const appRoot = document.getElementById('app');



const renderCounterApp = () => {
    const templatetwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={resetFuntion}>Reset</button>
        </div>
    );
    ReactDOM.render(templatetwo, appRoot);
}

renderCounterApp();