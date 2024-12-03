"use client";
import { ResizableComponent } from "@/components/resizable";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import React from "react";

const Page = () => {
  const { authenticated, ready } = usePrivy();
  const { wallets } = useWallets();
  const w0 = wallets[0];
  console.log(w0);
  if (!ready) return <div>Loading...</div>;
  return (
    <div className="h-screen overflow-hidden">
      <ResizableComponent w0={w0} />
    </div>
  );
};

export default Page;
