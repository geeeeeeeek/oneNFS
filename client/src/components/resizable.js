import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Login from "./login";
import { Badge } from "./ui/badge";
import { PlayIcon } from "lucide-react";
import { audioTracks } from "@/utils/dummy";

export function ResizableComponent({ w0 }) {
  return (
    <ResizablePanelGroup direction="horizontal" className="">
      <ResizablePanel defaultSize={150}>
        <div className="flex items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={75} className="">
            <Login w0={w0} />
            <div className="p-6 flex items-center gap-4">
              <Badge
                className={
                  "bg-transparent text-foreground hover:bg-muted cursor-pointer"
                }
              >
                Playlists
              </Badge>
              <Badge className={"cursor-pointer"}>Songs</Badge>
            </div>
            <div className="px-6 space-y-4">
              {audioTracks.map((track, index) => (
                <div
                  key={index}
                  className="flex w-full items-center justify-between p-4 hover:bg-muted rounded-md border"
                >
                  <div className="w-full flex items-center gap-4">
                    <img
                      src={track.cover}
                      alt="cover"
                      className="w-12 h-12 rounded-md"
                    />
                    <div>
                      <p className="font-semibold">{track.title}</p>
                      <p className="text-sm text-gray-500">{track.artist}</p>
                    </div>
                  </div>
                  <div className="grid place-items-center">
                    <div className="rounded-full p-1.5 bg-primary cursor-pointer">
                      <PlayIcon className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
