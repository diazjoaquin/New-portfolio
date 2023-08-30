import { technologies } from "@/assets/technogies";
import { BiServer, BiLaptop } from 'react-icons/bi';
import { FiTool } from 'react-icons/fi';

export default function Technologies () {
    return (
        <section className="w-screen h-screen flex items-center justify-center">
                <div className="w-[70%] border-4 rounded-xl border-zinc-800 h-[80%] flex flex-col px-24 py-6 justify-around text-white font-bold">
                    <h1 className="text-3xl">Tools & Technologies:</h1>
                    <div className="w-2/6">
                        <h3 className="text-white text-3xl py-2 flex items-center"><BiLaptop className="border-2 border-white rounded-full p-2 text-5xl bg-emerald-500 m-2"/> Front-end</h3>
                        <div className="flex gap-2">
                            {technologies.frontend.map((tool) => {
                                return (
                                    <span id={tool.id} className="hover:cursor-pointer hover:scale-125 flex items-center border-2 py-2 px-2 min-w-[100px] rounded-xl bg-teal-400"><img className="object-contain object-center w-[100px] h-[60px]" src={tool.img} alt={tool.alt}/></span>
                                )
                            })}
                        </div>
                    </div>
                    <div className="w-2/6">
                        <h3 className="text-white text-3xl py-2 flex items-center"><BiServer className="border-2 border-white rounded-full p-2 text-5xl bg-emerald-500 m-2"/> Back-end</h3>
                        <div className="flex gap-2">
                            {technologies.backend.map((tool) => {
                                return (
                                    <span id={tool.id} className="hover:cursor-pointer hover:scale-125 flex items-center border-2 py-2 px-2 min-w-[100px] rounded-xl bg-teal-400"><img className="object-contain object-center w-[100px] h-[60px]" src={tool.img} alt={tool.alt}/></span>
                                )
                            })}
                        </div>
                    </div>
                    <div className="w-2/6">
                        <h3 className="text-white text-3xl py-2 flex items-center"><FiTool className="border-2 border-white rounded-full p-2 text-5xl bg-emerald-500 m-2"/>Languages & Tools</h3>
                        <div className="flex gap-2">
                            {technologies.tools.map((tool) => {
                                return (
                                    <span id={tool.id} className="hover:cursor-pointer hover:scale-125 flex items-center border-2 py-2 px-2 min-w-[100px] rounded-xl bg-teal-400"><img className="object-contain object-center w-[100px] h-[60px]" src={tool.img} alt={tool.alt}/></span>
                                )
                            })}
                        </div>
                    </div>
                </div>
         </section>
    );
};