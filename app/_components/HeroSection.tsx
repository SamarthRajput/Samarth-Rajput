import { FlipWordsDemo } from "./FlipWordsDemo";

export default function HeroSection(){
    return <div className="h-[50rem] w-full bg-black bg-grid-green-800/[0.2] relative flex items-center justify-center flex-col">
        <div className="flex items-center justify-center flex-col">
            <FlipWordsDemo/>
            <p className="text-base sm:text-xl text-center text-white">
                <span className="text-green-500">I'm Samarth Rajput</span>
                , Full Stack Developer building Websites 
            </p>
        </div>
    </div>
}