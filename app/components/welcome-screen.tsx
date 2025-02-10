import { IdeaIcon, LendIcon, MarketIcon, StrategyIcon } from "@/assets/icons";

export function WelcomeScreen({
  setInput,
}: {
  setInput: (value: string) => void;
}) {
  return (
    <div className="overflow-y-auto flex flex-col items-center justify-center gap-14 px-8">
      <div className="space-y-3 text-center">
        <div className="bg-gradient-to-b from-black to-[#FF5B14] bg-clip-text text-transparent">
          <h1 className="text-[28px] font-extrabold leading-none">
            Hi, Move James!
          </h1>

          <h2 className="text-[28px] font-extrabold leading-none">
            How Can We Assist You Today?
          </h2>
        </div>
        <p className="text-[14px] font-medium leading-normal text-[#363853] max-w-[420px]">
          Ask anything, explore opportunities, and take control of your DeFi
          journey with Joule Terminal.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 w-full max-w-[640px]">
        {[
          {
            title: "Knowledge",
            description: "E.g., 'How does Joule work?' or 'What is...'",
            question: "How does Joule work?",
            icon: <IdeaIcon className="size-4" />,
          },
          {
            title: "Strategies",
            description: "E.g., 'Invest $100 with no risk for 15% r...'",
            question: "Invest $100 with no risk for 15% return",
            icon: <StrategyIcon className="size-4" />,
          },
          {
            title: "Markets",
            description: "E.g., 'Show me APT price' or 'What's ETH...'",
            question: "Show me APT price",
            icon: <MarketIcon className="size-4" />,
          },
          {
            title: "Lend",
            description: "E.g., 'Lend $100 in APT with 3x leverag...'",
            question: "Lend $100 in APT with 3x leverage",
            icon: <LendIcon className="size-4" />,
          },
        ].map((item) => (
          <div
            key={item.title}
            onClick={() => setInput(item.question)}
            className="px-4 py-3 rounded-xl border border-[#EEEEEE] bg-white hover:bg-[#F9FAFB] transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2 text-sm font-bold text-[#363853]">
              <span>{item.icon}</span> {item.title}
            </div>
            <p className="text-[12px] font-medium text-[#76767F] mt-1">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
