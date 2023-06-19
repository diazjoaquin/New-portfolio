import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";

const About = () => {
    return (
        <section className="relative bg-zinc-900 h-full rounded-bl-[0%] rounded-br-[70%]">
            <Nav/>
            <Sidebar/>
            <div className="w-full h-full flex items-center justify-center">
                <div>
                    <img src="" alt="" />
                </div>
                <div className="h-3/5 flex flex-col gap-12 w-9/12 px-12 absolute">
                    <h2 className="text-white uppercase text-4xl">About me</h2>
                    <div>
                        <p className="text-white text-xl">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;