import { VscDebugBreakpointData, VscDebugBreakpointDataUnverified } from 'react-icons/vsc';

const Pagination = () => {

    return (
        <div className="absolute text-gray-300 bottom-40 right-40 text-4xl">
            <VscDebugBreakpointData className="hover:text-white hover:scale-125 hover:cursor-pointer transition ease-in-out delay-150"/>
            <VscDebugBreakpointDataUnverified className="hover:text-white hover:scale-125 hover:cursor-pointer transition ease-in-out delay-150"/>
            <VscDebugBreakpointDataUnverified className="hover:text-white hover:scale-125 hover:cursor-pointer transition ease-in-out delay-150"/>
            <VscDebugBreakpointDataUnverified className="hover:text-white hover:scale-125 hover:cursor-pointer transition ease-in-out delay-150"/>
            <VscDebugBreakpointDataUnverified className="hover:text-white hover:scale-125 hover:cursor-pointer transition ease-in-out delay-150"/>
        </div>
    );
};

export default Pagination;