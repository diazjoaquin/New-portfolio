const MobileMenu = ({visible}) => {

    if (!visible) {
        return null;
    }

    return (
        <div>
            <div className="absolute top-8 right-0 bg-black p-5 rounded-lg">
                <ul className="text-right text-gray-300 flex flex-col gap-2">
                    <li>About</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default MobileMenu;