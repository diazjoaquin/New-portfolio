import { useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FiHexagon } from 'react-icons/fi';
import { testimonials } from "@/assets/testimonials";

export default function Testimonials () {

    const [ testimonialsPerPage ] = useState(2);
    const [ currentPage, setCurrentPage ] = useState(1);
    const last = currentPage * testimonialsPerPage;
    const first = last - testimonialsPerPage;
    const currentTestimonials = testimonials.slice(first, last); 

    return (
        <section className="w-screen h-screen bg-zinc-900 flex items-center justify-center">
            <main className="border-2 border-zinc-500 rounded-xl sm:w-8/12 lg:w-8/12 h-[80%] flex flex-col items-center justify-start pt-6 gap-24 animate-fade-down animate-duration-[1200ms] animate-ease-in backdrop-blur-sm backdrop-saturate-50 backdrop-brightness-125">
                {currentTestimonials.map((testimonial) => {
                    return (
                        <div key={testimonial.id} className="lg:w-8/12 h-2/6 flex flex-col gap-2 animate-fade-down animate-duration-700 animate-ease-in animate-fill-both">
                            <div className="flex items-end text-white text-5xl justify-center gap-4">
                                <a href={testimonial.github} className="hover:scale-125 hover:text-teal-300 transition ease-in-out delay-150"><AiFillGithub/></a>
                                <img src={testimonial.img} className="border-4 rounded-full object-center object-cover w-2/12 hover:scale-125 transition ease-in-out delay-150" alt="" />
                                <a href={testimonial.linkedIn} className="hover:scale-125 hover:text-teal-300 transition ease-in-out delay-150"><AiFillLinkedin/></a>
                            </div>
                            <h3 className="text-teal-300 flex justify-center text-l font-bold font-sans">{testimonial.name}</h3>
                            <div className="border-2 px-2 py-2 rounded-xl border-zinc-500 bg-zinc-800">
                                <p className="text-white text-md text-center">&quot;{testimonial.decription}&quot;</p>
                            </div>
                        </div>
                    );
                })}
                <aside className="absolute z-20 bottom-[-5%]">
                    <li className="text-white text-xl gap-4 flex">
                        <ul className="hover:cursor-pointer hover:scale-150"><FiHexagon id="1" onClick={() => setCurrentPage(1)} className={currentPage === 1 ? "fill-white" : ""}/></ul>
                        <ul className="hover:cursor-pointer hover:scale-150"><FiHexagon id="2" onClick={() => setCurrentPage(2)} className={currentPage === 2 ? "fill-white" : ""}/></ul>
                        <ul className="hover:cursor-pointer hover:scale-150"><FiHexagon id="3" onClick={() => setCurrentPage(3)} className={currentPage === 3 ? "fill-white" : ""}/></ul>
                    </li>
                </aside>
            </main>
        </section>
            
    )
};