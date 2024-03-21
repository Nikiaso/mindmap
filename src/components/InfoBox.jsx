import { CChart } from "@coreui/react-chartjs";
const InfoBox = ({ hoveredNode }) => {
  return (
    <div className="absolute w-96 bg-slate-100 h-80 right-0 bottom-0">
      <CChart type={hoveredNode.type} data={hoveredNode.infoData} />
    </div>
  );
};

export default InfoBox;
