import pcimg from "@/assets/png/BigScreen.svg"
function Introduce() {
    return (
        <div className="flex-1 flex flex-col items-stretch px-6 gap-10 md:gap-30 md:px-8">
            <div className="text-text text-2xl text-center font-black md:text-4xl">Let me <span className="text-accent">introduce</span> myself</div>

            <div className="flex flex-col flex-wrap justify-center items-center gap-8 md:flex-row-reverse">
                <div className="w-48 flex justify-center md:min-w-96 md:flex-1">
                    <img src={pcimg} />
                </div>
                <div className="md:min-w-96 md:flex-1 flex justify-center">
                    <div className="font-display text-text flex flex-col gap-2 text-justify md:text-2xl md:w-lg">
                        <div>
                            <span className="text-accent font-black">&gt;</span> I am a university student currently studying at <span className="text-accent font-black">Saigon University</span>. <br />
                        </div>
                        <div>
                            <span className="text-accent font-black">&gt;</span> I have a strong interest in backend web development, especially in building clean, maintainable, and scalable server-side applications. <br />
                        </div>
                        <div>
                            <span className="text-accent font-black">&gt;</span> My short-term career goal is to become a <span className="text-accent font-black">Backend Developer</span>, focusing on solid fundamentals and real-world project experience.
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}
export default Introduce;