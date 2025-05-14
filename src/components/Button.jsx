import React from "react";

const Button = ({
  text,
  bg = "#FF624c",
  fontName = "Montserrat",
  fontWeight = "bold",
  size = "xl",
  color = "white",
  paddingY = "16",
  paddingx = "40",
  redious = "10",
}) => {
  return (
    <button
      style={{
        backgroundColor: bg,
        fontFamily: fontName,
        fontWeight: fontWeight,
        fontSize: size,
        color: color,
        padding:`${paddingY}px ${ paddingx}px`,
        borderRadius:`${ redious}px`
      }}
    >
      {text}
    </button>
  );
};

export default Button;
