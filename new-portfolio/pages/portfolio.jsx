import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";
import { AiFillGithub } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Portfolio = () => {

    


    return (
        <section className="relative bg-zinc-900 h-full rounded-e-full rounded-t-sm">
            <Nav/>
            <Sidebar/>
            <main className="flex h-full justify-center items-center w-full h-full">
                <MdKeyboardArrowLeft className="text-white text-6xl fixed left-20 hover:cursor-pointer hover:scale-125 hover:opacity-1 ease-in-out delay-150"/>
                <div className="grid lg:grid-cols-2 gap-10 w-[80%] lg:h-[50%]">
                    <div className="relative rounded-xl overflow-hidden">
                        <img src="/images/netflix.png" className="w-full h-full object-cover object-center grayscale hover:grayscale-0 hover:scale-110 ease-in duration-150" alt="" />
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
                    <div className="relative rounded-xl overflow-hidden">
                        <img src="/images/pokemon.png" className="w-full h-full object-cover object-center grayscale hover:grayscale-0 hover:scale-110 ease-in duration-150" alt="" />
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
                </div>
                <MdKeyboardArrowRight className="text-white text-6xl fixed right-20 hover:cursor-pointer hover:scale-125 hover:opacity-1 ease-in-out delay-150"/>
            </main>
        </section>
    )
};

export default Portfolio;