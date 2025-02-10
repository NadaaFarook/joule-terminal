"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Alert } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import Image from "next/image";

const walletOptions = [
  {
    id: "google",
    name: "Google",
    icon: (
      <Image src="/logos/google.png" alt="Google logo" width={32} height={32} />
    ),
    primaryColor: "#4285F4",
    borderColor: "#EEF4FF",
    secondaryColor: "#CDE0FF",
  },
  {
    id: "petra",
    name: "Petra",
    icon: (
      <Image src="/logos/petra.png" alt="Petra logo" width={32} height={32} />
    ),
    primaryColor: "#FB6163",
    borderColor: "#FFF6F6",
    secondaryColor: "#FFDFDF",
  },
  {
    id: "martian",
    name: "Martian",
    icon: (
      <Image
        src="/logos/martian.png"
        alt="Martian logo"
        width={32}
        height={32}
      />
    ),
    primaryColor: "#000000",
    borderColor: "#F3F3F3",
    secondaryColor: "#E4E4E4",
  },
  {
    id: "pontem",
    name: "Pontem",
    icon: (
      <Image src="/logos/pontem.png" alt="Pontem logo" width={32} height={32} />
    ),
    primaryColor: "#DF3B84",
    borderColor: "#FFF6F9",
    secondaryColor: "#FFD0E1",
  },
  {
    id: "trust-wallet",
    name: "Trust Wallet",
    icon: (
      <Image
        src="/logos/trust.png"
        alt="Trust Wallet logo"
        width={32}
        height={32}
      />
    ),
    primaryColor: "#3375BB",
    borderColor: "#F6F9FF",
    secondaryColor: "#CADBFF",
  },
  {
    id: "msafe",
    name: "MSafe",
    icon: (
      <Image src="/logos/msafe.png" alt="MSafe logo" width={32} height={32} />
    ),
    primaryColor: "#48B5A7",
    borderColor: "#F1FFFD",
    secondaryColor: "#CFFFF9",
  },
  {
    id: "nightly",
    name: "Nightly",
    icon: (
      <Image
        src="/logos/nightly.png"
        alt="Nightly logo"
        width={32}
        height={32}
      />
    ),
    primaryColor: "#6067F9",
    borderColor: "#ECEDFF",
    secondaryColor: "#D5D7FF",
  },
  {
    id: "apple-connect",
    name: "Apple Connect",
    icon: (
      <Image
        src="/logos/apple.png"
        alt="Apple Connect logo"
        width={32}
        height={32}
      />
    ),
    primaryColor: "#000000",
    borderColor: "#F3F3F3",
    secondaryColor: "#E4E4E4",
  },
];

const WalletConnector = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  const [showToast, setShowToast] = useState(false);

  const handleWalletSelect = (walletId) => {
    setIsOpen(false);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[420px] bg-gradient-to-b from-[#FFFAF7] to-white rounded-3xl py-8 px-7 gap-8">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">
              Connect Wallet
            </DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-3 gap-4">
            {walletOptions.map((wallet) => (
              <button
                key={wallet.id}
                onClick={() => handleWalletSelect(wallet.id)}
                className={cn(
                  "flex flex-col items-center justify-center px-8 py-5 rounded-3xl border border-transparent transition-colors",
                  `bg-[${wallet.borderColor}] hover:border-[${wallet.primaryColor}] hover:bg-[${wallet.secondaryColor}] `
                )}
              >
                {wallet.icon}

                <span className="text-[10px] font-medium text-gray-700 whitespace-nowrap mt-1">
                  {wallet.name}
                </span>
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {showToast && (
        <Alert className="fixed bottom-4 right-4 max-w-xs bg-white shadow-lg">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-yellow-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-sm">
              To access Joule Terminal, connect your wallet first.
            </p>
          </div>
        </Alert>
      )}
    </div>
  );
};

export default WalletConnector;
