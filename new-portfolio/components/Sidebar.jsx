import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";

export default function Sidebar () {
    return (
        <div className="mx-5 space-y-2 text-gray-300 text-3xl fixed h-full flex flex-col justify-center z-0">
            <a href="https://github.com/diazjoaquin" className="hover:scale-125 hover:text-white transition ease-in-out delay-150"><AiFillGithub/></a>
            <a href="https://www.linkedin.com/in/diazjoaquin-dev/" className="hover:scale-125 hover:text-white transition ease-in-out delay-150"><AiFillLinkedin/></a>
            <a href="https://www.instagram.com/diazjoaquin_/" className="hover:scale-125 hover:text-white transition ease-in-out delay-150"><AiOutlineInstagram/></a>
        </div>
    )
};