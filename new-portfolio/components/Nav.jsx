import { BiBong } from "react-icons/bi";

export default function Nav () {
    return (
        <nav className="w-full h-20 fixed text-gray-300 flex items-center font-mono text-l uppercase z-0">
            <div className="flex  items-center w-7/12 space-x-5 mx-5">
                <BiBong className="text-5xl"/>
                <h3 className="font-bold text-2xl hover:cursor-pointer">Joaquín Díaz</h3>
            </div>
            <div className="w-5/12 flex">
                <ul className="w-full flex justify-evenly">
                    <li className="hover:underline hover:cursor-pointer hover:text-white">About</li>
                    <li className="hover:underline hover:cursor-pointer hover:text-white">Portfolio</li>
                    <li className="hover:underline hover:cursor-pointer hover:text-white">Contact</li>
                </ul>
            </div>
        </nav>
    )
};