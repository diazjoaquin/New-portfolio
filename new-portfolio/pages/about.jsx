import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";
import { BsFileEarmarkArrowDown } from 'react-icons/bs';

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
                    <h2 className="text-white uppercase text-4xl animate-fade-right animate-once animate-duration-[2000ms] animate-delay-500 animate-ease-in">About me</h2>
                    <div>
                        <p className="text-white text-xl animate-fade-right animate-once animate-duration-[2000ms] animate-delay-500 animate-ease-in">
                            I've a curious mind, and great passion and capacity to learn, I'm interested in understand the behavior of everything, to accomplish the better results. I'm a person whit a lot of energy and initiative, and a great capacity to adapt to changes. Capable of perform effectively both in group enviroments and in individual enviroments.
                            I´ve strong experience in front-end development using technologies such as React, as well as back-end development using Node.js. I have also worked with databases like MongoDB and PostgreSQL to build full-stack applications.
                            As a Full Stack Web Developer, I am excited about the opportunity to work with a company that values innovation and creativity in technology, in wich I can improve my programming skills and knowledge.
                        </p>
                        <br />
                        <p className="text-white text-xl animate-fade-right animate-once animate-duration-[2000ms] animate-delay-500 animate-ease-in">
                            I am graduated from Henry Bootcamp as a Full Stack Web Developer. During the course, I learned and developed skills in technologies such as: Javascript, Typescript, React, Node.js, SQL, Express, and more. I am currently working on personal projects, in which I seek to improve my programming skills, as well as learn new technologies (such Next.js, Vue.js, and MongoDB), which allow me archieve the professional profile in that I want to develop myself in the future.
                        </p>
                    </div>
                    <button className="text-white text-xl bg-zinc-800 font-bold py-2 w-[25%] flex flex-row items-center justify-center gap-2 rounded-2xl border-2 animate-fade-down animate-once animate-duration-[1000ms] animate-delay-300 animate-ease-in">Download Resume <BsFileEarmarkArrowDown className="text-2xl"/></button>
                </div>
            </div>
        </section>
    );
};

export default About;