import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";
import Pages from "@/components/Pages";
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
        <section className="w-full h-full flex">
            <div className="absolute top-0 bottom-0 right-0 left-0 bg-zinc-900 z-0 skew-y-12 origin-top-right"></div>
            <Nav/>
            <Sidebar/>
            <div className="w-full flex items-center justify-center">
                <div className="h-4/5 flex gap-12 w-9/12 items-center px-12 absolute">
                    <div className="flex-1">
                        <img src="/images/profile.png" alt="profile" />
                    </div>
                    <div className="w-full h-full flex flex-1 flex-col justify-center text-white uppercase text-7xl tracking-[.15em]">
                        <span className="flex items-center gap-2 text-6xl italic" id="visible"><h3>Passionate </h3><GiHeartOrgan className="hover:cursor-pointer  text-7xl text-[#dc2626] drop-shadow-[1px_1px_1px_#dc2626] animate-bounce" onClick={() => handleChangePhrase()}/></span>
                        <span className="hidden flex items-center gap-2 text-6xl italic" id="hidden"><h3>Creative </h3><GiBrain className="hover:cursor-pointer text-7xl text-[#f9a8d4] drop-shadow-[1px_1px_1px_#f9a8d4] animate-bounce" onClick={() => handleChangePhrase()}/></span><span className="tracking-[.25em] font-black">Web Developer</span>
                    </div>
                </div>
            </div>
            <Pages/>
        </section>
    )
};