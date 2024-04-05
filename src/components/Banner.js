import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { useNavigate } from "react-router-dom";

export default function Banner() {
    const navigate = useNavigate();
    const handleClickExplore = () => {
        navigate("/login")
    }
    const handleClickSingup = () => {
        navigate("/signup")
    }
    const words = [
        {
            text: "Welcome ",
            className: "text-red-200 dark:text-blue-500 text-3xl lg:text-4xl xl:text-5xl",
        },
        {
            text: "To ",
            className: "text-red-200 dark:text-blue-500 text-3xl lg:text-4xl xl:text-5xl",
        },
        {
            text: "The ",
            className: "text-red-200 dark:text-blue-500 text-3xl lg:text-4xl xl:text-5xl",
        },
        {
            text: "AweSome ",
            className: "text-pink-500 dark:text-blue-500 text-3xl lg:text-4xl xl:text-5xl",
        },
        {
            text: "iNoteBook.",
            className: "text-blue-500 dark:text-blue-500 text-3xl lg:text-4xl xl:text-5xl",
        },
    ];
    return (
        <div className="h-[100vh] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md italic">
            <div className="w-full absolute inset-0 h-screen">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>
            <div className="flex flex-col items-center justify-center">
                <TypewriterEffectSmooth words={words} />
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 z-50">
                    <button onClick={handleClickExplore} className="text-2xl w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white cursor-pointer italic">
                        Explore Now
                    </button>
                    <button onClick={handleClickSingup} className="w-40 h-10 rounded-xl bg-red-200 text-black border border-black  text-xl cursor-pointer italic">
                        Signup
                    </button>
                </div>
            </div>
        </div>
    );
}
