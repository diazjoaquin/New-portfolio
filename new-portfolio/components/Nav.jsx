import { useCallback, useState } from "react";
import { BiBong } from "react-icons/bi";
import { FaBars } from 'react-icons/fa';
import MobileMenu from "./MobileMenu";

export default function Nav () {

    const [ showMobileMenu, setShowMobileMenu ] = useState(false);

    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current)
    }, []);


    return (
        <nav className="w-full h-20 fixed text-white flex items-center font-mono text-l uppercase z-0">
            <div className="flex  items-center lg:w-7/12 lg:space-x-5 mx-5">
                <BiBong className="text-5xl"/>
                <h3 className="font-bold text-2xl text-gray-300 hover:cursor-pointer hover:text-white">Joaquín Díaz</h3>
            </div>
            <div className="w-5/12 hidden lg:flex">
                <ul className="w-full flex justify-evenly hover:text-gray-300">
                    <li className="hover:underline hover:cursor-pointer hover:text-white">About</li>
                    <li className="hover:underline hover:cursor-pointer hover:text-white">Portfolio</li>
                    <li className="hover:underline hover:cursor-pointer hover:text-white">Contact</li>
                </ul>
            </div>
            <div onClick={toggleMobileMenu} className="lg:hidden flex relative left-[60%]">
                <FaBars className="text-white text-2xl transition"/>
                <MobileMenu visible={showMobileMenu} />
            </div>
        </nav>
    )
};