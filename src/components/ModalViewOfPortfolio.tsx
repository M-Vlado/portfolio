import { useEffect, useState } from "react";
export type ModalViewOfPortfolioProps = {
    openModal: boolean;
    title: String;
    text: String;
    link?: string;
    imgs: string[];
};

const ModalViewOfPortfolio = ({ openModal, title, text, link, imgs }: ModalViewOfPortfolioProps) => {
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        setShowModal(openModal);
    }, [openModal, title, text, link, imgs]);

    return (
        <>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition ">
                        <div className="relative w-auto my-6 mx-auto max-w-6xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gradient-to-b from-gray-800 to-black text-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl pt-8 sm:pt-0 font-semibold text-white">{title}</h3>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-gray-500 text-lg leading-relaxed text-justify">
                                        <>
                                            {text}
                                            {link && (
                                                <a
                                                    href={link}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-blue-400 hover:cursor-pointer"
                                                >
                                                    LINK.
                                                </a>
                                            )}
                                        </>
                                    </p>
                                    {imgs.length !== 0 && (
                                        <div className="flex align-bottom justify-around w-full sm:w-2/3 mx-auto">
                                            {imgs.map((img) => (
                                                <img src={img} alt="portfolio" className="w-1/4 sm:w-1/6 h-1/5" />
                                            ))}
                                        </div>
                                    )}
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none hover:scale-110 duration-300"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
};

export default ModalViewOfPortfolio;
