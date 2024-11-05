import React from "react";
import { cn } from "../utils/cn";

export default function Heading2({ children, className }) {
  return <h2 className={cn("font-bold text-2xl", className)}>{children}</h2>;
}
