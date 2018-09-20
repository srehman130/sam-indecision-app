import React from 'react';
import Option from './Option';

const Options = (props) =>(
        <div>
            <div className="widget-header">
                <h3 className="widget-header__text">
                    {props.options.length > 0 ? 'Here are your options:' : 'Please add an option to get started!'}
                </h3>
                <button
                    className="button button--link"
                    onClick={props.handleRemoveAll}>Remove All</button>
            </div>
            <div>
                {props.options.map((option, idx) => (
                <Option 
                    key={option}
                    count={idx + 1}
                    optionValue={option}
                    handleRemoveOne={props.handleRemoveOne}
                />))}
            </div>
        </div>
    );

export default Options;