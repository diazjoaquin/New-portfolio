import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";
import Wave from '@/public/wave.svg';

export default function Home () {
      
    return (
        <section className="w-screen h-screen flex bg-zinc-900 overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0" viewBox="0 0 1440 320">
                <path fill="#14b8a6" fill-opacity="1" d="M0,256L21.8,234.7C43.6,213,87,171,131,149.3C174.5,128,218,128,262,149.3C305.5,171,349,213,393,208C436.4,203,480,149,524,122.7C567.3,96,611,96,655,80C698.2,64,742,32,785,21.3C829.1,11,873,21,916,32C960,43,1004,53,1047,74.7C1090.9,96,1135,128,1178,160C1221.8,192,1265,224,1309,245.3C1352.7,267,1396,277,1418,282.7L1440,288L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path>
            </svg>
            <Nav/>
            <Sidebar/>
            <section className="w-screen flex items-center justify-center font-serif">
                <div className="lg:h-4/5 lg:flex flex-row w-9/12 items-center px-6 md:px-2 absolute">
                    <article className="flex items-center justify-center">
                        <img src="/images/profile.png" className="relative w-full xl:w-[70%] transition ease-in-out delay-150 lg:grayscale sm:z-40 hover:grayscale-0 hover:cursor-pointer animate-fade-down animate-once animate-duration-[300ms] animate-ease-in transition ease-in-out delay-150" alt="profile" />
                    </article>
                    <article className="max-w-screen h-full flex flex-col justify-center text-white uppercase tracking-[.05em] z-20 pt-4">
                        <p className="font-black font-sans pb-2 md:px-4 text-4xl md:text-6xl lg:text-7xl"><span className="italic text-4xl md:text-5xl xl:text-7xl text-teal-300">Full Stack </span> Web Developer</p>
                        <h3 className="flex items-center text-xl font-sans md:px-4 italic font-medium animate-fade-up animate-once lowercase">A curious mind Whit great passion.</h3>
                    </article>
                </div>
            </section>
        </section>
    )
};