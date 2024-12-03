"use client";
import { PrivyProvider } from "@privy-io/react-auth";
import { privyConfig } from "./config";

const PrivyWrapper = ({ children }) => {
  return <PrivyProvider {...privyConfig}>{children}</PrivyProvider>;
};

export default PrivyWrapper;
