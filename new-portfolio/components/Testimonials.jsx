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
            <main className="border-4 border-zinc-700 rounded-xl sm:w-8/12 lg:w-7/12 h-[80%] flex flex-col items-center justify-start pt-6 gap-24 animate-fade-down animate-duration-[1200ms] animate-ease-in">
                {currentTestimonials.map((testimonial) => {
                    return (
                        <div id={testimonial.id} className="lg:w-8/12 h-2/6">
                            <div className="flex items-end text-white text-5xl justify-center gap-4 py-2">
                                <a href={testimonial.github} className="hover:scale-125 hover:text-white transition ease-in-out delay-150"><AiFillGithub/></a>
                                <img src={testimonial.img} className="border-4 rounded-full object-center object-cover w-2/12 hover:scale-125" alt="" />
                                <a href={testimonial.linkedIn} className="hover:scale-125 hover:text-white transition ease-in-out delay-150"><AiFillLinkedin/></a>
                            </div>
                            <div className="px-6">
                                <p className="text-white text-md text-center">{testimonial.decription}</p>
                            </div>
                        </div>
                    );
                })}
                <aside className="relative z-20 top-[30px]">
                    <li className="text-white text-xl gap-4 flex">
                        <ul className="hover:cursor-pointer hover:scale-150"><FiHexagon id="1" onClick={() => setCurrentPage(1)} className={currentPage === 1 ? "fill-white" : ""}/></ul>
                        <ul className="hover:cursor-pointer hover:scale-150"><FiHexagon id="2" onClick={() => setCurrentPage(2)} className={currentPage === 2 ? "fill-white" : ""}/></ul>
                        <ul className="hover:cursor-pointer hover:scale-150"><FiHexagon id="3" onClick={() => setCurrentPage(3)} className={currentPage === 3 ? "fill-white" : ""}/></ul>
                    </li>
                </aside>
            </main>
    )
};