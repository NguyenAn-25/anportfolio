import avatar from "@/assets/png/avatar.png"
import resume from "@/assets/pdf/resume.pdf"

function About() {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="w-50 h-50 rounded-full bg-accent overflow-hidden">
                <img src={avatar} />
            </div>
            <div className="text-text font-display text-2xl text-center md:text-left md:text-3xl">
                Hi there! <br />
                I’m <span className="text-accent font-black">Nguyen Ngoc Thien An</span><br />
                <span className="text-accent">Software Developer</span>
                <div className="flex gap-3 items-center">
                    <a className="text-accent text-base" href={resume} target="_blank">Resume</a>
                    <div className="bg-text w-px h-4"></div>
                    <a className="text-accent text-base" href="https://github.com/NguyenAn-1703" target="_blank">Github</a>
                </div>
            </div>
        </div>
    )
}

export default About;