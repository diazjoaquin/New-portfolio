import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";
// import ContactSidebar from "@/components/ContactSidebar";

const Contact = () => {

    return (
        <section className="h-full bg-zinc-900">
            <svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#14b8a6" fill-opacity="1" d="M0,160L60,138.7C120,117,240,75,360,80C480,85,600,139,720,154.7C840,171,960,149,1080,149.3C1200,149,1320,171,1380,181.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
            <Nav/>
            <Sidebar/>
            <main className="flex h-full justify-center items-center">
                <div className="z-10 h-[75%] w-[45%] gap-10 flex flex-col justify-center items-center absolute rounded-xl lg:p-12 animate-fade-down animate-once animate-duration-[800ms] animate-delay-500 animate-ease-in border-2 border-zinc-800 backdrop-blur-sm backdrop-saturate-50 backdrop-brightness-125">
                    <div className="text-white flex flex-col mt-12">
                        <h2 className="text-4xl font-serif">Get in Touch!</h2>
                    </div>
                    <div className="lg:flex justify-center w-[80%]">
                        {/* <ContactSidebar/> */}
                        <div className="w-[100%]">
                            <form className="flex flex-col items-center justify-center gap-5 w-[100%] mb-12 font-sans">
                                <input className="rounded-xl px-3 py-1 w-[100%]" type='text' placeholder='Your Name' required />
                                <input className="rounded-xl px-3 py-1 w-[100%]" type="email" placeholder='Your Email' required />
                                <textarea className="rounded-xl px-3 py-1 w-[100%] resize-none" name="Message" rows="10" placeholder='Your Message' required ></textarea>
                                <button className="w-full lg:w-[40%] text-white text-lg bg-zinc-800 hover:bg-zinc-600 px-6 py-2 rounded-md font-bold border-2 border-white" type='submit'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
};

export default Contact;