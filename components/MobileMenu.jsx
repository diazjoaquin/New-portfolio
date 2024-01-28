import Link from 'next/link';

const MobileMenu = ({visible}) => {

    if (!visible) {
        return null;
    }

    return (
        <article>
            <section className="absolute top-8 right-0 bg-black p-5 rounded-lg">
                <ul className="text-right text-gray-300 flex flex-col gap-2">
                    <li>
                        <Link href="#home">Home</Link>
                    </li>
                    <li>
                        <Link href="#about">About</Link>
                    </li>
                    <li>
                        <Link href="#portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link href="#contact">Contact</Link>
                    </li>
                </ul>
            </section>
        </article>
    );
};

export default MobileMenu;