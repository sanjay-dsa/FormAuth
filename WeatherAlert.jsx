import React from "react";
import "./WeatherAlerts.css";

const WeatherAlerts = ({ alerts }) => {
  if (!alerts || alerts.length === 0) {
    return (
      <div className="alerts-card">
        <h2>⚠ Weather Alerts</h2>
        <p>No active alerts.</p>
      </div>
    );
  }

  return (
    <div className="alerts-card">
      <h2>⚠ Weather Alerts</h2>

      {alerts.map((alert, index) => (
        <div key={index} className="alert-item">
          <h3>{alert.title}</h3>
          <p>{alert.description}</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherAlerts;
