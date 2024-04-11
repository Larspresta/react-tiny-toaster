import React, { useEffect, useState } from "react";
import closeLogo from "./assets/closeto.svg";

function Toast({ msg, duration = 3000 }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "3%",
        right: "3%",
        backgroundColor: "#22c55e",
        color: "white",
        padding: "1.5rem",
        borderRadius: "5px",
        zIndex: 999,
      }}
    >
      <img
        style={{
          cursor: "pointer",
          position: "absolute",
          top: "-10px",
          right: "-10px",
        }}
        src={closeLogo}
        onClick={() => setShow(false)}
        alt="close"
      ></img>
      <p>{msg}</p>
    </div>
  );
}

export default Toast;
