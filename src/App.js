import React, {useEffect, useRef, useState} from "react";

import Editor from "./components/Editor";
import Previewer from "./components/Previewer";

import './App.css';

// example markdown placeholder text:
const PLACEHOLDER = "# Welcome to my React Markdown Previewer!\n" +
    "\n" +
    "## This is a sub-heading...\n" +
    "### And here's some other cool stuff:\n" +
    "\n" +
    "Heres some code, `<div></div>`, between 2 backticks.\n" +
    "\n" +
    "```\n" +
    "// this is multi-line code:\n" +
    "\n" +
    "function anotherExample(firstLine, lastLine) {\n" +
    "  if (firstLine == '```' && lastLine == '```') {\n" +
    "    return multiLineCode;\n" +
    "  }\n" +
    "}\n" +
    "```\n" +
    "\n" +
    "You can also make text **bold**... whoa!\n" +
    "Or _italic_.\n" +
    "Or... wait for it... **_both!_**\n" +
    "And feel free to go crazy ~~crossing stuff out~~.\n" +
    "\n" +
    "There's also [links](https://www.freecodecamp.org), and\n" +
    "> Block Quotes!\n" +
    "\n" +
    "And if you want to get really crazy, even tables:\n" +
    "\n" +
    "Wild Header | Crazy Header | Another Header?\n" +
    "------------ | ------------- | -------------\n" +
    "Your content can | be here, and it | can be here....\n" +
    "And here. | Okay. | I think we get it.\n" +
    "\n" +
    "- And of course there are lists.\n" +
    "  - Some are bulleted.\n" +
    "     - With different indentation levels.\n" +
    "        - That look like this.\n" +
    "\n" +
    "\n" +
    "1. And there are numbered lists too.\n" +
    "1. Use just 1s if you want!\n" +
    "1. And last but not least, let's not forget embedded images:\n" +
    "\n" +
    "![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n";
const expandIcon = "fa fa-arrows-alt";
const contractIcon = "fa fa-compress";

function App() {
    const [text, setText] = useState('## Hello');
    const [hidden, setHidden] = useState(false);
    const [toolbarIcon, setToolbarIcon] = useState(expandIcon);
    console.log(hidden);
    const previewRef = useRef();
    const editorRef = useRef();

    useEffect(() => {
        setText(PLACEHOLDER);
    }, []);
    function handleInput(event) {
        setText(event.target.value);
    }

    function handleResizeClick(thisRef, otherRef) {
        setHidden(!hidden);
        let thisElement = document.getElementById(thisRef.current.id);
        let otherElement = document.getElementById(otherRef.current.id);

        otherElement.parentElement.classList.toggle("hide")
        // toggle the icon of the element you clicked on
        setToolbarIcon((hidden === true) ? expandIcon : contractIcon);

        // toggle adding/removing maximized class to the element you clicked on
        thisElement.classList.toggle("maximized");
    }

    return (
    <div className="App">
      <Editor
          text={text}
          onChangeInput={handleInput}
          onResizeClick={() => handleResizeClick(editorRef, previewRef)}
          icon={toolbarIcon}
          editorRef={editorRef}
      />
      <Previewer
          parsedText={text}
          onResizeClick={() => handleResizeClick(previewRef, editorRef)}
          icon={toolbarIcon}
          previewRef={previewRef}
      />
    </div>
  );
}

export default App;
