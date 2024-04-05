import { Link } from "react-router-dom";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Btn from "./Btn";

export default function About() {
  // const word1 = ``;
  return (
    <div className="bg-[#112242] dark min-h-screen">
      <div className='w-full h-full bg-[#112e42] px-[2rem] sm:px-[8rem] flex flex-col items-center justify-center'>
        <h2 className="text-pink-300 text-3xl sm:text-5xl font-bold italic p-16">Welcome to i-World!</h2>
        <TextGenerateEffect words="we believe in the power of organization and simplicity. Our mission is to provide you with a seamless platform to capture, organize, and access your notes effortlessly. Whether you're a student, professional, or someone who simply loves to jot down their thoughts, i-World is here to enhance your note-taking experience.we envision a world where everyone has the tools they need to organize their thoughts, ideas, and inspirations. We're committed to continuously innovating and improving our platform to better serve our users' needs.Ready to take your note-taking experience to the next level? Sign up for i-World today and join the thousands of users who have already discovered the power of organized note-taking. Whether you're a student, professional, or creative thinker, i-World is your go-to destination for all things notes  .Have questions or feedback? We'd love to hear from you! Get in touch with our friendly support team at           guddugauravpp25@yahoo.co.uk        and we'll be happy to assist you.; Thank you for choosing i-World" />;
      </div>
      <div className="dark p-20">
        <Link to="/home"><Btn /></Link>
      </div>
    </div>
  )

}
