import React, { useState } from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import Btn from "./Btn";
import { Link } from "react-router-dom"

export default function Contact() {
    const host = "https://iworld-backend.onrender.com";

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState();
    const [fieldRequired, setFieldRequired] = useState(false);

    const addContact = async (fullName, email, number) => {
        const response = await fetch(`${host}/api/contact/individual`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ fullName, email, number }) // body data type must match "Content-Type" header
        });
        const contact = await response.json(); // parses JSON response into native JavaScript objects
        console.log(contact)
    }
    const onSubmitHandle = (e) => {
        e.preventDefault();
        if (fullName === "" || email === "" || number === "") {
            setFieldRequired(!fieldRequired);
        } else {
            addContact(fullName, email, number)
            console.log(fullName, email, number);
            setFullName("")
            setEmail("")
            setNumber("")
        }
        setTimeout(() => { setFieldRequired(false) }, [2000])
    }
    return (
        <div className="bg-[#112242] dark">
            <div className="bg-[#112242] ">
                <LampContainer>
                    <motion.h1
                        initial={{ opacity: 0.5, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-5xl font-medium tracking-tight text-transparent md:text-7xl"
                    >
                        Keep In Touch <br /> <span className="italic">it's Gaurav</span>
                    </motion.h1>
                </LampContainer>
            </div>
            <div>
                <div className="relative flex items-top justify-center min-h-[700px] bg-cyan-800 sm:items-center sm:pt-0">
                    <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="p-6 mr-2 bg-cyan-800 sm:rounded-lg">
                                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-300">
                                        Get in touch:
                                    </h1>
                                    <p className="text-normal text-lg sm:text-xl font-medium text-slate-300 mt-2">
                                        Fill in the form to start a conversation
                                    </p>

                                    <div className="flex items-center mt-8 text-slate-300">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            viewBox="0 0 24 24"
                                            className="w-8 h-8 text-slate-300"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                        <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                            Delhi,Laxmi Nagar @Bihar Khagaria
                                        </div>
                                    </div>

                                    <div className="flex items-center mt-4 text-slate-300">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            viewBox="0 0 24 24"
                                            className="w-8 h-8 text-slate-300"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>
                                        <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                            +91 9123109389 & +91 8051596653
                                        </div>
                                    </div>

                                    <div className="flex items-center mt-2 text-slate-300">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            viewBox="0 0 24 24"
                                            className="w-8 h-8 text-slate-300"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                        <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                            rajaryanitshot@gmail.com
                                        </div>
                                    </div>
                                </div>

                                <form className="p-6 flex flex-col justify-center">
                                    <div className="flex flex-col">
                                        <label htmlFor="name" className="hidden">
                                            Full Name
                                        </label>
                                        <input
                                            type="name"
                                            name="name"
                                            id="name"
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                            placeholder="Full Name"
                                            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                        />
                                    </div>

                                    <div className="flex flex-col mt-2">
                                        <label htmlFor="email" className="hidden">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Email"
                                            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                        />
                                    </div>

                                    <div className="flex flex-col mt-2">
                                        <label htmlFor="tel" className="hidden">
                                            Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="tel"
                                            id="tel"
                                            value={number}
                                            onChange={(e) => setNumber(e.target.value)}
                                            placeholder="Telephone Number"
                                            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                        />
                                    </div>

                                    {
                                        fieldRequired &&
                                        <div>
                                            <h2 className='text-pink-500 font-serif m-2'>All Field Required</h2>
                                        </div>
                                    }

                                    <button
                                        type="submit"
                                        onClick={onSubmitHandle}
                                        className="md:w-32 bg-[#112242] hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-[#112242d7] transition ease-in-out duration-300"
                                    >
                                        Submit
                                    </button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dark p-20">
                    <Link to="/home"><Btn /></Link>
                </div>
            </div>
        </div>
    );
}
