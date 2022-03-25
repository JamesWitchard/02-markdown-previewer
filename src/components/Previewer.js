import React, {useEffect, useRef, useState} from 'react';
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
    const previewRef = useRef();

    useEffect(() => {
        setParsedInput(marked.parse(props.parsedText));
    }, [props.parsedText]);

    useEffect(() => {
        previewRef.current.innerHTML = parsedInput;
    }, [parsedInput]);

    return (
        <div className="prev-wrap">
            <Toolbar
                header="Previewer" onResizeClick={props.onResizeClick}
            />
            <section id="preview" ref={previewRef}>
            </section>
        </div>
    );
};

export default Previewer;