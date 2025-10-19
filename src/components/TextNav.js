import React from "react";
import "./textnav.css";

const TextNav = ({
  removeExtraSpacesRef,
  undoRef,
  redoRef,
  copyRef,
  pascalCaseRef, 
  handleFormatWithUndo, 
}) => {
  return (
    <nav>
      <ul className="nav justify-content-right navt">
        <li className="nav-item">
          <button
            type="button"
            className="but"
            onClick={() => handleFormatWithUndo("bold")}
          >
            B
          </button>
        </li>


        <li className="nav-item">
          <button
            type="button"
            className="but"
            onClick={() => handleFormatWithUndo("italic")}
          >
            I
          </button>
        </li>


        <li className="nav-item">
          <button
            type="button"
            className="but"
            onClick={() => handleFormatWithUndo("underline")}
          >
            U
          </button>
        </li>

  
        <li className="nav-item">
          <button
            type="button"
            className="but"
            onClick={() => removeExtraSpacesRef.current?.()}
          >
            Remove Spaces
          </button>
        </li>


        <li className="nav-item">
          <button
            type="button"
            className="but"
            onClick={() => undoRef.current?.()}
          >
            Undo
          </button>
        </li>

 
        <li className="nav-item">
          <button
            type="button"
            className="but"
            onClick={() => redoRef.current?.()}
          >
            Redo
          </button>
        </li>

 
        <li className="nav-item">
          <button
            type="button"
            className="but"
            onClick={() => pascalCaseRef.current?.()}
          >
            PascalCase
          </button>
        </li>

     
        <li className="nav-item">
          <button
            type="button"
            className="but"
            onClick={() => copyRef.current?.()}
          >
            Copy
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default TextNav;
