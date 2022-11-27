import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: "https://www.linkedin.com/in/vladim%C3%ADr-musil-1a086624a",
            style: "rounded-tr-md",
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: "https://github.com/M-Vlado",
        },
        {
            id: 3,
            child: (
                <>
                    E-mail <HiOutlineMail size={30} />
                </>
            ),
            href: "mailto:vlado.musil@gmail.com",
            style: "rounded-br-md",
        },
    ];
    return (
        <div className="hidden xl:flex flex-col top-[35%] left-0 fixed">
            <ul>
                {links.map(({ id, child, href, style }) => (
                    <li
                        key={id}
                        className={
                            "flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" +
                            " " +
                            style
                        }
                    >
                        <a
                            href={href}
                            className="flex justify-between items-center w-full  text-white"
                            rel="noreferrer"
                            target="_blank"
                        >
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialLinks;
