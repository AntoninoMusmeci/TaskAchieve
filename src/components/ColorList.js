import React from "react";
import ListElement from "./ListElement";

function ColorList({ chooseColor }) {
  const colors = [
    { name: "Alice Blue", color: "#F0F8FF" },
    { name: "Antique White", color: "#FAEBD7" },
    { name: "Aqua", color: "#00FFFF" },
    { name: "Aquamarine", color: "#7FFFD4" },
    { name: "Azure", color: "#F0FFFF" },
    { name: "Beige", color: "#F5F5DC" },
    { name: "Bisque", color: "#FFE4C4" },
    { name: "Black", color: "#000000" },
    { name: "Blanched Almond", color: "#FFEBCD" },
    { name: "Blue", color: "#0000FF" },
    { name: "Blue Violet", color: "#8A2BE2" },
    { name: "Brown", color: "#A52A2A" },
    { name: "Red", color: "red" },
    { name: "Burly Wood", color: "#DEB887" },
  ];
  return (
    <ul className="project-add-modal__color-list">
      {colors.map(({ color, name }) => (
        <ListElement
          onClick={() => chooseColor({ color, name })}
          key={color}
          color={color}
          name={name}
        />
      ))}
    </ul>
  );
}

export default ColorList;
