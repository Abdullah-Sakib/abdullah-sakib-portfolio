import React from "react";
import AnimatedCursor from "react-animated-cursor";

const AnimCursor = () => {
  return (
    <div>
      <AnimatedCursor
      className="z-50"
        innerSize={10}
        outerSize={12}
        color="202, 138, 4"
        outerAlpha={0.2}
        hasBlendMode={true}
        innerScale={0.9}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "span",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </div>
  );
};

export default AnimCursor;
