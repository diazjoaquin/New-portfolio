import { useCallback, useState, useEffect } from "react";
import { BiBong } from "react-icons/bi";
import { FaBars } from 'react-icons/fa';
import MobileMenu from "./MobileMenu";
import Link from 'next/link';

const TOP_OFFSET = 66;

export default function Nav () {

    const [ showMobileMenu, setShowMobileMenu ] = useState(false);
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= TOP_OFFSET) {
                setShowBackground(true);
            } else {
                setShowBackground(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current)
    }, []);

    return (
        <nav className={`w-screen h-20 fixed text-white flex items-center font-mono text-l uppercase z-50 ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}
        `}>
            <div className="flex  items-center lg:w-7/12 lg:space-x-5 mx-5">
                <BiBong className="text-5xl text-teal-400 drop-shadow-[1px_1px_1.5px_#22c55e] animate-wiggle animate-infinite animate-delay-0 animate-ease-linear"/>
                <h3 className="font-bold text-2xl text-gray-300 hover:cursor-pointer hover:text-white">Joaquín Díaz</h3>
            </div>
            <div className="w-5/12 hidden lg:flex">
                <ul className="w-full flex justify-evenly hover:text-gray-300 py-2">
                    <li className="after:block after:h-[3px] after:w-100 after:bg-teal-500 after:scale-x-0 element hover:cursor-pointer hover:text-white">
                        <Link href="#home">Home</Link>
                    </li>
                    <li className="after:block after:h-[3px] after:w-100 after:bg-teal-500 after:scale-x-0 element hover:cursor-pointer hover:text-white">
                        <Link href="#about">About</Link>
                    </li>
                    <li className="after:block after:h-[3px] after:w-100 after:bg-teal-500 after:scale-x-0 element hover:cursor-pointer hover:text-white">
                        <Link href="#portfolio">Portfolio</Link>
                    </li>
                    <li className="after:block after:h-[3px] after:w-100 after:bg-teal-500 after:scale-x-0 element hover:cursor-pointer hover:text-white">
                        <Link href="#contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <div onClick={toggleMobileMenu} className="lg:hidden absolute right-10">
                <FaBars className="text-white text-2xl transition"/>
                <MobileMenu visible={showMobileMenu} />
            </div>
        </nav>
    )
};