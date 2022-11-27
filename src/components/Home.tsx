import ProfilePic from "../assets/profilePic1.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
const Home = () => {
    return (
        <div id="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-28 md:pt-0">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full grow">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white ">I'm Full Stack Developer</h2>
                    <p className="text-gray-500 py-4 max-w-md">
                        Welcome to my page, my name is Vladimír and I'm a fresh alumni of
                        <a
                            href="https://www.greenfoxacademy.cz"
                            target="_blank"
                            rel="noreferrer"
                            className="px-1 text-gray-400 underline underline-offset4"
                        >
                            Green Fox Academy.
                        </a>
                    </p>
                    <div>
                        <Link
                            to="portfolio"
                            smooth={true}
                            duration={500}
                            className="group text-white w-fit px-6 py-2 sm:py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-gray-500 to-gray-800 cursor-pointer"
                        >
                            Portfolio
                            <span className="ml-2 group-hover:rotate-90 duration-300">
                                <MdKeyboardArrowRight size={24} />
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="basis-3/4">
                    <img
                        src={ProfilePic}
                        alt="my profile"
                        className="rounded-2xl mx-auto w-2/4 my-4 md:w-3/4  md:mt-0"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
