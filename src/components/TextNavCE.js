import React from "react";
import "./textnav.css";

const TextNav = ({
    removeExtraSpacesRef,
    undoRef,
    redoRef,
    camelCaseRef,
    copyRef,
    formatRef,
    runCode,
    language,
    setLanguage
}) => {
    return (
        <nav>
            <ul className="nav justify-content-right navt" style={{ alignItems: "center" }}>
                <li className="nav-item">
                    <label style={{ marginRight: 8, color: "#fff" }}>Language:</label>
                    <select value={language} onChange={e => setLanguage(e.target.value)}>
                        <option value="python">Python</option>
                        <option value="c">C</option>
                        <option value="cpp">C++</option>
                        <option value="java">Java</option>
                        <option value="nodejs">Node.js</option>
                        <option value="javascript">JavaScript</option>
                    </select>
                </li>
                <li className="nav-item" style={{ marginLeft: 20 }}>
                    <button
                        type="button"
                        className="but"
                        onClick={runCode}
                    >
                        RUN
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default TextNav;
