import React from "react";

const Button = ({
  text,
  bg = "#FF624c",
  fontName = "Montserrat",
  fontWeight = "bold",
  size = "xl",
  color = "white",
  paddingY = "20px",
  paddingX = "20px",
  redious = "10",
  border = "none",
}) => {
  return (
    <button
      style={{
        backgroundColor: bg,
        fontFamily: fontName,
        fontWeight: fontWeight,
        fontSize: size,
        color: color,
        paddingTop: paddingY,
        paddingBottom: paddingY,
        paddingLeft: paddingX,
        paddingRight: paddingX,
        borderRadius: `${redious}px`,
        border: border,
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
};

export default Button;
