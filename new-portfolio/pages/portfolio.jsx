import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";
import { AiFillGithub } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import Services from "@/components/Services";
import { projects } from "@/assets/projects";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Portfolio = () => {

    const handleChangePage = () => {
        const firstPage = document.getElementById("1");
        const secondPage = document.getElementById("2");

        if (!firstPage.classList.contains("hidden")) {
            firstPage.classList.add("hidden");
            secondPage.classList.remove("hidden");
        } else {
            secondPage.classList.add("hidden");
            firstPage.classList.remove("hidden");
        }
    };

    return (
        <section className="relative bg-zinc-900 h-full">
            <Nav/>
            <Sidebar/>
            <main id="1" className="flex h-full justify-center items-center w-full h-full font-sans">
                <MdKeyboardArrowLeft className="text-white text-6xl fixed left-40 hover:cursor-pointer hover:scale-125 hover:opacity-1 ease-in-out delay-150"/>
                <div className="grid gap-12 lg:w-[50%] lg:h-[70%]">
                    {
                        projects.map((project) => {
                            return (
                              <div id={project.id}>
                                <div className="relative rounded-xl overflow-hidden hover:scale-110 transition">
                                    <img src={project.img} className="w-full h-full object-cover object-center grayscale hover:grayscale-0" alt="" />
                                    <div className="absolute bg-[#00000080] opacity-0 text-white w-full bottom-[-40px] px-10 text-center text-sm ease-in duration-300 hover:opacity-100 hover:bottom-0">
                                        <p className="pt-6">
                                            {project.description}
                                        </p>
                                        <span className="flex flex-row text-4xl justify-center gap-6 py-6">
                                            <a href={project.github}><AiFillGithub/></a>
                                            <a href={project.url}><BsArrowUpRight/></a>
                                        </span>
                                    </div>
                                </div>
                                <div className="h-[20%] my-6 text-white text-md">
                                    <h4 className="text-lg font-bold py-2">Technologies used on this project:</h4>
                                    <div className="flex flex-row gap-1">
                                        {project.technologies.map((technologie) => {
                                            return (
                                            <span className="border-2 bg-zinc-700 px-4 rounded-md py-1 hover:cursor-pointer hover:bg-zinc-600 animate-fade-down animate-once animate-duration-[600ms] animate-ease-in">
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
                <MdKeyboardArrowRight className="text-white text-6xl fixed right-40 hover:cursor-pointer hover:scale-125 hover:opacity-1 ease-in-out delay-150"/>
                <button onClick={() => handleChangePage()} className="hidden lg:flex fixed bottom-20 right-20 text-white text-8xl font-bold animate-fade-left animate-duration-[800ms] animate-ease-in font-sans"><span className="animate-bounce animate-infinite animate-duration-[1200ms] animate-ease-in">2</span></button>
            </main>
            <section id="2" className="hidden flex h-full justify-center items-center w-full h-full">
                <Services/>
                <button onClick={() => handleChangePage()} className="hidden lg:flex fixed bottom-20 left-20 text-white text-8xl font-bold animate-fade-right animate-duration-[800ms] animate-ease-in font-sans"><span className="animate-bounce animate-infinite animate-duration-[1200ms] animate-ease-in">1</span></button>
            </section>
        </section>
    );
};

export default Portfolio;   