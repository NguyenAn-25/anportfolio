import avatar from "@/assets/png/avatar.png"
import LinkButton from "@/ui/LinkButton";
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
                <div className="flex gap-1 items-center">
                    <LinkButton content="resume"></LinkButton>
                    <div className="text-2xl">|</div>
                    <LinkButton content="github"></LinkButton>
                </div>
            </div>
        </div>
    )
}

export default About;