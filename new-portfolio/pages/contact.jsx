import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";
import ContactSidebar from "@/components/ContactSidebar";
import Pages from "@/components/Pages";

const Contact = () => {

    return (
        <section className="h-full">
            <div className="absolute top-0 bottom-0 right-0 left-0 bg-zinc-800 z-0 skew-y-[-6deg] origin-top-left"></div>
            <Nav/>
            <Sidebar/>
            <main className="flex h-full justify-center items-center">
                <div className="h-[75%] w-[65%] gap-10 flex flex-col justify-center items-center absolute rounded-3xl lg:p-12 bg-zinc-900 animate-fade-down animate-once animate-duration-[800ms] animate-delay-500 animate-ease-in">
                    <div className="text-white flex flex-col items-center gap-1 mt-12">
                        <h2 className="text-4xl">Get in Touch</h2>
                        <h3 className="text-xl">Contact Me</h3>
                    </div>
                    <div className="flex w-[60%]">
                        <ContactSidebar/>
                        <div className="flex justify-center w-[100%]">
                            <form className="flex flex-col items-center justify-center gap-5 w-[100%] mb-12">
                                <input className="rounded-xl px-3 py-1 w-[100%]" type='text' placeholder='Your Name' required />
                                <input className="rounded-xl px-3 py-1 w-[100%]" type="email" placeholder='Your Email' required />
                                <textarea className="rounded-xl px-3 py-1 w-[100%] resize-none" name="Message" rows="10" placeholder='Your Message' required ></textarea>
                                <button className="text-white bg-zinc-800 hover:bg-zinc-700 px-6 py-2 rounded-xl font-bold" type='submit'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Pages/>
        </section>
    )
};

export default Contact;