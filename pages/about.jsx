import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";
import Testimonials from "@/components/Testimonials";
import { BsFileEarmarkArrowDown } from 'react-icons/bs';
import Image from "next/image";

const About = () => {

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
    }


    return (
        <section className="relative bg-zinc-900 h-screen">
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0" viewBox="0 0 1440 320">
                <path fill="#14b8a6" fill-opacity="1" d="M0,224L80,234.7C160,245,320,267,480,229.3C640,192,800,96,960,69.3C1120,43,1280,85,1360,106.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
            <Nav/>
            <Sidebar/>
            <main className="h-screen">
                <section id="1" className="h-screen flex items-center justify-center font-serif">
                    <article className="w-9/12 h-4/6 border-2 border-zinc-600 grid grid-cols-2 place-items-center px-6 gap-2 z-10 backdrop-blur-sm backdrop-saturate-50 backdrop-brightness-125">
                        <div className="w-full">
                            <svg viewBox="15 0 200 200" className="absolute z-10" width={550} xmlns="http://www.w3.org/2000/svg">
                                <path fill="#F1C21B" d="M57.6,-67.9C73.9,-55.1,85.6,-36.1,85.2,-18.1C84.7,0,72.1,17.2,60.6,33.2C49.2,49.1,38.9,64,24.6,70.4C10.3,76.8,-8.2,74.9,-24.5,68.5C-40.8,62,-55,51,-61.1,36.9C-67.3,22.9,-65.4,5.9,-64.2,-13.2C-63.1,-32.2,-62.8,-53.3,-52.2,-67.1C-41.6,-80.9,-20.8,-87.4,0,-87.4C20.7,-87.3,41.4,-80.7,57.6,-67.9Z" transform="translate(100 100)" />
                            </svg>
                            <Image className="relative z-20"
                            width={500}
                            height={400}
                            src="/images/profile-2.png" alt="about" />
                        </div>
                        <div className="lg:w-full sm:h-5/6 sm:pt-12 lg:pt-0 flex flex-col justify-center gap-12 z-0">
                            <h2 className="text-white uppercase text-4xl animate-fade-right animate-once animate-duration-[500ms] animate-ease-in">About me</h2>
                            <div className="lg:overflow-visible overflow-auto">
                                <p className="text-white text-xl animate-fade-right animate-once animate-duration-[500ms] animate-ease-in">
                                    A curious mind whit great passion and capacity to learn. Interested in understand the behavior of everything, to accomplish the better results.
                                    <br />
                                    Strong experience in front-end development using technologies such as React, Next.js, as well as back-end development using Node.js. I have also worked with databases like MongoDB and PostgreSQL to build full-stack applications.
                                </p>
                            </div>
                            <a href="Resume.pdf" download="Díaz Joaquín - Web Developer.pdf"><button className="text-white text-xl bg-zinc-800 font-bold py-2 lg:w-[50%] flex flex-row items-center justify-center gap-4 rounded-lg border-2 animate-fade-down animate-once animate-duration-[700ms] animate-delay-300 animate-ease-in hover:bg-zinc-700 font-sans">Download Resume <BsFileEarmarkArrowDown className="text-2xl text-teal-400"/></button></a>
                        </div>
                    </article>
                    <button onClick={() => handleChangePage()} className="hidden lg:flex fixed bottom-20 right-20 text-white text-8xl font-bold animate-fade-left animate-duration-[800ms] animate-ease-in font-sans"><span className="animate-bounce animate-infinite animate-duration-[1200ms] animate-ease-in">2</span></button>
                </section>
                <section id="2" className="hidden h-full flex items-center justify-center">
                    <Testimonials/>
                    <button onClick={() => handleChangePage()} className="hidden lg:flex fixed bottom-20 left-20 text-white text-8xl font-bold animate-fade-right animate-duration-[800ms] animate-ease-in font-sans"><span className="animate-bounce animate-infinite animate-duration-[1200ms] animate-ease-in">1</span></button>
                </section>
            </main> 
        </section>
    );
};

export default About;