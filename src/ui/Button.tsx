
type Props = {
    path:string;
    content:string;
}
function Button({path, content}: Props){
    return(
        <div className="cursor-pointer flex justify-center gap-2 rounded py-2 w-24 h-fit bg-accent hover:bg-hoverButton active:bg-hoverButton">
            <div className="w-6">
                <img src={path} alt="" className="select-none" />
            </div>
            <div className="select-none">{content}</div>
        </div>
    )
}

export default Button;