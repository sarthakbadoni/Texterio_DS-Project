import React from "react";
import "./textnav.css";

const TextNav = ({
    removeExtraSpacesRef,
    undoRef,
    redoRef,camelCaseRef,copyRef,
    formatRef,
}) => {
    const handleFormat = (command) => {
        const editor = document.querySelector('[contenteditable="true"]');
        if (editor) editor.focus();
        if (formatRef.current) formatRef.current(command);
    };

    return (
        <nav>
            <ul className="nav justify-content-right navt">

                <li className="nav-item">
                    <button
                        type="button"
                        className="but"
                        onClick={() => console.log("Run Clicked")}
                    >
                        RUN
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        type="button"
                        className="but"
                        onClick={() => console.log("Debug Clicked")}
                    >
                        DEBUG
                    </button>
                </li>
               
            </ul>
        </nav>
    );
};

export default TextNav;