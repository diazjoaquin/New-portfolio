import { VscDebugBreakpointData, VscDebugBreakpointDataUnverified } from "react-icons/vsc";

const Pages = () => {

    return (
        <div className="hidden lg:flex flex-col absolute text-gray-300 bottom-40 right-40 text-4xl">
            <VscDebugBreakpointData className="hover:text-white hover:scale-125 hover:cursor-pointer transition ease-in-out delay-150 animate-fade-left animate-once animate-duration-[200ms] animate-delay-500 animate-ease-in"/>
            <VscDebugBreakpointDataUnverified className="hover:text-white hover:scale-125 hover:cursor-pointer transition ease-in-out delay-150 animate-fade-left animate-once animate-duration-[400ms] animate-delay-500 animate-ease-in"/>
            <VscDebugBreakpointDataUnverified className="hover:text-white hover:scale-125 hover:cursor-pointer transition ease-in-out delay-150 animate-fade-left animate-once animate-duration-[600ms] animate-delay-500 animate-ease-in"/>
            <VscDebugBreakpointDataUnverified className="hover:text-white hover:scale-125 hover:cursor-pointer transition ease-in-out delay-150 animate-fade-left animate-once animate-duration-[800ms] animate-delay-500 animate-ease-in"/>
            <VscDebugBreakpointDataUnverified className="hover:text-white hover:scale-125 hover:cursor-pointer transition ease-in-out delay-150 animate-fade-left animate-once animate-duration-[1000ms] animate-delay-500 animate-ease-in"/>
        </div>
    );
};

export default Pages;