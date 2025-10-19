import React, { useRef, useEffect } from "react";
import HeaderStarting from "./HeaderStarting";
import Footerr from "./footerTP";
import Textbox from "./Textbox";
import TextNav from "./TextNav";

export default function TextEditorPage() {
  const removeExtraSpacesRef = useRef(null);
  const undoRef = useRef(null);
  const redoRef = useRef(null);
  const pascalCaseRef = useRef(null); 
  const copyRef = useRef(null);
  const textboxRef = useRef(null); 

  useEffect(() => {
    document.body.style.backgroundColor = "rgb(28, 20, 52)";
  }, []);

  return (
    <>
      <HeaderStarting />


      <TextNav
        removeExtraSpacesRef={removeExtraSpacesRef}
        undoRef={undoRef}
        redoRef={redoRef}
        copyRef={copyRef} 
        pascalCaseRef={pascalCaseRef} 
        handleFormatWithUndo={(command) =>
          textboxRef.current?.handleFormatAction(command)
        } 
      />

      <Textbox
        ref={textboxRef} 
        removeExtraSpaces={removeExtraSpacesRef}
        undoRef={undoRef}
        redoRef={redoRef}
        pascalCaseRef={pascalCaseRef} 
        copyRef={copyRef}
      />

      <Footerr />
    </>
  );
}
