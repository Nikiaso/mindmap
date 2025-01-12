const initialEdges = [
  {
    id: "e0-1",
    source: "0",
    target: "1",
    markerStart: "myCustomSvgMarker",
    markerEnd: { type: "arrow", color: "#000000", width: 20, height: 20 },
    style: {
      strokeWidth: 1,
      stroke: "#000000",
    },
    animated: true,
  },
  {
    id: "e0-2",
    source: "0",
    target: "2",
    markerStart: "myCustomSvgMarker",
    markerEnd: { type: "arrow", color: "#000000", width: 20, height: 20 },
    style: {
      strokeWidth: 1,
      stroke: "#000000",
    },
    animated: true,
  },
  {
    id: "e0-3",
    source: "0",
    target: "3",
    markerStart: "myCustomSvgMarker",
    markerEnd: { type: "arrow", color: "#000000", width: 20, height: 20 },
    style: {
      strokeWidth: 1,
      stroke: "#000000",
    },
    animated: true,
  },
  {
    id: "e0-4",
    source: "0",
    target: "4",
    markerStart: "myCustomSvgMarker",
    markerEnd: { type: "arrow", color: "#000000", width: 20, height: 20 },
    style: {
      strokeWidth: 1,
      stroke: "#000000",
    },
    animated: true,
  },
  {
    id: "e0-5",
    source: "0",
    target: "5",
    markerStart: "myCustomSvgMarker",
    markerEnd: { type: "arrow", color: "#000000", width: 20, height: 20 },
    style: {
      strokeWidth: 1,
      stroke: "#000000",
    },
    animated: true,
  },
  {
    id: "e1-6",
    source: "1",
    target: "6",
    markerStart: "myCustomSvgMarker",
    markerEnd: { type: "arrow", color: "#000000", width: 20, height: 20 },
    style: {
      strokeWidth: 1,
      stroke: "#000000",
    },
  },
  {
    id: "e1-7",
    source: "1",
    target: "7",
    markerStart: "myCustomSvgMarker",
    markerEnd: { type: "arrow", color: "#000000", width: 20, height: 20 },
    style: {
      strokeWidth: 1,
      stroke: "#000000",
    },
  },
  {
    id: "e2-8",
    source: "2",
    target: "8",
    markerStart: "myCustomSvgMarker",
    markerEnd: { type: "arrow", color: "#000000", width: 20, height: 20 },
    style: {
      strokeWidth: 1,
      stroke: "#000000",
    },
  },
  {
    id: "e2-9",
    source: "2",
    target: "9",
    markerStart: "myCustomSvgMarker",
    markerEnd: { type: "arrow", color: "#000000", width: 20, height: 20 },
    style: {
      strokeWidth: 1,
      stroke: "#000000",
    },
  },
  {
    id: "e3-10",
    source: "3",
    target: "10",
    markerStart: "myCustomSvgMarker",
    markerEnd: { type: "arrow", color: "#000000", width: 20, height: 20 },
    style: {
      strokeWidth: 1,
      stroke: "#000000",
    },
  },
  {
    id: "e3-11",
    source: "3",
    target: "11",
    markerStart: "myCustomSvgMarker",
    markerEnd: { type: "arrow", color: "#000000", width: 20, height: 20 },
    style: {
      strokeWidth: 1,
      stroke: "#000000",
    },
  },
  {
    id: "e4-12",
    source: "4",
    target: "12",
    markerStart: "myCustomSvgMarker",
    markerEnd: { type: "arrow", color: "#000000", width: 20, height: 20 },
    style: {
      strokeWidth: 1,
      stroke: "#000000",
    },
  },
  {
    id: "e4-13",
    source: "4",
    target: "13",
    markerStart: "myCustomSvgMarker",
    markerEnd: { type: "arrow", color: "#000000", width: 20, height: 20 },
    style: {
      strokeWidth: 1,
      stroke: "#000000",
    },
  },
  {
    id: "e5-14",
    source: "5",
    target: "14",
    markerStart: "myCustomSvgMarker",
    markerEnd: { type: "arrow", color: "#000000", width: 20, height: 20 },
    style: {
      strokeWidth: 1,
      stroke: "#000000",
    },
  },
  {
    id: "e5-15",
    source: "5",
    target: "15",
    markerStart: "myCustomSvgMarker",
    markerEnd: { type: "arrow", color: "#000000", width: 20, height: 20 },
    style: {
      strokeWidth: 1,
      stroke: "#000000",
    },
  },
  {
    id: "e6-16",
    source: "6",
    target: "16",
    markerStart: "myCustomSvgMarker",
    markerEnd: { type: "arrow", color: "#000000", width: 20, height: 20 },
    style: {
      strokeWidth: 1,
      stroke: "#000000",
    },
  },
  {
    id: "e6-17",
    source: "6",
    target: "17",
    markerStart: "myCustomSvgMarker",
    markerEnd: { type: "arrow", color: "#000000", width: 20, height: 20 },
    style: {
      strokeWidth: 1,
      stroke: "#000000",
    },
  },
  {
    id: "e6-16",
    source: "16",
    target: "18",
    markerStart: "myCustomSvgMarker",
    markerEnd: { type: "arrow", color: "#000000", width: 20, height: 20 },
    style: {
      strokeWidth: 1,
      stroke: "#000000",
    },
  },
  {
    id: "e6-17",
    source: "16",
    target: "19",
    markerStart: "myCustomSvgMarker",
    markerEnd: { type: "arrow", color: "#000000", width: 20, height: 20 },
    style: {
      strokeWidth: 1,
      stroke: "#000000",
    },
  },
  {
    id: "e6-17",
    source: "16",
    target: "20",
    markerStart: "myCustomSvgMarker",
    markerEnd: { type: "arrow", color: "#000000", width: 20, height: 20 },
    style: {
      strokeWidth: 1,
      stroke: "#000000",
    },
  },
  {
    id: "e6-17",
    source: "16",
    target: "21",
    markerStart: "myCustomSvgMarker",
    markerEnd: { type: "arrow", color: "#000000", width: 20, height: 20 },
    style: {
      strokeWidth: 1,
      stroke: "#000000",
    },
  },
];
export default initialEdges;
