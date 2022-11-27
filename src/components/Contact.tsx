import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
    const links = [
        {
            id: 1,
            child: <FaLinkedin size={100} />,
            href: "https://www.linkedin.com/in/vladim%C3%ADr-musil-1a086624a",
        },
        {
            id: 2,
            child: <FaGithub size={100} />,
            href: "https://github.com/M-Vlado",
        },
        {
            id: 3,
            child: <HiOutlineMail size={100} />,
            href: "mailto:vlado.musil@gmail.com",
        },
    ];
    return (
        <div id="contact" className="w-full h-fit pt-20 bg-gradient-to-b from-black to-gray-800 p-4 text-white">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="sm:pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact me</p>
                    <p className="py-6">Feel free to contact me via below social networks or send me an email</p>
                </div>
                <div className="flex justify-center items-center w-full h-1/2">
                    <ul className="flex flex-col sm:flex-row justify-between items-center w-full md:w-2/3 ">
                        {links.map(({ id, child, href }) => (
                            <li key={id} className="hover:scale-110 duration-300 list-none my-2 sm:my-0">
                                <a
                                    className="cursor-pointer text-gray-800 hover:text-gray-300 duration-400"
                                    href={href}
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    {child}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;
