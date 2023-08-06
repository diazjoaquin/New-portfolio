import { TbPointFilled } from 'react-icons/tb';

export const Loader = () => {
    return (
        <div className="text-emerald-400 text-5xl fixed bottom-10 right-10 flex px-12">
            <div className="animate-bounce animate-infinite animate-ease-in drop-shadow-[2px_1px_1.5px_#22c55e]" ><TbPointFilled/></div>
            <div className="animate-bounce animate-infinite animate-ease-in animate-delay-150 drop-shadow-[2px_1px_1.5px_#22c55e]" ><TbPointFilled/></div>
            <div className="animate-bounce animate-infinite animate-ease-in animate-delay-300 drop-shadow-[2px_1px_1.5px_#22c55e]" ><TbPointFilled/></div>
        </div>
    )
};