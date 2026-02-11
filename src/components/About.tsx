import avatar from "@/assets/png/avatartam.png"
function About() {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="w-50">
                <img src={avatar} />
            </div>
            <div className="text-text font-display text-2xl text-center md:text-left md:text-3xl">
                Hi there! <br/>
                I’m <span className="text-accent font-black">Nguyen Ngoc Thien An</span><br/>
                <span className="text-accent">Software Developer</span> 
            </div>
        </div>
    )
}

export default About;