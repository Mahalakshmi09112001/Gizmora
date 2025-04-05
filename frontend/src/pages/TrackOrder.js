import React, { useState } from "react";

const TrackOrder = () => {
  const [orderId, setOrderId] = useState("");
  const [orderStatus, setOrderStatus] = useState("");

  const handleTrackOrder = () => {
    if (!orderId.trim()) {
      setOrderStatus("Please enter a valid Order ID.");
      return;
    }
    setOrderStatus(`Order ID: ${orderId} - Your order is being processed.`);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "50px auto", padding: "20px", background: "#fff", textAlign: "center", border: "1px solid #ddd", borderRadius: "10px" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "10px" }}>Track Your Order</h1>
      <p style={{ color: "#555", marginBottom: "20px" }}>Enter your Order ID to check the status.</p>
      
      <input
        type="text"
        placeholder="Enter Order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
        style={{ padding: "10px", width: "70%", borderRadius: "5px", border: "1px solid #ccc" }}
      />
      <button
        onClick={handleTrackOrder}
        style={{ marginLeft: "10px", padding: "10px 20px", background: "black", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
      >
        Track
      </button>

      {orderStatus && <p style={{ marginTop: "20px", fontWeight: "bold" }}>{orderStatus}</p>}
    </div>
  );
};

export default TrackOrder;
