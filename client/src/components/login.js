import { usePrivy } from "@privy-io/react-auth";
import { LogOutIcon } from "lucide-react";
import { truncateAddress } from "@/utils/truncateAddress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "@/theme/theme-toggle";

const Login = ({ w0 }) => {
  const { login, authenticated, logout } = usePrivy();
  return (
    <div className="p-6">
      {authenticated ? (
        <div className="flex items-center gap-3">
          <DropdownMenu className="w-full">
            <DropdownMenuTrigger className="w-full bg-primary rounded-md">
              <div className="py-2 flex items-center justify-between px-4 w-full">
                <div>
                  <Image
                    src={"/icons/connect-wallet.svg"}
                    width={20}
                    height={20}
                    alt="wallet"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <p className="text-white">
                    {w0?.address && truncateAddress(w0.address, 4, 4)}
                  </p>
                  <Image src={"/icons/down-arrow.svg"} width={10} height={10} />
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-[18rem]">
              <DropdownMenuItem>
                <div
                  className="flex items-center justify-between w-full"
                  onClick={logout}
                >
                  <p>Logout</p>
                  <LogOutIcon className="w-4" />
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <ModeToggle />
        </div>
      ) : (
        <Button className="w-full" onClick={login}>
          Connect Wallet
        </Button>
      )}
    </div>
  );
};

export default Login;
