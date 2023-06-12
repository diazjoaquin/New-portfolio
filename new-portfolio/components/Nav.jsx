import { BiBong } from "react-icons/bi";

export default function Nav () {
    return (
        <nav className="w-full h-20 fixed text-white flex items-center font-mono text-l uppercase">
            <div className="flex  items-center w-7/12 space-x-5 mx-5">
                <BiBong className="text-5xl"/>
                <h3 className="font-bold text-2xl">Joaquín Díaz</h3>
            </div>
            <div className="w-5/12 flex">
                <ul className="w-full flex justify-evenly">
                    <li>About</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    )
};