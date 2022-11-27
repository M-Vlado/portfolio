import css from "../assets/css.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import java from "../assets/java.png";
import typeScript from "../assets/typeScript.png";
import springBoot from "../assets/springBoot.png";
import git from "../assets/git.png";
import bootstrap from "../assets/bootstrap.png";
import mySQL from "../assets/mySQL2.png";
import postgreSQL from "../assets/postgreSQL.png";
import thymeleaf from "../assets/thymeleaf.png";
import sequelize from "../assets/sequelize.png";

const Experience = () => {
    const technologies = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500",
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500",
        },
        {
            id: 3,
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-500",
        },
        {
            id: 4,
            src: typeScript,
            title: "TypeScript",
            style: "shadow-blue-400",
        },
        {
            id: 5,
            src: node,
            title: "Node JS",
            style: "shadow-green-400",
        },
        {
            id: 6,
            src: react,
            title: "React",
            style: "shadow-cyan-400",
        },
        {
            id: 7,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-400",
        },
        {
            id: 8,
            src: bootstrap,
            title: "Bootstrap",
            style: "shadow-purple-600",
        },
        {
            id: 9,
            src: java,
            title: "Java",
            style: "shadow-red-400",
        },
        {
            id: 10,
            src: springBoot,
            title: "Spring Boot",
            style: "shadow-lime-400",
        },
        {
            id: 11,
            src: thymeleaf,
            title: "Thymeleaf",
            style: "shadow-green-600",
        },
        {
            id: 12,
            src: mySQL,
            title: "MySQL",
            style: "shadow-orange-600",
        },
        {
            id: 13,
            src: postgreSQL,
            title: "PostgreSQL",
            style: "shadow-sky-600",
        },
        {
            id: 14,
            src: sequelize,
            title: "Sequelize",
            style: "shadow-blue-600",
        },
        {
            id: 15,
            src: git,
            title: "GIT",
            style: "shadow-red-600",
        },
        {
            id: 16,
            src: github,
            title: "GitHub",
            style: "shadow-gray-400",
        },
    ];
    return (
        <div id="experience" className="w-full h-fit  pt-20 bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="max-w-screen-lg mx-auto p-4 flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
                    <p className="py-6">These are the technologies I've worked with</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 sm:px-12">
                    {technologies.map(({ id, src, title, style }) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg  ${style}`}>
                            <img src={src} alt="tech" className="w-20 mx-auto " />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
