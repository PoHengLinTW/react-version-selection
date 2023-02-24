import { memo, useCallback, useState } from "react";
import { useDrop } from "react-dnd";

const style = {
  border: "1px solid gray",
  borderRadius: "25px",
  textAlign: "center",
  padding: "0.5rem",
  margin: "0.5rem",
};

const TagBox = memo(function TagBox({
  onDrop,
  lastDroppedItem,
  acceptVersions,
  tag,
  color,
}) {
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: [...acceptVersions],
      drop(_item, monitor) {
        onDrop(monitor.getItemType());
        return undefined;
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
        draggingItem: monitor.getItemType(),
      }),
    }),
    [onDrop]
  );
  const opacity = isOver ? 1 : canDrop ? 0.6 : 1;
  return (
    <div
      ref={drop}
      data-color={lastDroppedItem || "none"}
      style={{ ...style, backgroundColor: color, opacity }}
    >
      <p
        style={{
          margin: "0px",
          padding: "0px",
          color: "white",
          fontFamily: "courier",
        }}
      >
        {tag}
      </p>

      <p
        style={{
          margin: "0px",
          marginTop: "5px",
          color: "white",
          fontFamily: "courier",
        }}
      >
        {lastDroppedItem ?? "Not selected"}
      </p>
    </div>
  );
});

export const StatefulTagtBox = (props) => {
  const [lastDroppedItem, setLastDroppedItem] = useState(props.select || null);
  const handleDrop = useCallback((color) => setLastDroppedItem(color), []);
  return (
    <TagBox {...props} lastDroppedItem={lastDroppedItem} onDrop={handleDrop} />
  );
};
