import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";

const Portfolio = () => {
    return (
        <section className="relative bg-zinc-900 h-full rounded-e-full rounded-t-sm">
            <Nav/>
            <Sidebar/>
            <main className="flex h-full justify-center items-center w-full h-full">
                <div className="grid lg:grid-cols-2 gap-10 w-[70%] h-[50%]">
                    <div className="relative rounded-xl overflow-hidden">
                        <img src="/images/netflix.png" className="w-full h-full object-cover object-center grayscale hover:grayscale-0 hover:scale-110 ease-in duration-150" alt="" />
                        <div className="absolute bg-[#00000080] opacity-0 text-white w-full bottom-[-40px] px-10 text-center text-sm ease-in duration-300 hover:opacity-100 hover:bottom-0">
                            <p className="py-12">
                                A Netflix clone (currently on development). 
                                The primary goal was to create a user experience similar to Netflix, enabling users to sign up,
                                search for and play movies and TV shows.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
};

export default Portfolio;