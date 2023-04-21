import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "end",
        alignItems: "end",
        flexDirection: "row",
        transform: "translate(50%,-50%)",
        marginLeft: "50px",
        position: "absolute",
        zIndex: "15",
      }}
    >
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 18,
          color: "#333",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        Loading...
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
