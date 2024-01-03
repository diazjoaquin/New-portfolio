import { BiServer, BiLaptop } from 'react-icons/bi';
import { BsDatabaseFillCheck } from 'react-icons/bs';
import { FaMobileAlt } from "react-icons/fa";


export default function Services () {

    return (
        <section id="services" className='flex items-center justify-center h-screen w-screen bg-zinc-900'>
            <main className="border-4 border-zinc-700 rounded-lg grid grid-rows-2 h-[75%] bg-zinc-800 justify-center w-8/12 px-4 font-sans animate-fade-up animate-delay-500 animate-ease-in">
                <section className="flex">
                    <div className="text-white w-full">
                        <h1 className="text-3xl uppercase px-4 py-4 font-bold font-serif">Services</h1>
                        <section className="grid grid-cols-2 grid-rows-2 gap-y-60 h-full">
                            <article className="flex flex-col px-8 gap-2 py-2">
                                <h2 className="animate-fade-left animate-delay-[900ms] animate-ease-in font-bold text-xl flex items-center gap-2"><span className="border-2 border-emerald-600 rounded-full p-2 bg-emerald-600 hover:bg-emerald-500 hover:border-white hover:cursor-pointer"><BiLaptop/></span>Front-End Development</h2>
                                <p className='text-sm'>
                                Creating user interfaces using HTML, CSS, and JavaScript. This involves designing and developing the visual components of a website that users interact with directly.
                                User Interface (UI) Design: Designing the user interface with a focus on user experience, aesthetics, and responsive design to ensure the application works well on different devices and screen sizes.
                                Front-End Frameworks: Using libraries and frameworks like React or Next.jsto build dynamic and interactive user interfaces.
                                </p>
                            </article>
                            <article className="flex flex-col px-8 gap-2 py-2">
                                <h2 className="animate-fade-left animate-delay-[900ms] animate-ease-in font-bold text-xl flex items-center gap-2"><span className="border-2 border-emerald-600 rounded-full p-2 bg-emerald-600 hover:bg-emerald-500 hover:border-white hover:cursor-pointer"><BiServer/></span>Back-End Development</h2>
                                <p className='text-sm'>
                                Building the server-side logic and databases required for the functioning of the web application. This includes handling data storage, user authentication, server configuration, and more.
                                Server-Side Languages: Utilizing languages like Node.js to build the back-end logic and handle server-side operations.
                                Server Frameworks: Using frameworks like Express.js (Node.js) to streamline back-end development.
                                </p>
                            </article>
                            <article className="flex flex-col px-8 gap-2 py-2">
                            
                                <h2 className="animate-fade-left animate-delay-[900ms] animate-ease-in font-bold text-xl flex items-center gap-2"><span className="border-2 border-emerald-600 rounded-full p-2 bg-emerald-600 hover:bg-emerald-500 hover:border-white hover:cursor-pointer"><BsDatabaseFillCheck/></span>Database Management</h2>
                                <p className='text-sm'>
                                Database Design: Designing the structure and schema of databases to efficiently store and manage data for the web application.
                                Database Integration: Connecting the application to databases and implementing CRUD (Create, Read, Update, Delete) operations to manage data.
                                </p>
                            </article>
                            <article className="flex flex-col px-8 gap-2 py-2">
                            
                                <h2 className="animate-fade-left animate-delay-[900ms] animate-ease-in font-bold text-xl flex items-center gap-2"><span className="border-2 border-emerald-600 rounded-full p-2 bg-emerald-600 hover:bg-emerald-500 hover:border-white hover:cursor-pointer"><FaMobileAlt/></span>Mobile Development</h2>
                                <p className='text-sm'>
                                Designing and building native or cross-platform mobile applications for iOS, Android, or other platforms.
                                Using cross-platform frameworks such as React Native or Flutter to develop applications that run on multiple platforms with a shared codebase.
                                </p>
                            </article>
                        </section>
                    </div>
                </section>
            </main>
        </section>
        
    );
}