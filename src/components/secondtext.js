import React, { useRef } from "react";
import VariableProximity from "./VariableProximity";
import './style.css';

export default function TextVP({ text, ...props }) {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef}>
      <VariableProximity 
        label={text}
        containerRef={containerRef}
        fromFontVariationSettings="'wght' 300"
        toFontVariationSettings="'wght' 900"
        {...props}
      />
    </div>
  );
}
