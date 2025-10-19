// CodeEditorPage.js
import React, { useRef, useEffect, useState } from "react";
import HeaderStarting from "./HeaderStarting";
import Footerr from "./footer";
import Textbox from "./TextboxCE";
import TextNav from "./TextNavCE";

export default function CodeEditorPage() {
  const removeExtraSpacesRef = useRef(null);
  const formatRef = useRef(null);
  const undoRef = useRef(null);
  const redoRef = useRef(null);

  // Add input/output state here
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const bodycolor = () => {
    document.body.style.backgroundColor = 'rgb(28, 20, 52)';
  };

  useEffect(() => {
    formatRef.current = (command) => {
      document.execCommand(command, false, null);
    };
  }, []);

  return (
    <>
      {bodycolor()}
      <HeaderStarting />
      <TextNav
        removeExtraSpacesRef={removeExtraSpacesRef}
        formatRef={formatRef}
        undoRef={undoRef}
        redoRef={redoRef}
      />
      <Textbox
        removeExtraSpaces={removeExtraSpacesRef}
        undoRef={undoRef}
        redoRef={redoRef}
      />

      {/* Input and Output text areas */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        marginTop: "18px",
        marginBottom: "18px"
      }}>
        <textarea
          placeholder="Input (as stdin)"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          style={{
            width: "100%",
            height: "150px",
            borderRadius: "5px",
            padding: "10px",
            fontFamily: "monospace",
            fontSize: "14px",
            resize: "none",
          }}
        />

        <textarea
          placeholder="Output"
          value={outputValue}
          readOnly
          style={{
            width: "100%",
            height: "250px",
            borderRadius: "5px",
            padding: "10px",
            fontFamily: "monospace",
            fontSize: "14px",
            background: "#eee",
            resize: "none",
          }}
        />
      </div>
      <Footerr />
    </>
  );
}
