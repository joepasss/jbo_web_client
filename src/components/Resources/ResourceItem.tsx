import React from "react";
import { resourceDataType } from "./Resources";

const ResourceItem: React.FC<resourceDataType> = ({ tag, data }) => {
  return (
    <div className="resource-item">
      <p className="tag">{tag}</p>
      <p className="data">{data}</p>
    </div>
  );
};

export default ResourceItem;
