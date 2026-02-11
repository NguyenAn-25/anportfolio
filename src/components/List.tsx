import icon from "@/assets/svg/List.svg";
import { useState } from "react";
import SectionBtn from '../ui/SectionBtn';

type Props = {
    onClick: (s: string) => void;
}

function List({onClick}: Props) {

    const [open, setOpen] = useState(false);

    return (
        <div className="relative">
            <div className="hover:bg-accent active:bg-accent p-1 rounded flex" onClick={() => setOpen(!open)}>
                <img src={icon} alt="" className="align-middle" />
            </div>

            {open &&
                <div className="absolute right-0 top-full flex-col bg-white/0 backdrop-blur-md">
                    <SectionBtn tag="about" onClick={onClick}>About</SectionBtn>
                    <SectionBtn tag="resume" onClick={onClick}>Resume</SectionBtn>
                    <SectionBtn tag="projects" onClick={onClick}>Projects</SectionBtn>
                    <SectionBtn tag="contact" onClick={onClick}>Contact</SectionBtn>
                </div>
            }

        </div>

    )
}

export default List;