import { FlipWords } from "@/components/ui/flip-words";

export default function Home() {
  return (
    <div className="h-full w-full bg-black text-red-200">
      <div className="h-[50rem] w-full bg-black bg-grid-white/[0.2] relative flex items-center justify-center ">
          <FlipWordsDemo />
      </div>
    </div>
  );
}


export function FlipWordsDemo() {
  const words = ["better", "cute", "beautiful", "modern", "responsive"];
 
  return (
    <div className="h-[50rem] flex justify-center items-center px-4">
      <div className="text-6xl mx-auto font-normal text-white">
        Building
        <FlipWords words={words} /> <br />
        websites in the world
      </div>
    </div>
  );
}
