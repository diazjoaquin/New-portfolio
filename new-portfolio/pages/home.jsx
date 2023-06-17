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
        <section className="w-full h-full flex">
            <Nav/>
            <Sidebar/>
            <div className="w-full  flex items-center justify-center">
                <div className="h-4/5 flex gap-12 w-9/12 items-center border-2 border-white px-12">
                    <div className="flex-1">
                        <img src="/images/profile.png" alt="profile" />
                    </div>
                    <div className="w-full h-full flex flex-1 flex-col justify-center items-center text-white uppercase text-6xl gap-2">
                        <span className="flex flex-col items-center gap-2" id="visible" ><GiHeartOrgan className="hover:cursor-pointer hover:scale-125 text-8xl text-[#dc2626] hover:drop-shadow-[0_3px_3px_#dc2626]" onClick={() => handleChangePhrase()}/><h3> Passionate</h3></span>
                        <span className="hidden flex flex-col items-center gap-2" id="hidden" ><GiBrain className="hover:cursor-pointer text-8xl hover:scale-125 text-[#f9a8d4] hover:drop-shadow-[0_3px_3px_#f9a8d4]" onClick={() => handleChangePhrase()}/><h3>Creative</h3></span><span className="flex text-center tracking-widest font-bold">Web Developer</span>
                    </div>
                </div>
            </div>
        </section>
    )
};