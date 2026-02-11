import Dot from "@/ui/Dot"
import SectionBtn from "../ui/SectionBtn"
import List from "./List"
import Logo from "./Logo"

type Props = {
    onClick: (s: string) => void;
}

function Header({onClick}: Props) {
    return <div className="px-6 md:px-24 py-2 flex justify-between items-center fixed top-0 left-0 w-full bg-white/0 backdrop-blur-md">
        <Logo></Logo>

        <div className="flex md:hidden">
            <List onClick={onClick}></List>
        </div>

        <div className="justify-end items-center gap-4 hidden md:flex bg-white/0 backdrop-blur-md">
            <SectionBtn tag="about" onClick={onClick}>About</SectionBtn><Dot/>
            <SectionBtn tag="resume" onClick={onClick}>Resume</SectionBtn><Dot/>
            <SectionBtn tag="projects" onClick={onClick}>Projects</SectionBtn><Dot/>
            <SectionBtn tag="contact" onClick={onClick}>Contact</SectionBtn>
        </div>
    </div>
}

export default Header