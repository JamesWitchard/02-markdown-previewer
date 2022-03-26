import React, {useEffect, useState} from 'react';
import Prism from 'prismjs'

import Toolbar from "./Toolbar";
import {marked} from "marked";

import './Previewer.css';

marked.use({
    breaks: true,
    langPrefix: "language-javascript",
    highlight: function (code) {
        return Prism.highlight(code, Prism.languages.javascript, 'javascript');
    }
});


const Previewer = (props) => {
    const [parsedInput, setParsedInput] = useState()


    useEffect(() => {
        // parse incoming text
        setParsedInput(marked.parse(props.parsedText));
    }, [props.parsedText]);

    useEffect(() => {
        // change the inner html of the element to the parsed markdown text
        props.previewRef.current.innerHTML = parsedInput;
    }, [parsedInput]);

    return (
        <div className="prev-wrap">
            <Toolbar
                header="Previewer"
                icon={props.icon}
                onResizeClick={props.onResizeClick}
            />
            <section id="preview" ref={props.previewRef}>
            </section>
        </div>
    );
};

export default Previewer;