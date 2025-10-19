import React, { useRef, useEffect, useState, forwardRef, useImperativeHandle } from "react";

const Textbox = forwardRef(({
  removeExtraSpaces,
  undoRef,
  redoRef,
  copyRef,
  pascalCaseRef,
  setCodeValue
}, ref) => {
  const editorRef = useRef(null);
  const lineNumbersRef = useRef(null);
  const [lines, setLines] = useState(1);
  const lineHeight = 20;
  const editorHeight = 300;

  const undoStack = useRef([]);
  const redoStack = useRef([]);
  const lastSavedText = useRef(null);

  const updateLines = () => {
    const editor = editorRef.current;
    if (!editor) return;
    setLines((editor.innerText || "").split("\n").length);
  };

  const saveStateForUndo = (force = false) => {
    const editor = editorRef.current;
    if (!editor) return;
    const currentText = editor.innerHTML;
    if (lastSavedText.current !== null && (currentText !== lastSavedText.current || force)) {
      undoStack.current.push(lastSavedText.current);
      lastSavedText.current = currentText;
      redoStack.current = []; 
    } else if (lastSavedText.current === null) {
      lastSavedText.current = currentText;
    }
  };

  const handleUndo = () => {
    const editor = editorRef.current;
    if (!editor || undoStack.current.length === 0) return;
    redoStack.current.push(editor.innerHTML);
    const previous = undoStack.current.pop();
    if (previous !== undefined) {
      editor.innerHTML = previous;
      lastSavedText.current = previous;
      updateLines();
    }
    if (setCodeValue) setCodeValue(editor.innerText);
  };

  const handleRedo = () => {
    const editor = editorRef.current;
    if (!editor || redoStack.current.length === 0) return;
    undoStack.current.push(editor.innerHTML);
    const next = redoStack.current.pop();
    if (next !== undefined) {
      editor.innerHTML = next;
      lastSavedText.current = next;
      updateLines();
    }
    if (setCodeValue) setCodeValue(editor.innerText);
  };

  const handleCopy = async () => {
    const editor = editorRef.current;
    if (!editor) return;
    try {
      await navigator.clipboard.writeText(editor.innerText);
      alert("Copied!");
    } catch {
      alert("Failed to copy!");
    }
  };

  const handleExtraSpaces = () => {
    const editor = editorRef.current;
    if (!editor) return;
    saveStateForUndo(true);
    editor.innerHTML = editor.innerHTML.replace(/\s+/g, " ");
    lastSavedText.current = editor.innerHTML;
    updateLines();
    if (setCodeValue) setCodeValue(editor.innerText);
  };

  const handlePascalCase = () => {
    const editor = editorRef.current;
    if (!editor) return;
    saveStateForUndo(true);
    editor.innerHTML = editor.innerText
      .split(/\s+/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
    lastSavedText.current = editor.innerHTML;
    updateLines();
    if (setCodeValue) setCodeValue(editor.innerText);
  };

  
  const handleKeyDown = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      document.execCommand("insertText", false, "  ");
    }
    if (e.key === "Enter") {
      e.preventDefault();
      const selection = window.getSelection();
      const node = selection.anchorNode;
      let lineIndent = '';
      if (node) {
        let before = node.textContent?.slice(0, selection.anchorOffset) || '';
        lineIndent = before.match(/^\s*/) ? before.match(/^\s*/)[0] : '';
      }
      document.execCommand("insertText", false, "\n" + lineIndent);
    }
  };

  let typingTimer;
  const handleKeyUp = (e) => {
    const key = e.key;
    if ([" ", "Enter", "Tab"].includes(key) || /[.,;!?]/.test(key)) {
      saveStateForUndo();
    } else {
      clearTimeout(typingTimer);
      typingTimer = setTimeout(() => saveStateForUndo(), 1200);
    }
    updateLines();
    if (setCodeValue && editorRef.current) setCodeValue(editorRef.current.innerText);
  };

  useImperativeHandle(ref, () => ({
    handleFormatAction: (command) => {
      const editor = editorRef.current;
      if (!editor) return;
      editor.focus();
      document.execCommand(command, false, null);
      saveStateForUndo(true); 
      if (setCodeValue) setCodeValue(editor.innerText);
    },
  }));

  useEffect(() => {
    if (removeExtraSpaces) removeExtraSpaces.current = handleExtraSpaces;
    if (undoRef) undoRef.current = handleUndo;
    if (redoRef) redoRef.current = handleRedo;
    if (copyRef) copyRef.current = handleCopy;
    if (pascalCaseRef) pascalCaseRef.current = handlePascalCase;

    const editor = editorRef.current;
    if (editor && lastSavedText.current === null) {
      lastSavedText.current = editor.innerHTML;
    }
  }, []);

  useEffect(() => {
    const editor = editorRef.current;
    const numbers = lineNumbersRef.current;
    if (!editor || !numbers) return;
    const handleScroll = () => numbers.scrollTop = editor.scrollTop;
    editor.addEventListener("scroll", handleScroll);
    return () => editor.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        border: "1px solid #ccc",
        borderRadius: "5px",
        fontFamily: "monospace",
        fontSize: "14px",
        overflow: "hidden",
        height: `${editorHeight}px`,
      }}
    >
      <div
        ref={lineNumbersRef}
        style={{
          backgroundColor: "#f0f0f0",
          textAlign: "right",
          paddingRight: "10px",
          userSelect: "none",
          overflow: "hidden",
          lineHeight: `${lineHeight}px`,
        }}
      >
        {Array.from({ length: lines }, (_, i) => (
          <div key={i}>{i + 1}</div>
        ))}
      </div>
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        tabIndex={0}
        style={{
          flex: 1,
          padding: "2px 10px",
          outline: "none",
          overflowY: "auto",
          lineHeight: `${lineHeight}px`,
          whiteSpace: "pre-wrap",
          wordWrap: "break-word",
          backgroundColor: "white",
          color: "black",
        }}
      />
    </div>
  );
});

export default Textbox;
