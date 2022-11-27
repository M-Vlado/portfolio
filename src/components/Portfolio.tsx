import pexeso from "../assets/portfolio/pexesoApp1.png";
import pexeso1 from "../assets/portfolio/pexeso1.png";
import pexeso2 from "../assets/portfolio/pexeso2.png";
import pexeso3 from "../assets/portfolio/pexeso3.png";
import vocrApp from "../assets/portfolio/vocrApp1.png";
import ebProject from "../assets/portfolio/EB-project2.png";
import ocr1 from "../assets/portfolio/vocrAppMenu.png";
import ocr2 from "../assets/portfolio/vocrAppShare.png";

import { useState } from "react";
import ModalViewOfPortfolio, { ModalViewOfPortfolioProps } from "./ModalViewOfPortfolio";

const Portfolio = () => {
    const [modalView, setModalView] = useState<ModalViewOfPortfolioProps>({} as ModalViewOfPortfolioProps);

    const portfolios = [
        {
            id: 1,
            src: pexeso,
            modalView: {
                openModal: true,
                title: "Find Pair - Smiling PEXESO mobile application",
                text: "This was my first mobile application after I have started learn JAVA and Android. It's simple game, but I learnt so much during the development. The application you can download on Google Play through the ",
                link: "https://play.google.com/store/apps/details?id=com.smiling.pexeso&gl=SK",
                imgs: [pexeso1, pexeso2, pexeso3],
            },
        },
        {
            id: 2,
            src: vocrApp,
            modalView: {
                openModal: true,
                title: "Virtual OCR mobile application",
                text: "This application has special meaning for me. Actually, it is the application why I have started to learn a programming. I know, there is so much to improve and this is also my future goal to remake this application in React Native and make a new better one. Unfortunately the application is not available for the download at this moment.",
                imgs: [ocr1, ocr2],
            },
        },
        {
            id: 3,
            src: ebProject,
            modalView: {
                openModal: true,
                title: "Green Fox Academy final project",
                text: "This application is about managing process in Green Fox Academy. This was our final project during the studying at Green Fox Academy. It was the time when we learn new stuff like JavaScript, TypeScript, React, Node.js, Express.js and so on... We had really enjoy building this application. If you are interested about it, you can check our final presentation video through the  ",
                link: "https://youtu.be/TYvwSEom6s8",
                imgs: [],
            },
        },
    ];

    function toggleModal(event: React.MouseEvent<HTMLButtonElement>) {
        const modalInfo = portfolios.find((portfolio) => {
            if (portfolio.id === Number.parseInt(event.currentTarget.id)) {
                return portfolio.modalView;
            }
        });
        if (modalInfo?.modalView) {
            setModalView(modalInfo.modalView);
        }
    }

    return (
        <div
            id="portfolio"
            className="bg-gradient-to-b from-black to-gray-800 text-white w-full md:h-fit pt-20 md:py-20 "
        >
            {" "}
            <ModalViewOfPortfolio
                openModal={modalView.openModal}
                title={modalView.title}
                text={modalView.text}
                link={modalView.link}
                imgs={modalView.imgs}
            />
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                    <p className="py-6">Check out some of my work right here</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-12">
                    {portfolios.map(({ id, src }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img src={src} alt="portfolio" className="rounded-md duration-200 hover:scale-105 " />
                            <div className="flex items-center justify-center">
                                <button
                                    id={`${id}`}
                                    onClick={toggleModal}
                                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                                >
                                    View details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
