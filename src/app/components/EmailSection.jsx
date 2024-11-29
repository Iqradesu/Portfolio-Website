'use client';
import React from 'react';
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowUpLong } from "react-icons/fa6";
import { animateScroll as scroll } from "react-scroll";

export default function EmailSection() {
   const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500, // Animation duration in milliseconds
      smooth: "easeInOutQuad", // Easing function for smooth scrolling
    });
  };
  return (
    <section id="Contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2 '></div>
  <div className='z-10'>
    <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
    <p className="text-[#ADB7BE] mb-4 max-w-md">
      {" "}
      I'm currently looking for new opportunities. My inbox is always open.
      if you have a question, I'll try my best to get back to you!
    </p>
    <div className="socials flex flex-row gap-3">
      <Link href="https://github.com/Iqradesu">
        <Image src={GithubIcon} alt="Github Icon" className='hover:opacity-80' />
      </Link>
      <Link href="https://www.linkedin.com/in/iqra-ghaffar-5613922b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
        <Image src={LinkedinIcon} alt="LinkedIn Icon" className='hover:opacity-80'/>
      </Link>
    </div>
  </div>
  <div>
    <form className="flex flex-col">
      <div className="mb-6">
        <label
          htmlFor="email"
          className="text-white block text-sm font-medium mb-2"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          required
          className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          placeholder="jacob@gmail.com"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="subject"
          className="text-white block text-sm font-medium mb-2"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          required
          className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          placeholder="just saying hi"
        />
      </div>
      <div className='mb-6'>
        <label
        htmlFor='message'
        className='text-white block text-sm mb-2 font-medium'
        >
          message
        </label>
        <textarea
        name='message'
        id='message'
        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
        placeholder='Lets talk about...'
        />
      </div>
        <button
      type='submit'
      className='bg-purple-700 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded -lg w-full'>Send Message</button>
    </form>
  </div>
  <button
        onClick={scrollToTop}
        className="absolute bottom-0 right-4 bg-purple-700 text-white rounded-full p-4 shadow-lg hover:bg-purple-600 transition"
      >
        <FaArrowUpLong size={20} />
      </button>
</section>
  )
}
