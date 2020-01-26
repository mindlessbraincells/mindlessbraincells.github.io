import React from "react";

export default function help(params) {
  return (
    <span>
      List of commands:
      <br />
      <br />
      clear, contact, help, showcase
    </span>
  );
}

export const aliases = ["help", "halp"];
