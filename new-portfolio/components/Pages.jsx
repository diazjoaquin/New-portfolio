import { VscDebugBreakpointData, VscDebugBreakpointDataUnverified } from "react-icons/vsc";

const Pages = () => {

    return (
        <div className="hidden lg:flex flex-col absolute text-gray-300 bottom-40 right-40 text-4xl">
            <VscDebugBreakpointData className="hover:text-white hover:scale-125 hover:cursor-pointer transition ease-in-out delay-150"/>
            <VscDebugBreakpointDataUnverified className="hover:text-white hover:scale-125 hover:cursor-pointer transition ease-in-out delay-150"/>
            <VscDebugBreakpointDataUnverified className="hover:text-white hover:scale-125 hover:cursor-pointer transition ease-in-out delay-150"/>
            <VscDebugBreakpointDataUnverified className="hover:text-white hover:scale-125 hover:cursor-pointer transition ease-in-out delay-150"/>
            <VscDebugBreakpointDataUnverified className="hover:text-white hover:scale-125 hover:cursor-pointer transition ease-in-out delay-150"/>
        </div>
    );
};

export default Pages;