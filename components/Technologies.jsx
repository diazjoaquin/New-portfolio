import { technologies } from "@/assets/technogies";
import { BiServer, BiLaptop } from 'react-icons/bi';
import { FiTool } from 'react-icons/fi';

export default function Technologies () {
    return (
        <section className="w-screen h-auto flex items-center justify-center bg-zinc-900">
                <main className="w-8/12 border-4 rounded-xl h-full flex flex-col px-6 lg:px-24 my-12 py-6 justify-around text-white font-sans font-bold animate-fade-up animate-ease-out animate-fill-both border-zinc-800 backdrop-blur-sm backdrop-saturate-50 backdrop-brightness-125">
                    <h1 className="text-3xl">Tools & Technologies:</h1>
                    <article className="w-full">
                        <h3 className="text-white text-2xl py-2 flex items-center"><BiLaptop className="border-2 border-white rounded-full p-2 text-5xl bg-teal-500 m-2"/> Front-end</h3>
                        <div className="flex flex-wrap gap-2">
                            {technologies.frontend.map((tool) => {
                                return (
                                    <span key={tool.id} className="hover:cursor-pointer hover:scale-125 transition ease-in-out delay-50 flex items-center border-2 py-2 px-2 w-[70px] md:w-[100px] h-[60px] md:h-[90px] rounded-xl bg-zinc-200"><img className="object-contain object-center w-full h-full" src={tool.img} alt={tool.alt}/></span>
                                )
                            })}
                        </div>
                    </article>
                    <article className="w-full">
                        <h3 className="text-white text-2xl py-2 flex items-center"><BiServer className="border-2 border-white rounded-full p-2 text-5xl bg-teal-500 m-2"/> Back-end</h3>
                        <div className="flex flex-wrap gap-2">
                            {technologies.backend.map((tool) => {
                                return (
                                    <span key={tool.id} className="hover:cursor-pointer hover:scale-125 transition ease-in-out delay-50 flex items-center border-2 py-2 px-2 w-[70px] md:w-[100px] h-[60px] md:h-[90px] rounded-xl bg-zinc-200"><img className="object-contain object-center w-full h-full" src={tool.img} alt={tool.alt}/></span>
                                )
                            })}
                        </div>
                    </article>
                    <article className="w-full">
                        <h3 className="text-white text-2xl py-2 flex items-center"><FiTool className="border-2 border-white rounded-full p-2 text-5xl bg-teal-500 m-2"/>Languages & Tools</h3>
                        <div className="flex flex-wrap gap-2">
                            {technologies.tools.map((tool) => {
                                return (
                                    <span key={tool.id} className="hover:cursor-pointer hover:scale-125 transition ease-in-out delay-50 flex items-center border-2 py-2 px-2 w-[70px] md:w-[100px] h-[60px] md:h-[90px] rounded-xl bg-zinc-200"><img className="object-contain object-center w-full h-full" src={tool.img} alt={tool.alt}/></span>
                                )
                            })}
                        </div>
                    </article>
                </main>
         </section>
    );
};