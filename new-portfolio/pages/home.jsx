import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";
import { GiHeartOrgan, GiBrain } from 'react-icons/gi';


export default function Home () {
      
    const handleChangePhrase = () => {
        let visible = document.querySelector("#visible");
        let hidden = document.querySelector("#hidden");

        if (visible && hidden) {
            visible.classList.add("hidden");
            visible.id = "hidden";
            hidden.classList.remove("hidden");
            hidden.id = "visible";
        };
    };


    return (
        <section className="w-screen h-screen flex bg-zinc-900 overflow-hidden">
            <div className="absolute bottom-0 w-screen sm:h-[57%] lg:h-[42%] bg-teal-600 origin-bottom z-10 rounded-tr-[56%] rounded-tl-[65%]"></div>
            <Nav/>
            <Sidebar/>
            <div className="w-screen flex items-center justify-center font-serif">
                <div className="lg:h-4/5 flex lg:flex-row sm:flex-col gap-12 w-9/12 items-center px-12 absolute">
                    <div className="lg:flex-1 flex items-center justify-center">
                        <img src="/images/profile.png" className="relative lg:w-full sm:w-[80%] hover:z-40 transition ease-in-out delay-150 lg:grayscale lg:z-0 sm:z-40 hover:grayscale-0 hover:cursor-pointer animate-fade-down animate-once animate-duration-[800ms] animate-delay-500 animate-ease-in" alt="profile" />
                    </div>
                    <div className="w-full h-full flex flex-1 flex-col justify-center text-white uppercase text-7xl tracking-[.05em] z-20">
                        <span className="flex items-center gap-2 text-6xl font-bold" id="visible"><h3>Passionate </h3><GiHeartOrgan className="hover:cursor-pointer text-7xl text-[#dc2626] animate-jump animate-infinite animate-duration-[1200ms] animate-ease-linear" onClick={() => handleChangePhrase()}/></span>
                        <span className="hidden flex items-center gap-2 text-6xl font-bold" id="hidden"><h3>Creative </h3><GiBrain className="hover:cursor-pointer text-7xl text-[#f9a8d4] animate-jump animate-infinite animate-duration-[1200ms] animate-ease-linear" onClick={() => handleChangePhrase()}/></span><span className="font-black font-sans">Web Developer</span>
                    </div>
                </div>
            </div>
        </section>
    )
};