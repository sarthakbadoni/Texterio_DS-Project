import React from "react";
import SplitText from "./SplitText";

// wrapper component so you can just pass `text` from App.js
export default function Text({ text, ...props }) {
  return (
    <div>
      <SplitText text={text} {...props} />
    </div>
  );
}
