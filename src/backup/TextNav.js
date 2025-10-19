import React from "react";
import "./textnav.css";

const TextNav = ({
  removeExtraSpacesRef,
  undoRef,
  redoRef,
  copyRef,
  pascalCaseRef, // ✅ updated prop name
  handleFormatWithUndo, // formatting buttons (Bold/Italic/Underline)
}) => {
  return (
    <nav>
      <ul className="nav justify-content-right navt">
        {/* Bold */}
        <li className="nav-item">
          <button
            type="button"
            className="but"
            onClick={() => handleFormatWithUndo("bold")}
          >
            B
          </button>
        </li>

        {/* Italic */}
        <li className="nav-item">
          <button
            type="button"
            className="but"
            onClick={() => handleFormatWithUndo("italic")}
          >
            I
          </button>
        </li>

        {/* Underline */}
        <li className="nav-item">
          <button
            type="button"
            className="but"
            onClick={() => handleFormatWithUndo("underline")}
          >
            U
          </button>
        </li>

        {/* Remove Extra Spaces */}
        <li className="nav-item">
          <button
            type="button"
            className="but"
            onClick={() => removeExtraSpacesRef.current?.()}
          >
            Remove Spaces
          </button>
        </li>

        {/* Undo */}
        <li className="nav-item">
          <button
            type="button"
            className="but"
            onClick={() => undoRef.current?.()}
          >
            Undo
          </button>
        </li>

        {/* Redo */}
        <li className="nav-item">
          <button
            type="button"
            className="but"
            onClick={() => redoRef.current?.()}
          >
            Redo
          </button>
        </li>

        {/* PascalCase */}
        <li className="nav-item">
          <button
            type="button"
            className="but"
            onClick={() => pascalCaseRef.current?.()}
          >
            PascalCase
          </button>
        </li>

        {/* Copy */}
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
