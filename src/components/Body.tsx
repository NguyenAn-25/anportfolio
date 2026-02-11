import { useRef } from "react";
import About from "./About";
import Introduce from "./Introduce";
import Skill from './Skill';
import Education from "./Education";
import Projects from "./Projects";
import Contact from "./Contact";

type Props = {
    tag: string
}

function Body({ tag }: Props) {
    const aboutRef = useRef<HTMLDivElement>(null);
    const resumeRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    }

    switch (tag) {
        case "about":
            console.log(aboutRef);
            scrollTo(aboutRef);
            break;
        case "resume":
            console.log(resumeRef);
            scrollTo(resumeRef);
            break;
        case "projects":
            console.log(projectsRef)
            scrollTo(projectsRef);
            break;
        case "contact":
            console.log(contactRef);
            scrollTo(contactRef);
            break;
        default:
            break;
    }

    return (
        <div className="flex flex-col bg-bg items-stretch">
            <div ref={aboutRef} className="min-h-screen bg-bg flex items-center justify-center p-8">
                <About></About>
            </div>
            <div className="min-h-screen bg-bg flex items-center justify-center p-8">
                <Introduce></Introduce>
            </div>
            <div ref={resumeRef} className="min-h-screen bg-bg flex items-center justify-center p-8">
                <Education></Education>
            </div>
            <div className="min-h-screen bg-bg flex items-center justify-center p-8">
                <Skill></Skill>
            </div>
            <div ref={projectsRef} className="min-h-screen bg-bg flex items-center justify-center p-8">
                <Projects></Projects>
            </div>
            <div ref={contactRef} className="bg-bg flex items-center justify-center p-8">
                <Contact></Contact>
            </div>
        </div>
    )
}

export default Body;