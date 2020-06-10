import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            {props.options.length === 0 && <p>Add an item to get started!</p>}
            {
                props.options.map((option) => {
                    return <Option key={option} optionText={option} handleDeleteOption={props.handleDeleteOption}/>
                })
            }
        </div>
    );
};

export default Options;