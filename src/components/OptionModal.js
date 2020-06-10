import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal 
        ariaHideApp={false} 
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleBack} 
        contentLabel="SelectedOption"
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleBack}>Okay!</button>
    </Modal>
);

export default OptionModal;