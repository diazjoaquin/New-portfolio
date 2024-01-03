export default function Home () {
      
    return (
        <section id="home" className="w-screen h-screen flex bg-zinc-900">
            <main className="w-screen flex items-center justify-center font-serif">
                <div className="lg:h-4/5 lg:flex flex-row w-9/12 items-center px-6 md:px-2 absolute">
                    <article className="flex items-center justify-center">
                        <img src="/images/profile.png" className="relative w-full xl:w-[70%] lg:grayscale sm:z-40 hover:grayscale-0 hover:cursor-pointer animate-fade-down animate-once animate-duration-[300ms] animate-ease-in transition ease-in-out delay-150" alt="profile" />
                    </article>
                    <article className="max-w-screen h-full flex flex-col justify-center text-white uppercase tracking-[.05em] z-20 pt-4">
                        <p className="font-black font-sans pb-2 md:px-4 text-4xl md:text-6xl lg:text-7xl"><span className="italic text-4xl md:text-5xl xl:text-7xl text-teal-300">Full Stack </span> Web Developer</p>
                        <h3 className="flex items-center text-xl font-sans md:px-4 italic font-medium animate-fade-up animate-once lowercase">A curious mind Whit great passion.</h3>
                    </article>
                </div>
            </main>
        </section>
    )
};