import React from "react";
import { cn } from "../utils/cn";

export default function Paragrah({ children, className }) {
  return <div className={cn(className, "text-sm")}>{children}</div>;
}
