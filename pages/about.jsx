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
            <main className="h-screen flex justify-center">
                <section id="1" className="h-screen lg:w-[90%] xl:w-[85%] flex items-center justify-center font-serif">
                    <article className="w-8/12 md:w-9/12 h-[60%] md:h-[75%] border-2 border-zinc-600 grid md:grid-cols-2 place-items-center md:px-6 md:gap-6 lg:gap-10 z-10 backdrop-blur-sm backdrop-saturate-50 backdrop-brightness-125">
                        <div className="w-full hidden md:flex justify-center">
                            <Image className="relative z-20"
                            width={500}
                            height={400}
                            src="/images/profile-2.png" alt="about" />
                        </div>
                        <div className="lg:w-full h-[70%] md:h-5/6 md:pt-12 lg:pt-0 flex flex-col justify-center gap-6 md:gap-12 px-4 z-0">
                            <h2 className="text-white uppercase sm:text-sm md:text-2xl lg:text-4xl animate-fade-right animate-once animate-duration-[500ms] animate-ease-in">About me</h2>
                            <div className="lg:overflow-visible overflow-auto">
                                <p className="text-white sm:text-xs md:text-lg lg:text-xl xl:text-2xl animate-fade-right animate-once animate-duration-[500ms] animate-ease-in">
                                    A curious mind whit great passion and capacity to learn. Interested in understand the behavior of everything, to accomplish the better results.
                                    <br />
                                    Strong experience in front-end development using technologies such as React, Next.js, as well as back-end development using Node.js. I have also worked with databases like MongoDB and PostgreSQL to build full-stack applications.
                                </p>
                            </div>
                            <a href="Resume.pdf" download="Díaz Joaquín - Web Developer.pdf"><button className="text-white text-sm md:text-lg lg:text-xl bg-zinc-800 font-bold py-2 w-[100%] lg:w-[90%] flex flex-row items-center justify-center gap-4 rounded-lg border-2 animate-fade-down animate-once animate-duration-[700ms] animate-delay-300 animate-ease-in hover:bg-zinc-700 font-sans">Download Resume <BsFileEarmarkArrowDown className="text-xl md:text-2xl text-teal-400"/></button></a>
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