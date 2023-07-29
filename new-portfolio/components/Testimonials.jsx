import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Testimonials () {


    return (
        <section className="h-full flex items-center justify-center">
            <main className="border-2 rounded-xl w-7/12 h-[80%] flex flex-col items-center justify-center gap-6 py-6">
                <div className="w-8/12 h-2/6">
                    <div className="flex items-end text-white text-3xl justify-center gap-4 py-2">
                        <a href="https://github.com/SantiRosso" className="hover:scale-125 hover:text-white transition ease-in-out delay-150"><AiFillGithub/></a>
                        <img src="/images/testimonials/Santiago.jpg" className="rounded-full object-center object-cover w-1/12 hover:scale-125" alt="Santiago" />
                        <a href="https://www.linkedin.com/in/santiago-rosso-421484227/" className="hover:scale-125 hover:text-white transition ease-in-out delay-150"><AiFillLinkedin/></a>
                    </div>
                    <div className="px-6">
                        <p className="text-white text-sm text-center">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                    </div>
                </div>
                <div className="w-8/12 h-2/6">
                    <div className="flex items-end text-white text-3xl justify-center gap-4 py-2">
                        <a href="https://github.com/Fran3003" className="hover:scale-125 hover:text-white transition ease-in-out delay-150"><AiFillGithub/></a>
                        <img src="/images/testimonials/Franco.jpg" className="rounded-full object-center object-cover w-1/12 hover:scale-125" alt="Franco" />
                        <a href="https://www.linkedin.com/in/franco-emanuel-rantucho-3822a3209/" className="hover:scale-125 hover:text-white transition ease-in-out delay-150"><AiFillLinkedin/></a>
                    </div>
                    <div className="px-6">
                        <p className="text-white text-sm text-center">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."  
                        </p>
                    </div>
                </div>
                <div className="w-8/12 h-2/6">
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
                </div>
                {/* <div className="w-8/12 h-1/6">
                <div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <p>
                            
                        </p>
                    </div>
                </div>
                <div className="w-8/12 h-1/6">
                <div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <p>
                            
                        </p>
                    </div>
                </div> */}
            </main>
            <button className="hidden lg:flex fixed bottom-20 left-20 text-white text-8xl font-bold"><span>2</span></button>
        </section>
    )
};