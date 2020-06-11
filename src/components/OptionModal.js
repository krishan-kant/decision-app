import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal 
        ariaHideApp={false} 
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleBack} 
        contentLabel="SelectedOption"
        closeTimeoutMS={400}
        className="modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleBack}>Okay!</button>
    </Modal>
);

export default OptionModal;