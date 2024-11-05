import React from "react";

export default function Link({ to, children }) {
  return (
    <a href={to} target="_blank" className="underline text-blue-500">
      {children}
    </a>
  );
}
