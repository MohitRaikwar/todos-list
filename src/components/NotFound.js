import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export default function NotFound() {
  return (
    <div className="text-center">
      <h2>404 Not found</h2>
      <p>
        <Link to="/">
        <Button variant="primary"><strong>Go Home</strong></Button>{' '}
        </Link>
      </p>
    </div>

  );
}
