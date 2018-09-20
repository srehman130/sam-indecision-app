import React from 'react';

const Option = (props) => (
        <div className="widget-header widget-header--body">
            <p className="widget-header--body__option">{props.count}. {props.optionValue}</p>
            <button
                className="button button--link"
                onClick={() => {
                    props.handleRemoveOne(props.optionValue);
                }}
            >Remove
            </button>
        </div>
    );

export default Option;