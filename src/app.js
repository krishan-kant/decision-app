class IndecisionApp extends React.Component{
    render(){
        const title='Indecision';
        const subtitle='This website uses the most advanced algorithm for you!';
        const options=['Grand Theft Auto 5','Civlization six','Borderlands 2','Overcooked']
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component{
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component{
    handlePick(){
        alert('You should select nothing')
    }
    render(){
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component{
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll(){
        alert('remove all');
    }
    render(){
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove all</button>
                {
                    this.props.options.map((option) => {
                        return <Option key={option} optionText={option}/>
                    })
                }
            </div>
        );
    }
}

class AddOption extends React.Component{
    handleFormSubmit(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if(option){
            alert('Adding.. lol not adding')
        }
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

class Option extends React.Component{
    
    render(){
        return (
            <div>
                Option :{this.props.optionText}
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));