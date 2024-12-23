import { Loader2 } from "lucide-react";
import React from "react";

const Loader = ({ noWidth = false }) => {
  if (noWidth) return <Loader2 className="animate-spin text-primary" />;
  return <Loader2 className="animate-spin text-primary w-40" />;
};

export default Loader;
