const About = () => {
    return (
        <div
            id="about"
            className="w-full h-fit pt-20 md:pt-0 md:h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-400">About me</p>
                </div>
                <p className="text-xl mt20 leading-relaxed text-justify">
                    I'm 34 years old passionate junior programmer. My programming journey has started 2 years ago. From
                    the beginning I was self-taught learning Java and Android. My first application was child game
                    called Pexeso, than I set new goal to create an application for passionate obstacle runners like
                    Spartan race runners because I'm one of them. After 6 months I did it!
                </p>
                <br />
                <p className="text-xl leading-relaxed text-justify">
                    When the application was done I have realized that there is so much to learn and I am still at the
                    beginning, so I decided to sign in to the Green Fox Academy course. I think, it was one of the best
                    decision in my life so far. The course had three modules. During the first two modules we learnt
                    Backend technologies like Java, OOP, Spring Boot, Thymeleaf and much more... In the last module we
                    had started our final Full Stack project. The catch was that we had one week to learn all new
                    technologies and languages like Javascript, Typescript, Node.js, Express.js, React and much much
                    more... We made it and I was really enjoying it. During the project phase I have realized that the
                    Full Stack is the path I want to continue in the future. I like to see how I can create a new
                    amazing things just by the few lines of the code :)
                </p>
            </div>
        </div>
    );
};

export default About;
