import user from "@/assets/svg/User.svg";
import paper from "@/assets/svg/Paper.svg";
import board from "@/assets/svg/Board.svg";
import card from "@/assets/svg/Card.svg";

type InputProps = {
    tag: string;
    children: React.ReactNode;
    onClick: (s: string) => void;
};

function SectionBtn(props: InputProps) {
    let path;
    switch (props.tag) {
        case "about":
            path = user;
            break;
        case "resume":
            path = paper;
            break;
        case "projects":
            path = board;
            break;
        case "contact":
            path = card;
            break;
        default:
            path = user;
            break;
    }

    const OnChangeSection = () => {
        props.onClick(props.tag)
    }

    return (
        <div className="flex gap-2 p-2 hover:bg-accent active:bg-accent rounded cursor-pointer" onClick={OnChangeSection}>
            <div className="w-6 flex justify-center">
                <img src={path} className="select-none"/>
            </div>
            <div className="text-text text-m select-none">{props.children}</div>
        </div>
    );
}

export default SectionBtn;