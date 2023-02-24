import { memo } from "react";
import { VersionBox } from "./VersionBox.js";
import { StatefulTagtBox as TagBox } from "./TagBox.js";

const versions = [
  "0.0.1",
  "0.0.2",
  "0.1.0",
  "0.1.2",
  "0.2.0",
  "0.2.1",
  "0.3.0",
  "0.3.1",
  "0.3.3",
  "0.4.0",
  "0.4.2",
  "0.4.3",
  "0.5.0",
  "0.7.0",
  "0.8.0",
  "0.9.0",
  "1.0.0",
];

const exist_tags = {
  current: { version: "0.9.0", color: "green" },
  previous: { version: "0.8.0", color: "blue" },
  lastest: { version: "1.0.0", color: "red" },
  tag1: { version: "0.2.1", color: "orange" },
  tag2: { version: null, color: "gray" },
  tag3: { version: null, color: "lightblue" },
};

export const Container = memo(function Container() {
  return (
    <div
      style={{
        overflow: "hidden",
        clear: "both",
        // margin: "-.5rem",
        width: "90%",
        height: "100%",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        padding: "5%",
        border: "1px solid black",
      }}
    >
      <div
        style={{
          border: "1px solid black",
          padding: "50px",
          float: "left",
          height: "600px",
          width: "200px",
          overflowY: "scroll",
          overflowX: "auto",
        }}
      >
        Published versions:
        {versions.map((version) => (
          <VersionBox version={version} />
        ))}
      </div>

      <div
        style={{
          border: "1px solid black",
          padding: "50px",
          float: "left",
          height: "600px",
          width: "250px",
          overflowY: "scroll",
          overflowX: "auto",
        }}
      >
        All tags:
        {Object.entries(exist_tags).map(([tag, data]) => (
          <TagBox
            acceptVersions={versions}
            select={data.version}
            tag={tag}
            color={data.color}
          />
        ))}
      </div>
    </div>
  );
});
