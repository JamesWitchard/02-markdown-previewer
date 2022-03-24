import React from 'react';
import {marked} from "marked";

import Toolbar from "./Toolbar";

const Previewer = (props) => {
    return (
        <div className="prev-wrap">
            <Toolbar
                header="Previewer"
            />
            <section id="preview">
                {document.getElementById('preview').innerHTML = marked.parse(props.text)}
            </section>
        </div>
    );
};

export default Previewer;