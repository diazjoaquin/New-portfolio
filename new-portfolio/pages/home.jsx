import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";

export default function Home () {
      
    return (
        <section className="w-screen h-screen flex bg-zinc-900 overflow-hidden">
            <div className="absolute bottom-0 w-screen sm:h-[57%] lg:h-[42%] bg-teal-600 origin-bottom z-10 rounded-tr-[56%] rounded-tl-[65%]"></div>
            <Nav/>
            <Sidebar/>
            <section className="w-screen flex items-center justify-center font-serif">
                <article className="lg:h-4/5 flex lg:flex-row sm:flex-col gap-12 w-9/12 items-center px-12 absolute">
                    <div className="lg:flex-1 flex items-center justify-center">
                        <img src="/images/profile.png" className="relative lg:w-full sm:w-[80%] hover:z-40 transition ease-in-out delay-150 lg:grayscale lg:z-0 sm:z-40 hover:grayscale-0 hover:cursor-pointer animate-fade-down animate-once animate-duration-[800ms] animate-delay-200 animate-ease-in" alt="profile" />
                    </div>
                    <div className="w-full h-full flex flex-1 flex-col justify-center text-white uppercase text-7xl tracking-[.05em] z-20">
                        <p className="font-black font-sans pb-2 px-4"><span className="italic text-5xl text-teal-300">Full Stack </span> Web Developer</p>
                        <h3 className="flex items-center text-xl font-sans pl-4 italic font-medium animate-fade-up animate-once lowercase">curious mind Whit great passion.</h3>
                    </div>
                </article>
            </section>
        </section>
    )
};