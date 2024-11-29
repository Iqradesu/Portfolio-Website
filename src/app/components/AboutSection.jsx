"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title:"skills",
        id:"skills",
        content:(
        <ul className='list-disc pl-2'>
            <li>HTML</li>
            <li>CSS</li>
            <li>Tailwind CSS</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>Nextjs</li>
        </ul>
        ),
    },
    {
        title:"Education",
        id:"education",
        content:(
        <ul className='list-disc pl-2'>
            <h4  className="text-[#ADB7BE] font-semibold text-lg">Aspiring Web Developer -</h4>
            <li className='mb-4'>currently working on JavaScript, TypeScript, HTML, CSS, and Tailwind CSS
                & Next.js
            </li>
            <h4  className="text-[#ADB7BE] font-semibold text-lg" >Active Projects-Based Learning -</h4>
            <li>Building a portfolio website using Next.js and Tailwind css</li>
            <li>Practicing database and authentication integration with Firebase</li>
        </ul>
        ),
    },
    {
        title:"Certifications",
        id:"certifications",
        content:(
            <ul className='list-disc pl-2'>
                <li>Actively building skills in JavaScript, CSS, HTML,Firebase & Next.js</li>
                <li>Exploring certifications to further my understanding in full-stack development</li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab ] = useState("skills");
    const [isPending, starTransition] = useTransition();

    const handleTabChange = (id) => {
        starTransition(() =>{
            setTab(id);
        })
    }
    return (
    <section className="text-white" id="about">
        <div className="md:grid md:grid-cols-2 gap-8 py-8 px-4 xl:gap-16 sm:py-16 ">
            <Image src="/images/about-image.png" alt='laptop image' width={500} height={500} />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                <p className="text-base lg:text-lg">
                I am a front end web developer with a passion for creating
                interactive and responsive web applications. I have experience
                working with JavaScript, Nextjs, HTML, CSS, TypeScript & Tailwind CSS. I am a quick learner and I am always
                looking to expand my knowledge and skill set. I am a team player and
                I am excited to work with others to create amazing applications.
                </p>
                <div className="flex flex-row justify-start mt-8">
                <TabButton
                    selectTab={() => handleTabChange("skills")}
                    active={tab === "skills"}
                >
                    {" "}
                    Skills{" "}
                </TabButton>
                <TabButton
                    selectTab={() => handleTabChange("education")}
                    active={tab === "education"}
                >
                    {" "}
                    Education{" "}
                </TabButton>
                <TabButton
                    selectTab={() => handleTabChange("certifications")}
                    active={tab === "certifications"}
                >
                    {" "}
                    Certifications{" "}
                </TabButton>
                </div>
                <div className="mt-8">
                {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
    </section>
    );
}

export default AboutSection
