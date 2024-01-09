import Image from "next/image";
import { BsFileEarmarkArrowDown } from 'react-icons/bs';


export default function About () {
    return (
        <section id="about" className="h-5/6 lg:h-3/6 xl:h-4/6 relative bg-zinc-900 w-screen">
            <main className="flex h-full justify-center">
                <section className="lg:w-9/12 h-full flex items-center justify-center font-serif">
                    <article className="w-8/12 md:w-9/12 h-full md:h-[75%] flex place-items-center md:px-6 md:gap-6 lg:gap-10 z-10">
                        <div className="lg:w-full h-[70%] md:h-5/6 md:pt-12 lg:pt-0 flex flex-col justify-center gap-6 md:gap-12 px-4 z-0">
                            <h2 className="text-teal-400 font-bold font-sans uppercase sm:text-sm md:text-2xl lg:text-4xl animate-fade-right animate-once animate-duration-[500ms] animate-ease-in">About me</h2>
                            <div className="lg:overflow-visible overflow-auto">
                                <p className="text-white text-justify font-sans sm:text-xs md:text-lg lg:text-xl xl:text-2xl animate-fade-right animate-once animate-duration-[500ms] animate-ease-in">
                                    A curious mind whit great passion and capacity to learn. Interested in understand the behavior of everything, to accomplish the better results.
                                    <br />
                                    Strong experience in <span className="font-bold">Front-End Development</span> using technologies such as <span className="font-bold text-teal-400">React, Next.js</span>, as well as <span className="font-bold">Back-End Development</span> using <span className="font-bold text-teal-400">Node.js</span>. I have also worked with databases like <span className="text-teal-400 font-bold">MongoDB and PostgreSQL</span> to build full-stack applications.
                                </p>
                            </div>
                            <a className="flex items-center justify-center" href="Resume.pdf" download="Díaz Joaquín - Web Developer.pdf"><button className="text-white text-sm md:text-lg lg:text-xl bg-zinc-800 font-bold py-2 w-full lg:w-[50%] flex flex-row items-center justify-center gap-4 rounded-lg border-2 animate-fade-down animate-once animate-duration-[700ms] animate-delay-300 animate-ease-in hover:bg-zinc-700 font-sans">Download Resume <BsFileEarmarkArrowDown className="text-xl md:text-2xl text-teal-400"/></button></a>
                        </div>
                    </article>
                </section>
            </main> 
        </section>
    );
}