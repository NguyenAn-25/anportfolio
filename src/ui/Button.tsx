
type Props = {
    path:string;
    content:string;
    link?: string
}
function Button({path, content, link}: Props){
    return(
        <a href={link} target="_blank" className="cursor-pointer flex justify-center gap-2 rounded py-2 w-24 h-fit bg-accent hover:bg-hoverButton active:bg-hoverButton">
            <div className="w-6">
                <img src={path} alt="" className="select-none" />
            </div>
            <div className="select-none">{content}</div>
        </a>
    )
}

export default Button;