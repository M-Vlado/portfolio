import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
    const [nav, setNav] = useState<boolean>(false);
    const links = [
        {
            id: 1,
            link: "home",
            offset: 0,
        },
        {
            id: 2,
            link: "about",
            offset: 0,
        },
        {
            id: 3,
            link: "portfolio",
            offset: 0,
        },
        {
            id: 4,
            link: "experience",
            offset: 0,
        },
        {
            id: 5,
            link: "contact",
            offset: 0,
        },
    ];

    return (
        <div className="flex justify-between items-center w-full h-20 text-white bg-gradient-to-r from-black  to-gray-900 px-4 fixed z-10">
            <div>
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className="text-3xl lg:text-5xl font-signature ml-2 cursor-pointer"
                >
                    Vladimír Musil
                </Link>
            </div>
            <ul className="hidden md:flex">
                {links.map(({ id, link, offset }) => (
                    <li
                        key={id}
                        className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
                    >
                        <Link activeClass="active" to={link} spy={true} offset={offset} smooth={true} duration={500}>
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>
            <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul
                    className="flex flex-col justify-center items-center absolute top-0 left-0
            w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500"
                >
                    {links.map(({ id, link, offset }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 duration-200"
                        >
                            <Link onClick={() => setNav(!nav)} to={link} offset={offset} smooth={true} duration={500}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NavBar;
