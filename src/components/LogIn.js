import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "../utils/cn";
import { BackgroundBeams } from "./ui/background-beams";
import { SparklesCore } from "./ui/sparkles";
import {
    IconBrandGithub,
    IconBrandGoogle,
    // IconBrandOnlyfans,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted");
        const response = await fetch("http://localhost:4000/api/auth/login", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            //Save the Auth token and redirect
            localStorage.setItem('token', json.authToken);
            navigate("/home");
        }
        else {
            console.log("Invalid Credentials", "danger")
            alert("Invalid Credentials", "danger")
        }
    };

    const onChangeData = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div className="rounded-md bg-neutral-950 relative antialiased flex items-center justify-center dark min-h-screen bg-black/[0.96] bg-grid-white/[0.02] italic">
            <div className="flex lg:items-center lg:justify-between lg:gap-5 flex-col lg:flex-row">
                {/* Left side */}
                <div className="w-full h-[60vh] lg:h-[100vh] flex flex-col items-center justify-center overflow-hidden rounded-md z-50">
                    <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
                        iNoteBook
                    </h1>
                    <div className="w-[80vw] sm:w-[40rem] h-40 relative">
                        {/* Gradients */}
                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                        {/* Core component */}
                        <SparklesCore
                            background="transparent"
                            minSize={0.4}
                            maxSize={1}
                            particleDensity={1200}
                            className="w-full h-full"
                            particleColor="#FFFFFF"
                        />

                        {/* Radial Gradient to prevent sharp edges */}
                        <div className="absolute inset-0 w-full h-full bg-black rounded-2xl [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>

                    </div>
                </div>
                {/* Right side */}
                <div className="max-w-md w-full mb-10 lg:mb-0 mx-auto rounded-2xl p-4 md:p-8 shadow-input bg-transparent z-50 border-red-200 border-2">
                    <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                        iNoteBook
                    </h2>
                    <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                        if You Have not An Account in iNoteBook please Create An Account <span onClick={() => navigate("/signup")} className="underline text-blue-400 cursor-pointer">Sign Up</span>
                    </p>

                    <form className="my-8" onSubmit={handleSubmit}>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="email">Email Address</Label>
                            <Input value={credentials.email} onChange={onChangeData} name="email" id="email" placeholder="Gaurav@email.com" type="email" />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="password">Password</Label>
                            <Input value={credentials.password} onChange={onChangeData} name="password" id="password" placeholder="••••••••" type="password" />
                        </LabelInputContainer>
                        <button
                            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                            type="submit"
                        >
                            Sign in &rarr;
                            <BottomGradient />
                        </button>

                        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

                        <div className="flex flex-col space-y-4">
                            <button
                                className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                                type="submit"
                            >
                                <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                    GitHub
                                </span>
                                <BottomGradient />
                            </button>
                            <button
                                className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                                type="submit"
                            >
                                <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                    Google
                                </span>
                                <BottomGradient />
                            </button>
                            {/* <button
                            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                            type="submit"
                        >
                            <IconBrandOnlyfans className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                OnlyFans
                            </span>
                            <BottomGradient />
                        </button> */}
                        </div>
                    </form>
                </div>
            </div>
            <BackgroundBeams />
        </div>

    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
