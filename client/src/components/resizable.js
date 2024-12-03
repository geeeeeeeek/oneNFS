import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Button } from "./ui/button";
import { usePrivy } from "@privy-io/react-auth";
import { truncateAddress } from "@/utils/truncateAddress";

export function ResizableComponent({ w0 }) {
  const { login, authenticated } = usePrivy();
  const audioTracks = [
    {
      title: "Peaceful Ambience",
      artist: "Ownsound",
      cover: "path/to/cover1.jpg",
      soundUri: "path/to/sound1.mp3",
    },
    {
      title: "Rainy Day Meditation",
      artist: "Ownsound",
      cover: "path/to/cover2.jpg",
      soundUri: "path/to/sound2.mp3",
    },
    {
      title: "Forest Soundscape",
      artist: "Ownsound",
      cover: "path/to/cover3.jpg",
      soundUri: "path/to/sound3.mp3",
    },
  ];

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
            <div className="p-6">
              {authenticated ? (
                <div className="border rounded-md py-2">
                  {truncateAddress(w0.address,10,10)}
                </div>
              ) : (
                <Button className="w-full" onClick={login}>
                  Connect Wallet
                </Button>
              )}
            </div>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Two</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
