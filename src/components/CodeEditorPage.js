import React, { useRef, useEffect, useState } from "react";
import HeaderStarting from "./HeaderStarting";
import Footerr from "./footerCE";
import Textbox from "./TextboxCE";
import TextNav from "./TextNavCE";


export default function CodeEditorPage() {
  const removeExtraSpacesRef = useRef(null);
  const formatRef = useRef(null);
  const undoRef = useRef(null);
  const redoRef = useRef(null);

  const [codeValue, setCodeValue] = useState("");
  const [language, setLanguage] = useState("python");
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  useEffect(() => {
    formatRef.current = (command) => {
      document.execCommand(command, false, null);
    };
  }, []);

  const NGROK_API = "https://overmuch-unsavage-mona.ngrok-free.dev";

  const runCode = async () => {
    setOutputValue("Running...");
    try {
      const response = await fetch(`${NGROK_API}/run`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code: codeValue,
          language,
          stdin: inputValue,
        }),
      });
      const result = await response.json();
      let outputText = result.output || result.error || result.stderr || "";
      if (result.explanation) {
        outputText += "\n\nGemini Explanation:\n" + result.explanation;
      }
      setOutputValue(outputText);
    } catch (e) {
      setOutputValue("Error: " + e.message);
    }
  };

  return (
    <>
      <HeaderStarting />
      <TextNav
        removeExtraSpacesRef={removeExtraSpacesRef}
        formatRef={formatRef}
        undoRef={undoRef}
        redoRef={redoRef}
        runCode={runCode}
        language={language}
        setLanguage={setLanguage}
      />
      <Textbox
        removeExtraSpaces={removeExtraSpacesRef}
        undoRef={undoRef}
        redoRef={redoRef}
        setCodeValue={setCodeValue}
      />
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
            height: "100px",
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
            height: "200px",
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
