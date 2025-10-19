import React, { useRef, useEffect } from "react";
import HeaderStarting from "./HeaderStarting";
import Footerr from "./footer";
import Textbox from "./Textbox";
import TextNav from "./TextNav";

export default function TextEditorPage() {
  const removeExtraSpacesRef = useRef(null);
  const undoRef = useRef(null);
  const redoRef = useRef(null);
  const pascalCaseRef = useRef(null); // ✅ renamed
  const copyRef = useRef(null);
  const textboxRef = useRef(null); // ref to Textbox

  useEffect(() => {
    document.body.style.backgroundColor = "rgb(28, 20, 52)";
  }, []);

  return (
    <>
      <HeaderStarting />

      {/* Pass all required refs including formatting function */}
      <TextNav
        removeExtraSpacesRef={removeExtraSpacesRef}
        undoRef={undoRef}
        redoRef={redoRef}
        copyRef={copyRef} // matches TextNav.js prop
        pascalCaseRef={pascalCaseRef} // ✅ updated prop
        handleFormatWithUndo={(command) =>
          textboxRef.current?.handleFormatAction(command)
        } // formatting buttons use Textbox undo-aware function
      />

      <Textbox
        ref={textboxRef} // attach ref so parent can call handleFormatAction
        removeExtraSpaces={removeExtraSpacesRef}
        undoRef={undoRef}
        redoRef={redoRef}
        pascalCaseRef={pascalCaseRef} // ✅ updated prop
        copyRef={copyRef}
      />

      <Footerr />
    </>
  );
}
