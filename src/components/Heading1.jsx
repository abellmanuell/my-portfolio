import React from "react";
import { cn } from "../utils/cn";

export default function Heading({ children, className }) {
  return <h1 className={cn("font-bold text-2xl", className)}>{children}</h1>;
}
