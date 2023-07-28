import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";
import { AiFillGithub } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Portfolio = () => {

    const handleNext = (e) => {
        
        e.preventDefault();

        let hidden = document.querySelector('#hidden');
        let active = document.querySelectorAll('#active');
        
        if (hidden) {
            hidden.classList.remove('hidden');
            hidden.id = 'active';
        };

        if (active && active.length > 1) {
        active[0].classList.toggle('hidden');
        active[0].id = 'hidden';
        };
    };

    const handlePrevious = (e) => {
        e.preventDefault();

        let hidden = document.querySelector('#hidden');
        let active = document.querySelectorAll('#active');

        if (hidden) {
            hidden.classList.remove('hidden');
            hidden.id = 'active';
        };

        if (active && active.length > 1) {
        active[1].classList.toggle('hidden');
        active[1].id = 'hidden';
        };
    };

    return (
        <section className="relative bg-zinc-900 h-full">
            <Nav/>
            <Sidebar/>
            <main className="flex h-full justify-center items-center w-full h-full">
                <MdKeyboardArrowLeft onClick={(e) => handlePrevious(e)} className="text-white text-6xl fixed left-40 hover:cursor-pointer hover:scale-125 hover:opacity-1 ease-in-out delay-150"/>
                <div className="grid grid-rows-1 gap-10 lg:w-[60%] lg:h-[60%]">
                    <div>
                        <div id="active" className="relative rounded-xl overflow-hidden">
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
                    <div id="hidden" className="hidden relative rounded-xl overflow-hidden">
                        <img src="/images/pokemon.png" className="w-full h-full object-cover object-center grayscale hover:grayscale-0" alt="pokemon" />
                        <div className="absolute bg-[#00000080] opacity-0 text-white w-full bottom-[-40px] px-10 text-center text-sm ease-in duration-300 hover:opacity-100 hover:bottom-0">
                            <p className="pt-6">
                                Web application based on a Pokémon topic where the user can search for their
                                favorite pokemons; it has features such as the creation of a personalized pokemon.
                            </p>
                            <span className="flex flex-row text-4xl justify-center gap-6 py-6">
                                <a href="https://github.com/diazjoaquin/IP-Pokemon" className=""><AiFillGithub/></a>
                                <a href="https://my-pokedex-ip.web.app/"><BsArrowUpRight/></a>
                            </span>
                        </div>
                    </div>
                    <div id="hidden" className="hidden relative rounded-xl overflow-hidden">
                        <img src="/images/easylearning.png" className="w-full h-full object-cover object-center grayscale hover:grayscale-0" alt="easylearning" />
                        <div className="absolute bg-[#00000080] opacity-0 text-white w-full bottom-[-40px] px-10 text-center text-sm ease-in duration-300 hover:opacity-100 hover:bottom-0">
                            <p className="pt-6">
                                Easylearning is a E-learning platform where the user can buy, create and sell their own courses.
                                The following technologies were used: JavaScript, React.js, Redux, Node.js,
                                PostgreSQL, Sequelize, Express.js, Chakra UI.
                            </p>
                            <span className="flex flex-row text-4xl justify-center gap-6 py-6">
                                <a href="https://github.com/diazjoaquin/EasyLearning-FP" className=""><AiFillGithub/></a>
                                <a href="https://easylearning-fp.web.app/"><BsArrowUpRight/></a>
                            </span>
                        </div>
                    </div>
                </div>
                <MdKeyboardArrowRight onClick={(e) => handleNext(e)} className="text-white text-6xl fixed right-40 hover:cursor-pointer hover:scale-125 hover:opacity-1 ease-in-out delay-150"/>
            </main>
        </section>
    );
};

export default Portfolio;   