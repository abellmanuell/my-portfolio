import React from "react";

export default function heading({ content }) {
  return (
    <h1 className="text-5xl md:text-8xl font-semibold text-amethyst-900">
      {content || "No Heading"}
    </h1>
  );
}
