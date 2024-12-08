"use client";
import BottomAudioPlayer from "@/components/bottom-audio-player";
import Loader from "@/components/loader";
import { ResizableComponent } from "@/components/resizable";
import { audioTracks } from "@/utils/dummy";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import { Loader2 } from "lucide-react";
import React from "react";
import { MdSkipNext } from "react-icons/md";

const Page = () => {
  const { ready } = usePrivy();
  const { wallets } = useWallets();
  const w0 = wallets[0];
  if (!ready)
    return (
      <div className="w-full grid items-center justify-center min-h-screen">
        <Loader />
      </div>
    );
  return (
    <div className="h-screen overflow-hidden">
      <ResizableComponent w0={w0} />
      <div className="fixed w-full bottom-0 border-t p-4 bg-backgroundOpac backdrop-blur-md flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <img
            src={audioTracks[0].cover}
            alt="cover"
            className="w-12 h-12 rounded-md"
          />
          <div>
            <p className="font-semibold">{audioTracks[0].title}</p>
            <p className="text-sm">{audioTracks[0].artist}</p>
          </div>
        </div>
        <div className="w-[36rem] h-full">
          <div>
            <BottomAudioPlayer />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Page;
