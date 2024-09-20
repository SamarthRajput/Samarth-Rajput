import { FlipWords } from "@/components/ui/flip-words";

export function FlipWordsDemo() {
    const words = ["better", "cute", "beautiful", "modern", "responsive"];
   
    return (
    <div className=" flex justify-center items-center px-4">
        <div className="text-6xl mx-auto font-normal text-white z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          Building
          <FlipWords words={words} /> <br />
          websites on the Internet
        </div>
    </div>
    );
  }
  