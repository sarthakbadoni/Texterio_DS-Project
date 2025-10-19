import React from "react";
import SplitText from "./SplitText";


export default function Text({ text, ...props }) {
  return (
    <div>
      <SplitText text={text} {...props} />
    </div>
  );
}
