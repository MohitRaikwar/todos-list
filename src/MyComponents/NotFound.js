import React from "react";
import { Link } from "react-router-dom";


export default function NotFound() {
  return (
    <div className="text-center">
      <h2>404 Not found</h2>
      <p>
        <Link to="/">Go Home</Link>
      </p>
    </div>

  );
}
