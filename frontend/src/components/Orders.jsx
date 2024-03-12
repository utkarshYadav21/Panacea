import { useState, useEffect } from "react";

import Calender from "./Calender";
import { json } from "react-router-dom";

const Orders = () => {
  // Initial statuses
  const statuses = ["Pending", "Active", "Completed", "Rejected"];
  let user = localStorage.getItem("user");
  user = JSON.parse(user);
  let Email = user.Email;
  const [statusTracker, setStatusTracker] = useState(
    new Array(statuses.length).fill(false)
  );

  useEffect(() => {
    getStatus()
    setTimeout(() => {
      const updatedStatusTracker = [...statusTracker];
      updatedStatusTracker[1] = true;
      setStatusTracker(updatedStatusTracker);
    }, 2000);
  }, []);
  const getStatus = async () => {
    let status = await fetch("http://localhost:3000/status", {
      method: "Post",
      body: JSON.stringify({ Email }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });
    status = await status.json();
    console.log(status);
  };
  return (
    <div className="order-container min-h-[100vh] py-[20vh]">
      <h1 className="mb-[20px] text-4xl decor font-semibold pb-5">
        Track Your Orders
      </h1>

      <div className="status-tracker">
        {statuses.map((status, index) => (
          <div
            key={index}
            className={`status-node ${statusTracker[index] ? "active" : ""}`}
          >
            <div className="node-circle"></div>
            <p className="text-white">{status}</p>
          </div>
        ))}
      </div>
      <h1 className="mb-[20px] text-4xl decor font-semibold pb-5">
        Book a meeting
      </h1>
      <Calender />
    </div>
  );
};

export default Orders;
