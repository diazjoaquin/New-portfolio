import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Sidebar () {
    return (
        <div className="mx-5 space-y-2 text-white text-3xl fixed h-full flex flex-col justify-center">
            <a href="https://github.com/diazjoaquin"><AiFillGithub/></a>
            <a href="https://www.linkedin.com/in/diazjoaquin-dev/"><AiFillLinkedin/></a>
        </div>
    )
};