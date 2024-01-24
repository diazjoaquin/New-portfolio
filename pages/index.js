import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";
import Home from "@/components/Home";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

export default function App () {

    return (
        <>
            <Nav/>
            <Sidebar/>
            <Home/>
            <About/>
            <Projects/>
            <Technologies/>
            <Services/>
            <Testimonials/>
            <Contact/>
        </>
    )
};