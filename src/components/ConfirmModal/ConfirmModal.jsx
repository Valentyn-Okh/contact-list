import React from "react";

export default function ConfirmModal({ show, onClose, onConfirm, message }) {
  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          minWidth: "300px",
          textAlign: "center",
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)"
        }}
      >
        <p>{message || "Are you sure?"}</p>
        <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
          <button className="btn btn-danger" onClick={onConfirm}>
            Yes
          </button>
          <button className="btn btn-secondary" onClick={onClose}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}