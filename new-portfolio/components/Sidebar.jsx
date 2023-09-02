import { AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai";

export default function Sidebar () {
    return (
        <div className="mx-5 gap-4 text-gray-300 text-3xl fixed h-screen flex flex-col z-10 justify-center animate-fade animate-once animate-delay-[800ms] animate-ease-in">
            <a href="https://github.com/diazjoaquin" className="hover:scale-125 hover:brightness-150 transition ease-in-out delay-150"><AiFillGithub/></a>
            <a href="https://www.linkedin.com/in/diazjoaquin-dev/" className="hover:scale-125 hover:brightness-150 transition ease-in-out delay-150"><AiFillLinkedin/></a> 
            <a href="https://wa.me/+541126792759" className="hover:scale-125 hover:brightness-150 transition ease-in-out delay-150"><AiOutlineWhatsApp/></a>
            <a href="mailto:diaz.joaquin.e@gmail.com" className="hover:scale-125 hover:brightness-150 transition ease-in-out delay-150"><AiOutlineMail/></a>
        </div>
    );
};