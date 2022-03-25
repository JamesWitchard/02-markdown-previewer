import React from 'react';
import Toolbar from "./Toolbar";

import "./Editor.css"

const Editor = (props) => {
    return (
        <div className="editor-wrap">
            <Toolbar header="Editor" onResizeClick={props.onResizeClick} />
            <textarea id="editor" onChange={props.onChangeInput} value={props.text}/>

        </div>
    );
};

export default Editor;