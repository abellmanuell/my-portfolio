import React from "react";
import { cn } from "../utils/cn";

export default function Image({ src, alt, className }) {
  return (
    <img src={src} alt={alt} className={cn(className, "w-32", "rounded-md")} />
  );
}
