import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Testimonials () {


    return (
            <main className="border-4 border-zinc-700 rounded-xl sm:w-8/12 lg:w-7/12 h-[80%] flex flex-col items-center justify-start pt-6 gap-24 animate-fade-down animate-duration-[1200ms] animate-ease-in">
                <div className="lg:w-8/12 h-2/6">
                    <div className="flex items-end text-white text-5xl justify-center gap-4 py-2">
                        <a href="https://github.com/SantiRosso" className="hover:scale-125 hover:text-white transition ease-in-out delay-150"><AiFillGithub/></a>
                        <img src="/images/testimonials/Santiago.jpg" className="rounded-full object-center object-cover w-2/12 hover:scale-125" alt="Santiago" />
                        <a href="https://www.linkedin.com/in/santiago-rosso-421484227/" className="hover:scale-125 hover:text-white transition ease-in-out delay-150"><AiFillLinkedin/></a>
                    </div>
                    <div className="px-6">
                        <p className="text-white text-md text-center">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                    </div>
                </div>
                <div className="lg:w-8/12 h-2/6">
                    <div className="flex items-end text-white text-5xl justify-center gap-4 py-2">
                        <a href="https://github.com/Fran3003" className="hover:scale-125 hover:text-white transition ease-in-out delay-150"><AiFillGithub/></a>
                        <img src="/images/testimonials/Franco.jpg" className="rounded-full object-center object-cover w-2/12 hover:scale-125" alt="Franco" />
                        <a href="https://www.linkedin.com/in/franco-emanuel-rantucho-3822a3209/" className="hover:scale-125 hover:text-white transition ease-in-out delay-150"><AiFillLinkedin/></a>
                    </div>
                    <div className="px-6">
                        <p className="text-white text-md text-center">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."  
                        </p>
                    </div>
                </div>
                {/* <div className="w-8/12 h-2/6">
                    <div className="flex items-end text-white text-3xl justify-center gap-4 py-2">
                        <a href="https://github.com/Zetah07" className="hover:scale-125 hover:text-white transition ease-in-out delay-150"><AiFillGithub/></a>
                        <img src="/images/testimonials/Johan.png" className="rounded-full object-center object-cover w-1/12 hover:scale-125" alt="Johan" />
                        <a href="https://www.linkedin.com/in/Zetahdev/" className="hover:scale-125 hover:text-white transition ease-in-out delay-150"><AiFillLinkedin/></a>
                    </div>
                    <div className="px-6">
                        <p className="text-white text-sm text-center">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                    </div>
                </div> */}
            </main>
    )
};