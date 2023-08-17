import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";
// import { useState, useEffect } from "react";
// import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import Services from "@/components/Services";

const Portfolio = () => {

    // useEffect(() => {
    //     projects();
    // }, [])

    // const projects = () => {
    //    return document.querySelectorAll('#slide');
    // } 

    // // const projects = document.querySelectorAll('#slide');
    // console.log(projects);
    
    // const slides = projects();
    // console.log(slides.length);

    // const [selectedIndex, setSelectedIndex] = useState(0);
    // const [selectedSlide, setSelectedSlide] = useState(slides?.[0]);

    // const handleNext = () => {   

    //     const nextIndex = selectedIndex < slides.length - 1 ? selectedIndex + 1 : 0;
    //     console.log(nextIndex);
    //     setSelectedSlide(slides[nextIndex]);
    //     setSelectedIndex(nextIndex);
    // };

    // const handlePrevious = () => {
        
    //     const prevIndex = selectedIndex > 0 ? selectedIndex - 1 : slides.length - 1;
    //     console.log(prevIndex);
    //     setSelectedSlide(slides[prevIndex]);
    //     setSelectedIndex(prevIndex);
    //     console.log(selectedSlide);
    // };

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
                {/* <MdKeyboardArrowLeft onClick={handlePrevious} className="text-white text-6xl fixed left-40 hover:cursor-pointer hover:scale-125 hover:opacity-1 ease-in-out delay-150"/> */}
                <div className="grid gap-12 lg:w-[50%] lg:h-[70%] overflow-y-auto overflow-x-hidden">
                    <div id="slide" className="">
                        <div className="relative rounded-xl overflow-hidden hover:scale-110 transition">
                            <img src="/images/netflix.png" className="w-full h-full object-cover object-center grayscale hover:grayscale-0" alt="netflix" />
                            <div className="absolute bg-[#00000080] opacity-0 text-white w-full bottom-[-40px] px-10 text-center text-sm ease-in duration-300 hover:opacity-100 hover:bottom-0">
                                <p className="pt-6">
                                    A Netflix clone (currently on development). 
                                    The primary goal was to create a user experience similar to Netflix, enabling users to sign up,
                                    search for and play movies and TV shows.
                                </p>
                                <span className="flex flex-row text-4xl justify-center gap-6 py-6">
                                    <a href="https://github.com/diazjoaquin/Netflix" className=""><AiFillGithub/></a>
                                    <a href=""><BsArrowUpRight/></a>
                                </span>
                            </div>
                        </div>
                        <div className="h-[20%] my-6 text-white text-md">
                            <h4 className="text-lg font-bold py-2">Technologies used on this project:</h4>
                            <div className="flex flex-row gap-1">
                                <span className="border-2 bg-zinc-700 px-4 rounded-md py-1 hover:cursor-pointer hover:bg-zinc-600 animate-fade-down animate-once animate-duration-[600ms] animate-ease-in">MongoDB</span>
                                <span className="border-2 bg-zinc-700 px-4 rounded-md py-1 hover:cursor-pointer hover:bg-zinc-600 animate-fade-down animate-once animate-duration-[800ms] animate-ease-in">Typescript</span>
                                <span className="border-2 bg-zinc-700 px-4 rounded-md py-1 hover:cursor-pointer hover:bg-zinc-600 animate-fade-down animate-once animate-duration-[1000ms] animate-ease-in">Next.js</span>
                                <span className="border-2 bg-zinc-700 px-4 rounded-md py-1 hover:cursor-pointer hover:bg-zinc-600 animate-fade-down animate-once animate-duration-[1200ms] animate-ease-in">Tailwindcss</span>
                            </div>
                        </div>
                    </div>

                    <div id="slide" className="">
                        <div className="relative rounded-xl overflow-hidden hover:scale-110 transition">
                            <img src="/images/pokemon.png" className="w-full h-full object-cover object-center grayscale hover:grayscale-0" alt="pokemon" />
                            <div className="absolute bg-[#00000080] opacity-0 text-white w-full bottom-[-40px] px-10 text-center text-sm ease-in duration-300 hover:opacity-100 hover:bottom-0">
                                <p className="pt-6">
                                    Welcome to My Pokedex, the ultimate web page that allows you to embark on a thrilling journey to discover your favorite Pokémon and unleash your creativity by designing your very own Pokémon. Whether you're a long-time Pokémon fan or just starting your adventure, My Pokedex is here to cater to your passion for these magical creatures.
                                </p>
                                <span className="flex flex-row text-4xl justify-center gap-6 py-6">
                                    <a href="https://github.com/diazjoaquin/IP-Pokemon" className=""><AiFillGithub/></a>
                                    <a href="https://my-pokedex-ip.web.app/"><BsArrowUpRight/></a>
                                </span>
                            </div>
                        </div>
                        <div className="h-[20%] my-6 text-white text-md">
                            <h4 className="text-lg font-bold py-2">Technologies used on this project:</h4>
                            <div className="flex flex-row gap-1">
                                <span className="border-2 bg-zinc-700 px-4 rounded-md py-1 hover:cursor-pointer hover:bg-zinc-600 animate-fade-down animate-once animate-duration-[600ms] animate-ease-in">React.js</span>
                                <span className="border-2 bg-zinc-700 px-4 rounded-md py-1 hover:cursor-pointer hover:bg-zinc-600 animate-fade-down animate-once animate-duration-[800ms] animate-ease-in">Redux</span>
                                <span className="border-2 bg-zinc-700 px-4 rounded-md py-1 hover:cursor-pointer hover:bg-zinc-600 animate-fade-down animate-once animate-duration-[1000ms] animate-ease-in">Node.js</span>
                                <span className="border-2 bg-zinc-700 px-4 rounded-md py-1 hover:cursor-pointer hover:bg-zinc-600 animate-fade-down animate-once animate-duration-[1200ms] animate-ease-in">PostgreSQL</span>
                                <span className="border-2 bg-zinc-700 px-4 rounded-md py-1 hover:cursor-pointer hover:bg-zinc-600 animate-fade-down animate-once animate-duration-[1400ms] animate-ease-in">CSS & HTML</span>
                                <span className="border-2 bg-zinc-700 px-4 rounded-md py-1 hover:cursor-pointer hover:bg-zinc-600 animate-fade-down animate-once animate-duration-[1600ms] animate-ease-in">Express.js</span>
                            </div>
                        </div>
                    </div>
                    
                    <div id="slide" className="">
                        <div className="relative rounded-xl overflow-hidden hover:scale-110 transition">
                            <img src="/images/easylearning.png" className="w-full h-full object-cover object-center grayscale hover:grayscale-0" alt="easylearning" />
                            <div className="absolute bg-[#00000080] opacity-0 text-white w-full bottom-[-40px] px-10 text-center text-sm ease-in duration-300 hover:opacity-100 hover:bottom-0">
                                <p className="pt-6">
                                    EasyLearning is a cutting-edge e-learning web platform that aims to make learning convenient, accessible, and enjoyable for individuals of all ages and backgrounds. It offers a vast array of courses, from academic subjects to professional skills and hobbies, providing a one-stop destination for learners to acquire knowledge, grow their skills, and excel in their chosen fields.
                                </p>
                                <span className="flex flex-row text-4xl justify-center gap-6 py-6">
                                    <a href="https://github.com/diazjoaquin/EasyLearning-FP" className=""><AiFillGithub/></a>
                                    <a href="https://easylearning-fp.web.app/"><BsArrowUpRight/></a>
                                </span>
                            </div>
                        </div>
                        <div className="h-[20%] my-6 text-white text-md">
                            <h4 className="text-lg font-bold py-2">Technologies used on this project:</h4>
                            <div className="flex flex-row gap-1">
                                <span className="border-2 bg-zinc-700 px-4 rounded-md py-1 hover:cursor-pointer hover:bg-zinc-600 animate-fade-down animate-once animate-duration-[600ms] animate-ease-in">React.js</span>
                                <span className="border-2 bg-zinc-700 px-4 rounded-md py-1 hover:cursor-pointer hover:bg-zinc-600 animate-fade-down animate-once animate-duration-[800ms] animate-ease-in">Redux</span>
                                <span className="border-2 bg-zinc-700 px-4 rounded-md py-1 hover:cursor-pointer hover:bg-zinc-600 animate-fade-down animate-once animate-duration-[1000ms] animate-ease-in">Node.js</span>
                                <span className="border-2 bg-zinc-700 px-4 rounded-md py-1 hover:cursor-pointer hover:bg-zinc-600 animate-fade-down animate-once animate-duration-[1200ms] animate-ease-in">PostgreSQL</span>
                                <span className="border-2 bg-zinc-700 px-4 rounded-md py-1 hover:cursor-pointer hover:bg-zinc-600 animate-fade-down animate-once animate-duration-[1400ms] animate-ease-in">CSS & HTML</span>
                                <span className="border-2 bg-zinc-700 px-4 rounded-md py-1 hover:cursor-pointer hover:bg-zinc-600 animate-fade-down animate-once animate-duration-[1600ms] animate-ease-in">Express.js</span>
                                <span className="border-2 bg-zinc-700 px-4 rounded-md py-1 hover:cursor-pointer hover:bg-zinc-600 animate-fade-down animate-once animate-duration-[1800ms] animate-ease-in">Chakra UI</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <MdKeyboardArrowRight onClick={handleNext} className="text-white text-6xl fixed right-40 hover:cursor-pointer hover:scale-125 hover:opacity-1 ease-in-out delay-150"/> */}
                <button onClick={() => handleChangePage()} className="hidden lg:flex fixed bottom-20 right-20 text-white text-8xl font-bold animate-fade-left animate-duration-[800ms] animate-ease-in"><span className="animate-bounce animate-infinite animate-duration-[1200ms] animate-ease-in">2</span></button>
            </main>
            <section id="2" className="hidden flex h-full justify-center items-center w-full h-full">
                <Services/>
                <button onClick={() => handleChangePage()} className="hidden lg:flex fixed bottom-20 left-20 text-white text-8xl font-bold animate-fade-left animate-duration-[800ms] animate-ease-in font-sans"><span className="animate-bounce animate-infinite animate-duration-[1200ms] animate-ease-in">1</span></button>
            </section>
        </section>
    );
};

export default Portfolio;   