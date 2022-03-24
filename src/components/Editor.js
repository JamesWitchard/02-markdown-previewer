import React from 'react';
import Toolbar from "./Toolbar";

import "./Editor.css"

const Editor = (props) => {
    console.log(props.text)
    return (
        <div className="editor-wrap">
            <Toolbar
                header="Editor"
            />
            <textarea id="editor" cols="73" rows="11" wrap="hard">{props.text}</textarea>

        </div>
    );
};

export default Editor;