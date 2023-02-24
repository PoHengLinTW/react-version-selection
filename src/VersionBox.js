import { memo, useMemo } from "react";
import { useDrag } from "react-dnd";

const style = {
  border: "1px dashed gray",
  padding: "0.5rem",
  margin: "0.5rem",
  width: "150px",
  backgroundColor: "lightgray",
};

export const VersionBox = memo(function VersionBox({ version }) {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: version,
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [version]
  );

  const containerStyle = useMemo(
    () => ({
      ...style,
      opacity: isDragging ? 0.4 : 1,
      cursor: "move",
      textAlign: "center",
    }),
    [isDragging]
  );

  return (
    <div ref={drag} style={containerStyle}>
      <p style={{ margin: "3px" }}>{version}</p>
    </div>
  );
});
