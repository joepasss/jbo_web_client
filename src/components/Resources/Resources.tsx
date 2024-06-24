import ResourceItem from "./ResourceItem";

export interface resourceDataType {
  tag: string;
  data: string;
}

const data: resourceDataType[] = [
  { tag: "uptime", data: "1 year" },
  { tag: "cpu usage", data: "30%" },
  { tag: "ram usage", data: "10GB/16GB" },
];

const Resources = () => {
  return (
    <div className="resources">
      {data.map((item) => {
        return <ResourceItem tag={item.tag} data={item.data} />;
      })}
    </div>
  );
};

export default Resources;
