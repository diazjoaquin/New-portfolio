import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";
import Testimonials from "@/components/Testimonials";
import { BsFileEarmarkArrowDown } from 'react-icons/bs';

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
            <Nav/>
            <Sidebar/>
            <main className="h-screen">
                <section id="1" className="h-screen grid place-items-center font-serif">
                    {/* <div className="w-5/12">
                        <img className="" src="images/about.JPG" alt="about" />
                    </div> */}
                    <div className="lg:h-[75%] lg:w-7/12 sm:h-4/5 sm:pt-12 lg:pt-0 flex flex-col gap-12 w-9/12 absolute z-0">
                        <h2 className="text-white uppercase text-4xl animate-fade-right animate-once animate-duration-[2000ms] animate-delay-500 animate-ease-in">About me</h2>
                        <div className="lg:overflow-visible overflow-auto">
                            <p className="text-white text-xl animate-fade-right animate-once animate-duration-[2000ms] animate-delay-500 animate-ease-in">
                                I've a curious mind, and great passion and capacity to learn, I'm interested in understand the behavior of everything, to accomplish the better results. I'm a person whit a lot of energy and initiative, and a great capacity to adapt to changes. Capable of perform effectively both in group enviroments and in individual enviroments.
                                I've strong experience in front-end development using technologies such as React, as well as back-end development using Node.js. I have also worked with databases like MongoDB and PostgreSQL to build full-stack applications.
                                As a Full Stack Web Developer, I am excited about the opportunity to work with a company that values innovation and creativity in technology, in wich I can improve my programming skills and knowledge.
                            </p>
                            <br />
                            <p className="text-white text-xl animate-fade-right animate-once animate-duration-[2000ms] animate-delay-500 animate-ease-in">
                                I am graduated from Henry Bootcamp as a Full Stack Web Developer. During the course, I learned and developed skills in technologies such as: Javascript, Typescript, React, Node.js, SQL, Express, and more. I am currently working on personal projects, in which I seek to improve my programming skills, as well as learn new technologies (such Next.js, Vue.js, and MongoDB), which allow me archieve the professional profile in that I want to develop myself in the future.
                            </p>
                        </div>
                        <a href="@/public/Díaz Joaquín - Full Stack Web Dev.pdf.pdf" download><button className="text-white text-xl bg-zinc-800 font-bold py-2 lg:w-[30%] flex flex-row items-center justify-center gap-4 rounded-2xl border-2 animate-fade-down animate-once animate-duration-[1000ms] animate-delay-300 animate-ease-in hover:bg-zinc-700 font-sans">Download Resume <BsFileEarmarkArrowDown className="text-2xl text-teal-400"/></button></a>
                    </div>
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