// Alert.jsx
import React from "react";

const Alert = ({ message }) => {
  return <div className="alert">{message && <h2>{message}</h2>}</div>;
};

export default Alert;
