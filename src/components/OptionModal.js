import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
        <Modal
            isOpen={!!props.showOption}
            onRequestClose={props.closeModal}
            closeTimeoutMS={200}
            contentLabel="Selected Option"
            ariaHideApp={false}
            className="modal"
        >
            <h3 className="modal__title">Here is what you should do: {props.showOption}</h3>
            <button className="button" onClick={props.closeModal}>Okay</button>
        </Modal>
    );

export default OptionModal;