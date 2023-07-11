import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';

const ContactSidebar = () => {
    return (
        <aside className="w-[20%] h-[50%] text-gray-200 text-3xl flex flex-col justify-between">
            <a className="hover:scale-125 hover:text-white transition ease-in-out delay-150" href="https://wa.me/+541126792759"><AiOutlineWhatsApp/></a>
            <a className="hover:scale-125 hover:text-white transition ease-in-out delay-150" href="mailto:diaz.joaquin.e@gmail.com"><AiOutlineMail/></a>
            <a className="hover:scale-125 hover:text-white transition ease-in-out delay-150" href="https://t.me/diazjoaquin"><FaTelegramPlane/></a>
        </aside>
    );
};

export default ContactSidebar;