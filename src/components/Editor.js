import React from 'react';
import Toolbar from "./Toolbar";

import "./Editor.css"

const Editor = (props) => {
    return (
        <div className="editor-wrap">
            <Toolbar
                header="Editor"
                icon={props.icon}
                onResizeClick={props.onResizeClick}
            />
            <textarea id="editor" onChange={props.onChangeInput} ref={props.editorRef} value={props.text}/>

        </div>
    );
};

export default Editor;