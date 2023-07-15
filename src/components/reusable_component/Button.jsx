import React from "react";

function Button({
  padding,
  altname,
  imgSrc,
  btnName,
  width,
  bgColor = "#a259ff",
  borderColor = "transparent",
  borderStyle = "",
  color = "white",
}) {
  const style = {
    display: "flex",
    gap: "1.2rem",
    alignItems: "center",
    justifyContent: "center",
    padding: padding,
    color: color,
    fontSize: "1.6rem",
    fontWeight: "600",
    backgroundColor: bgColor,
    borderRadius: "20px",
    textDecoration: "none",
    maxWidth: width,
    borderStyle: borderStyle,
    borderWidth: "2px",
    borderColor: borderColor,
  };

  return (
    <a href="" style={style} className="btn-hover">
      <img src={imgSrc} alt={altname} />
      {btnName}
    </a>
  );
}

export default Button;
