import React from "react";

export default function ErrorMessage({ error }) {
  if (error) {
    switch (error.type) {
      case "required":
        return <p>This is required</p>;
      case "minLength":
        return <p>Please enter at least 8 characters</p>;
      case "pattern":
        return <p>Please enter a valid email address</p>;
      case "min":
        return <p>Minmium age is 18</p>;
      case "validate":
        return <p>Username is already used</p>;
      default:
        return null;
    }
  }

  return null;
}