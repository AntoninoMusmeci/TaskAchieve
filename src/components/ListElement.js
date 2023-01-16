function ListElement({ color, name, ...onClick }) {
  
  return (
    <div className="list-element" {...onClick}>
      <span
        className="list-element__dot"
        style={{ backgroundColor: color }}
      ></span>

      <span  className="list-element__name">
        {name}
      </span>
    </div>
  );
}

export default ListElement;
