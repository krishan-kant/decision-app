import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.state = {
            options: [],
            selectedOption : undefined
        };
    }

    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(()=>({ options}));
            }
        }catch(e){}
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }

    handlePick(){
        const randomNo = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNo];
        this.setState(() => ({selectedOption: option}));
    }

    handleBack(){
        this.setState(() => ({selectedOption: undefined}))
    }

    handleDeleteOptions(){
        this.setState(() => ({options: []}));
    }

    handleDeleteOption(optionRemove){
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionRemove !== option;
            })
        }));
    }

    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add';
        }else  if(this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        };
        this.setState((prevState) => ({options: prevState.options.concat([option])}));
    }

    render(){
        const title='Indecision';
        const subtitle='This website uses the most advanced algorithm for you!';
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0}
                    handlePick = {this.handlePick}
                />
                <Options options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleBack={this.handleBack}
                />
            </div>
        );
    }
}

export default IndecisionApp;