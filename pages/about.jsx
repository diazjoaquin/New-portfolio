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
            <div className="absolute top-0 w-[100%] h-[100%] sm:h-[57%] bg-teal-600 origin-bottom-left skew-y-[-26deg]"></div>
            <Nav/>
            <Sidebar/>
            <main className="h-screen">
                <section id="1" className="h-screen flex items-center justify-center font-serif">
                    <article className="w-9/12 h-4/6 border-2 border-zinc-600 grid grid-cols-2 place-items-center px-6 gap-2 z-10 backdrop-blur-sm backdrop-saturate-50 backdrop-brightness-125">
                        <div className="w-full">
                            <Image className=""
                            width={500}
                            height={400}
                            src="/images/profile.png" alt="about" />
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