import { AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai";

export default function Sidebar () {
    return (
        <div className="mx-0 md:mx-5 gap-4 text-gray-300 text-3xl fixed md:pb-0 pb-6 flex z-50 md:left-0 md:w-auto w-screen justify-center origin-center bottom-0 md:bottom-[40vh] animate-fade animate-once animate-delay-[800ms] animate-ease-in">
            <div className="flex md:flex-col flex-row gap-4 bg-zinc-800 border-2 rounded-full p-3">
                <a href="https://github.com/diazjoaquin" className="hover:scale-125 hover:brightness-150 transition ease-in-out delay-150"><AiFillGithub/></a>
                <a href="https://www.linkedin.com/in/diazjoaquin-dev/" className="hover:scale-125 hover:brightness-150 transition ease-in-out delay-150"><AiFillLinkedin/></a> 
                <a href="https://wa.me/+541126792759" className="hover:scale-125 hover:brightness-150 transition ease-in-out delay-150"><AiOutlineWhatsApp/></a>
                <a href="mailto:diaz.joaquin.e@gmail.com" className="hover:scale-125 hover:brightness-150 transition ease-in-out delay-150"><AiOutlineMail/></a>
            </div>
            
        </div>
    );
};