import React from 'react';

import './Toolbar.css';

const Toolbar = (props) => {
    return (
        <div>
            <div className="toolbar">
                <i className="fa fa-terminal" aria-hidden="true"/><h2>{props.header}</h2>
                <div className="expand"><i className="fa fa-arrows-alt fa fa-compress"/></div>
            </div>
        </div>
    );
};

export default Toolbar;