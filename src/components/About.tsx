import avatar from "@/assets/png/avatar.png"
import resumeLink from "@/assets/pdf/resume.pdf"
import ImageTextButton from "@/ui/ImageTextButton";
import github from "@/assets/svg/GithubWhite.svg";
import resume from "@/assets/svg/Paper.svg"

function About() {
    const githubLink = "https://github.com/NguyenAn-25"
    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="w-50 h-50 rounded-full bg-accent overflow-hidden">
                <img src={avatar} />
            </div>
            <div className="flex flex-col gap-3 items-center md:items-start">
                <div className="text-text font-display text-2xl text-center md:text-left md:text-3xl">
                    Hi there! <br />
                    I’m <span className="text-accent font-black">Nguyen Ngoc Thien An</span><br />
                    <span className="text-accent">Software Developer</span>
                </div>
                <div className="flex gap-3 items-center">
                    <ImageTextButton content="resume" imagePath={resume} path={resumeLink}></ImageTextButton>
                    <div className="bg-text w-px h-4"></div>
                    <ImageTextButton content="github" imagePath={github} path={githubLink}></ImageTextButton>
                </div>
            </div>

        </div>
    )
}

export default About;