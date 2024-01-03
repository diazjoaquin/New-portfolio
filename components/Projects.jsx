import { projects } from "@/assets/projects";
import { BsArrowUpRight } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";


export default function Projects () {

    return (
        <section id="projects" className="relative bg-zinc-900 h-screen w-screen">
            <main className="flex justify-center items-center w-full h-full font-sans">
                <div className="grid grid-cols-3 gap-8 lg:w-9/12 lg:h-3/6">
                    {
                        projects.map((project) => {
                            return (
                              <div className="z-20 h-full w-full px-1 pt-2 rounded-xl bg-zinc-100" id="slide" key={project.id}>
                                <div className="relative rounded-xl overflow-hidden hover:scale-110 transition animate-fade-left animate-fill-both">
                                    <img src={project.img} className="w-full lg:min-h-[300px] h-full object-cover object-center grayscale hover:grayscale-0" alt="project"/>
                                    <div className="absolute bg-[#00000080] opacity-0 text-white w-full bottom-[-40px] px-10 text-center text-sm ease-in duration-300 hover:opacity-100 hover:bottom-0">
                                        <p className="pt-6">
                                            {project.description}
                                        </p>
                                        <span className="flex flex-row text-4xl justify-center gap-6 py-6">
                                            <a href={project.github}><AiFillGithub className="hover:text-teal-300 hover:scale-125"/></a>
                                            <a href={project.url}><BsArrowUpRight className="hover:text-teal-300 hover:scale-125"/></a>
                                        </span>
                                    </div>
                                </div>
                                <div className=" text-white text-md z-10 mx-2 mb-6">
                                    <h4 className="text-lg text-zinc-800 font-bold py-2">Technologies used on this project:</h4>
                                    <div className="flex flex-wrap items-center">
                                        {project.technologies.map((technologie) => {
                                            return (
                                            <span id={technologie} key={technologie} className="border-2 bg-teal-600 px-2 rounded-md py-1 hover:cursor-pointer hover:bg-teal-500 animate-fade-down animate-once animate-duration-[600ms] animate-ease-in transition ease-in-out delay-50">
                                                {technologie}
                                            </span>
                                            );
                                        })}
                                    </div>
                                </div>
                              </div>  
                            );
                        })
                    }
                </div>
            </main>
        </section>
    );
};