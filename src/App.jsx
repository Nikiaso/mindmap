import { useCallback, useState } from "react";
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";
import "./App.css";
import "reactflow/dist/style.css";
import initialEdges from "./data/edges.jsx";
import initialNodes from "./data/nodes.jsx";
import NavBar from "./components/Navbar.jsx";
import InfoBox from "./components/InfoBox.jsx";

export default function App() {
  const [hoveredNode, setHoveredNode] = useState(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onNodeMouseEnter = (event, node) => {
    setHoveredNode(node);
  };
  const onNodeMouseLeave = () => {
    setHoveredNode(null);
  };

  return (
    <div>
      <NavBar />
      <div style={{ width: "100vw", height: "100vh" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeMouseEnter={onNodeMouseEnter}
          onNodeMouseLeave={onNodeMouseLeave}
        >
          <Controls />
          <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
      </div>
      {hoveredNode && Number(hoveredNode.id) >= 16 && (
        <InfoBox hoveredNode={hoveredNode} />
      )}
    </div>
  );
}
