"use client";
import React from 'react'
import ProjectCard from './ProjectCard'

 const projectData =[
    {
        id: 1,
        title:"Color flipper",
        description:"Generates random hex color codes",
        image:"/images/projects/colorflipper.jpg",
        gitUrl:"https://github.com/Iqradesu/color-flipper.git",
        previewUrl: "https://color-flipper-rust.vercel.app/hex.html"
    },
    {
        id: 2,
        title:"AniSphere",
        description:"A sleek anime-themed web application",
        image:"/images/projects/Anisphere.jpg",
        gitUrl:"https://github.com/Iqradesu/AniSphere.git",
        previewUrl: "https://anisphere-iqrz.netlify.app/"
    },
    {
        id: 3,
        title:"Menu filter",
        description:"filters out specific menu items",
        image:"/images/projects/menu.jpg",
        gitUrl:"https://github.com/Iqradesu/Menu-filter",
        previewUrl: "https://menu-filter-iqra.vercel.app/"
    },
    {
        id: 4,
        title:"Resume Builder",
        description:"An app that helps in creating your own resume",
        image:"/images/projects/ResumeBuilder.jpg",
        gitUrl:"https://github.com/Iqradesu/hackathon-milestones.git",
        previewUrl: "https://hackathon-milestones-lz51.vercel.app/"
    },
    {
        id: 5,
        title:"Reviews",
        description:"Simple product reviews.",
        image:"/images/projects/reviewss.jpg",
        gitUrl:"https://github.com/Iqradesu/Reviews.git",
        previewUrl: "https://reviews-seven-mu.vercel.app/"
    }
 ]

const ProjectSection = () => {
    return (
        <section><h2 id='projects' className='text-center text-4xl font-bold text-white mt-4 mb-8'>My Projects</h2>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>{projectData.map((project)=>(<ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} tags={project} gitUrl={project.gitUrl} previewUrl={project.previewUrl}/>))}</div>
        </section>
    )
}

export default ProjectSection
